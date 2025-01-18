require('dotenv').config(); // Додано для завантаження змінних середовища з файлу .env
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));

app.use(express.json());

const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key'; // Використовуйте секретний ключ з конфігурації

// Підключення до MongoDB
const mongoUri = process.env.MONGO_URI || 'your-mongodb-uri';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.use('/api/auth', authRoutes);
app.use('/api', orderRoutes);
app.use('/api', productRoutes);

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
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});