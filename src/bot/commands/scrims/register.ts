import { ChatInputCommandInteraction, CommandInteraction } from "discord.js";

import { SlashCommandBuilder, MessageFlags, Message } from 'discord.js';

const baseUrl = `${process.env.API_URL}`;

export const data = new SlashCommandBuilder()
	.setName('scrims')
	.setDescription('scrim related commands')
    .addSubcommand(subcommand =>
        subcommand
            .setName('register')
            .setDescription('signup for a scrim week')
            .addIntegerOption(option => option.setName('id').setDescription('Osu ID'))
            .addIntegerOption(option => option.setName('week').setDescription('Week as a number'))
    )
    .addSubcommand(subcommand =>
        subcommand
            .setName('remove')
            .setDescription('remove a signup for a scrim week')
            .addIntegerOption(option => option.setName('week').setDescription('Week as a number'))
    )
export async function execute(interaction: ChatInputCommandInteraction) {
    try {
        const subcommandName = interaction.options.getSubcommand();
        console.log(subcommandName);

        switch(subcommandName){
            case 'register':
                const registration = {
                    osuId: Number(interaction.options.getInteger('id')),
                    osuUsername: 'test',
                    discordId: String(interaction.user.id),
                    discordUsername: interaction.user.username,
                    weeksRegistered: [interaction.options.getInteger('week')]
                };
                let registerResponse = await fetch(baseUrl + 'scrim/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(registration)
                });

                console.log(registration);
                await interaction.reply({ content: 'Registered successfully', flags: MessageFlags.Ephemeral});
                break;
            case 'remove':
                const user = {
                    id: String(interaction.user.id)
                };
                const removeResponse = await fetch(baseUrl + 'scrim/remove', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)
                });

                console.log(user);
                await interaction.reply({ content: 'Removed registration successfully', flags: MessageFlags.Ephemeral});
                break;
        }
        
    } catch (error){
        console.error('Error posting scrim registration: ', error);
        throw error;
    }
}