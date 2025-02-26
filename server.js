const express = require('express');
const cors = require('cors');
const { flags, randomQuestion } = require('./flags');
const app = express();

const corsOptions = {
  origin: 'https://quiz-git-front-vlads-projects-75803716.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

app.get("/api/flags", (req, res) => {
  const count = parseInt(req.query.count) || 5;

  if (count > flags.length) {
    return res.status(400).json({ error: 'No such flags' });
  }

  const selectedFlags = randomQuestion(count);
  res.json(selectedFlags);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
