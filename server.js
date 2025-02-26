const express = require('express');
const cors = require('cors');
const { flags, randomQuestion } = require('./flags');
const app = express();

app.use(cors());

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
