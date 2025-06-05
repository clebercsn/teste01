const express = require('express');
const app = express();
const port = 3000;

// Middleware para entender JSON no corpo da requisição
app.use(express.json());

// Servir arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Rota POST para receber os dados de geolocalização
app.post('/api/dados', (req, res) => {
    const { latitude, longitude, timestamp } = req.body;
    console.log('📍 Localização recebida:');
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    console.log(`Horário: ${timestamp}`);
    res.sendStatus(200);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


