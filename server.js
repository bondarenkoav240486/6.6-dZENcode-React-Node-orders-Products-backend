// filepath: /D:/Education_and_work/6.6-dZENcode-React-Node-orders-Products-backend/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

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