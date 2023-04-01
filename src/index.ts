import { Client } from "discord.js"
import { IntentOptions } from "./config/IntentOptions"
import { validateEnv } from "./config/ValidateEnv";
import { onInteraction } from "./events/InteractionEvent";
import { onReady } from "./events/OnReady";

(async () => {
    if (!validateEnv()) return


    const BOT = new Client({intents: IntentOptions})
    await BOT.login(process.env.TOKEN)


    BOT.on("ready", async () => await onReady(BOT))

    BOT.on("interactionCreate", async (interaction) => await onInteraction(interaction))


})();