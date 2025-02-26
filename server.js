const express = require('express');
const cors = require('cors');
const app = express();

// Настройка CORS
const corsOptions = {
  origin: ['https://quiz-git-front-vlads-projects-75803716.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

// Простой маршрут для проверки
app.get('/api/flags', (req, res) => {
  console.log("Request received:", req.query); // Логирование запроса
  res.json({ message: 'Hello from /api/flags' });
});

// Запуск сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});