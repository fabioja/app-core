import express from 'express';
import apiRouter from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para analisar JSON
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`API Gateway rodando na porta ${PORT}`);
});