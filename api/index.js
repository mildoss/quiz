const { flags, randomQuestion } = require("./flags");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://quiz-git-front-vlads-projects-75803716.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const count = parseInt(req.query.count) || 5;
  if (count > flags.length) {
    return res.status(400).json({ error: "No such flags" });
  }

  const selectedFlags = randomQuestion(count);
  res.json(selectedFlags);
};
