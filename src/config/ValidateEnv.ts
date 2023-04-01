export const validateEnv = () => {
    if (!process.env.TOKEN) {
        console.warn("Token de BOT invalido o no encontrado")
        return false
    }

    return true
}