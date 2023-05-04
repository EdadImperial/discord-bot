const { REST, Routes, ApplicationCommandManager } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

(async () => {
	try {
        //delete all commands
        const data = await rest.get(Routes.applicationCommands(clientId));
        for (const command of data) {
            await rest.delete(Routes.applicationCommand(clientId, command.id));
        }
        
		console.log(`${data.length}`);
	} catch (error) {
		console.error(error);
	}
})();