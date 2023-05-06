const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];

const command = require("./commands/ping.js");
const ip_command = require("./commands/ip.js");
const inv_command = require("./commands/invitar.js");
if ('data' in command && 'execute' in command) {
	commands.push(command.data.toJSON());
} else {
	console.log(`[WARNING] The command at ${command} is missing a required "data" or "execute" property.`);
}

if ('data' in ip_command && 'execute' in ip_command) {
	commands.push(ip_command.data.toJSON());
} else {
	console.log(`[WARNING] The command at ${ip_command} is missing a required "data" or "execute" property.`);
}

if ('data' in inv_command && 'execute' in inv_command) {
	commands.push(inv_command.data.toJSON());
}
// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
