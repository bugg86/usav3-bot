const { SlashCommandBuilder, MessageFlags, Message } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scrims')
		.setDescription('scrim related commands')
        .addSubcommand(subcommand =>
            subcommand
                .setName('register')
                .setDescription('signup for a scrim week')
                .addIntegerOption(option => option.setName('id').setDescription('Osu ID'))
                .addIntegerOption(option => option.setName('week').setDescription('Week as a number'))
        ),
	async execute(interaction) {
        console.log('test');
		await interaction.reply({ content: 'no one can see this', flags: MessageFlags.Ephemeral});
	},
};