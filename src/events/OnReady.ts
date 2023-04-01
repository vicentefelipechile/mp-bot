import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"
import { Client } from 'discord.js'
import { CommandList } from '../commands/_CommandList'


export const onReady = async (BOT: Client) => {
    const rest = new REST({ version: "9"}).setToken( process.env.TOKEN as string )
    
    const commandData = CommandList.map((command) => command.data.toJSON())

    await rest.put(
        Routes.applicationGuildCommands(
            BOT.user?.id || "Missing id",
            process.env.TOKEN as string
        ),

        { body: commandData }
    )

    console.log("Bot conectado en %s", BOT.user?.username)
    console.log("Bot listo para funcionar")
}