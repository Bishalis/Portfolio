import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();
function getRequiredEnv(name) {
    const value = process.env[name];
    if (!value || value.trim().length === 0) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}
function getPort() {
    const rawPort = process.env.PORT ?? '5000';
    const parsedPort = Number(rawPort);
    if (!Number.isInteger(parsedPort) || parsedPort <= 0) {
        throw new Error('PORT must be a positive integer');
    }
    return parsedPort;
}
export const env = {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: getPort(),
    openAiApiKey: getRequiredEnv('OPENAI_API_KEY'),
    frontendOrigin: getRequiredEnv('FRONTEND_ORIGIN'),
};
//# sourceMappingURL=env.js.map