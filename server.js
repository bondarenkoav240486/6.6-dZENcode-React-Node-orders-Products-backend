require('dotenv').config(); // Додано для завантаження змінних середовища з файлу .env
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
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

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, "   ", password)
  // Перевірка на валідність email та пароль
  try {
    const user = await User.findOne({ email, password });
    console.log(user)
    if (user) {
    console.log(user)

      const token = jwt.sign({ email }, secretKey, { expiresIn: '1m' }); // Змінено час життя токена на 1 хвилину
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

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