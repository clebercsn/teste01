const express = require('express');
const app = express();

// Middleware para entender JSON no corpo da requisição
app.use(express.json());

// Servir arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota POST para receber os dados de geolocalização
app.post('/api/dados', (req, res) => {
    const { latitude, longitude, timestamp } = req.body;
    console.log('📍 Localização recebida:');
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    console.log(`Horário: ${timestamp}`);
    res.sendStatus(200);
});

// Iniciar o servidor na porta definida pela Render ou 3000 localmente
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


