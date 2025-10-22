import { ChatInputCommandInteraction, CommandInteraction } from "discord.js";

import { SlashCommandBuilder, MessageFlags, Message } from 'discord.js';

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
export async function execute(interaction: ChatInputCommandInteraction) {
    try {
        const registration = {
            osuId: Number(interaction.options.getInteger('id')),
            osuUsername: 'test',
            discordId: String(interaction.user.id),
            discordUsername: interaction.user.displayName,
            weeksRegistered: [interaction.options.getInteger('week')]
        };
        const response = await fetch('http://localhost:3000/scrim/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registration)
        });

        console.log(registration);
    } catch (error){
        console.error('Error posting scrim registration: ', error);
        throw error;
    }
    console.log('test');
	await interaction.reply({ content: 'no one can see this', flags: MessageFlags.Ephemeral});
}