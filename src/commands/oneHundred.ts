import { CommandInt } from "../interfaces/Commands";
import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';


export const oneHundred: CommandInt = {
    data: new SlashCommandBuilder()   
        .setName("100")
        .setDescription("El pepe en 10 dias")
        .addStringOption((option) =>
            option
                .setName("Message")
                .setDescription("")
                .setRequired(true)
        ),
    
    run: async (interaction) => {
        await interaction.deferReply()
        const { user } = interaction
        const text = interaction.options.get("message", true).toString()

        const embed = new EmbedBuilder()
        embed.setTitle("100 dias")
        embed.setDescription(text)
        embed.setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL()
        })
        embed.setFooter({
            text: "Eso tilin: wow tilin " + new Date().toLocaleDateString("cl-ES")
        })

        await interaction.editReply({ embeds: [embed] })
    }
}