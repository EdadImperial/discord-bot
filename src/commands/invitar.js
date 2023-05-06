const { SlashCommandBuilder } = require('discord.js');

const info = {
    title: "INVITACIONES",
    color: 16765207,
    fields: [
      {
        name: "Como invitar?",
        value: "Paso 1: Dar click en el nombre del servidor\n\nPaso 2: Click en \"Invitar gente\"\n\nPaso 3: Click en el texto azul de \"Editar enlace de invitacion\"\n\nPaso 4: Click al boton de \"Generar un nuevo enlace\"\n\nPaso 5: Copiar el enlace generado y enviarselo a quien quieras invitar"
      },
      {
        name: "Porque no cuenta mis invitaciones?",
        value: "Asegurate de que tu invitacion sea unos valores alfanumericos y no diga \"edad-imperial\". Ej: discord.gg/vxG6r7d \n\nNo utilices este boton de invitar:"
      }
    ],
    image: {
      url: "https://imgur.com/TdPmsC7.png"
    }
  }


module.exports = {
	data: new SlashCommandBuilder()
		.setName('invitar')
		.setDescription('Responde con la informacion de como invitar a alguien al servidor'),
	async execute(interaction) {
		await interaction.reply({embeds: [info]});
	},
};