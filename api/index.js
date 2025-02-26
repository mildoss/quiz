const { flags, randomQuestion } = require("./flags");

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
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

  try {
    const selectedFlags = randomQuestion(count);
    res.json(selectedFlags);
  } catch (error) {
    console.error("Error generating question:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }

};
