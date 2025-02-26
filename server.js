const express = require('express');
const cors = require('cors');
const { flags, randomQuestion } = require('./api/flags'); // Импорт флагов и функции
const app = express();

app.use(cors());

// Обработка запроса на флаги
app.get("/api/flags", (req, res) => {
  const count = parseInt(req.query.count) || 5; // Устанавливаем значение по умолчанию

  // Если запрашиваемое количество флагов больше доступного
  if (count > flags.length) {
    return res.status(400).json({ error: 'No such flags' });
  }

  // Получаем случайные флаги
  const selectedFlags = randomQuestion(count);
  res.json(selectedFlags);
});

// Запуск сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
