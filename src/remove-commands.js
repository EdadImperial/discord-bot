const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

(async () => {
	try {
        //delete all commands
        
        const data = await rest.get(Routes.applicationGuildCommands(clientId, guildId));
        console.log(`Started removing ${data.length} application (/) commands.`);
        for (const command of data) {
            await rest.delete(Routes.applicationGuildCommand(clientId, guildId, command.id));
        }
        
		console.log(`Successfully removed ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();