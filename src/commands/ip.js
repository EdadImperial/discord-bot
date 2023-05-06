const { SlashCommandBuilder } = require('discord.js');

const ip = {
	color: 16761382,
	fields: [
		{
			name: "IP",
			value: "play.edadimperial.com",
            inline: true
		},
		{
			name: "Version",
			value: "1.17 - 1.19.4",
			inline: true
		}
	]
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('Responde con la ip del servidor'),
	async execute(interaction) {
		await interaction.reply({embeds: [ip]});
	},
};
