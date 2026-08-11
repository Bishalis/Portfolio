import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { handleChatRequest } from './routes/chat.js';
const app = express();
const startedAt = new Date().toISOString();
app.use(cors({
    origin: env.frontendOrigin,
    methods: ['GET', 'POST', 'OPTIONS'],
}));
app.use(express.json({ limit: '1mb' }));
app.get('/', (_req, res) => {
    res.json({ message: 'Portfolio chatbot backend is running.' });
});
app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        startedAt,
        env: env.nodeEnv,
    });
});
app.post('/api/chat', handleChatRequest);
app.listen(env.port, () => {
    console.log(`Server listening on port ${env.port}`);
});
export default app;
//# sourceMappingURL=index.js.map