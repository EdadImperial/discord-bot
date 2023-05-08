const { SlashCommandBuilder } = require('discord.js');

const info = {
    title: "INVITACIONES",
    color: 16765207,
    fields: [
      {
        name: "¿Cómo invitar?",
        value: "Paso 1: Dar click en el nombre del servidor\n\nPaso 2: Click en \"Invitar gente\"\n\nPaso 3: Click en el texto azul de \"Editar enlace de invitación\"\n\nPaso 4: Click al botón de \"Generar un nuevo enlace\"\n\nPaso 5: Copiar el enlace generado y enviárselo a quien quieras invitar"
      },
      {
        name: "¿Porqué no cuenta mis invitaciones?",
        value: "Asegúrate de que tu invitación tenga valores alfanuméricos y no diga \"edad-imperial\". Ej: discord.gg/vxG6r7d \n\nNo utilices este botón de invitar:"
      }
    ],
    image: {
      url: "https://imgur.com/TdPmsC7.png"
    }
  }


module.exports = {
	data: new SlashCommandBuilder()
		.setName('invitar')
		.setDescription('Responde con la información de cómo invitar a alguien al servidor'),
	async execute(interaction) {
		await interaction.reply({embeds: [info]});
	},
};