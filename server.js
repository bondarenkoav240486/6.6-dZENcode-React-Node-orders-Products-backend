const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { orders, products } = require('./db');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.get('/api/products', (req, res) => {
    res.json(products);
  });
  

let activeSessions = 0;

// Встановлення WebSocket-з'єднання
io.on('connection', (socket) => {
  activeSessions++;
  console.log('New connection established.');
  console.log(`Active sessions: ${activeSessions}`);

  // Відправка кількості активних сесій всім клієнтам
  io.emit('activeSessions', activeSessions);

  // Обробка відключення клієнта
  socket.on('disconnect', () => {
    activeSessions--;
    console.log('Connection disconnected.');
    console.log(`Active sessions: ${activeSessions}`);
    io.emit('activeSessions', activeSessions);
  });
});

// Запуск сервера
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});