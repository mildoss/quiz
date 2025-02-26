const shuffleOptions = (options) => {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Меняем местами элементы
  }
  return shuffled;
}

const flags = [
  { flag: "https://flagcdn.com/w320/fr.png", options: shuffleOptions(["France", "Italy", "Germany", "Spain"]), correct: "France" },
  { flag: "https://flagcdn.com/w320/de.png", options: shuffleOptions(["Germany", "Austria", "Belgium", "Netherlands"]), correct: "Germany" },
  { flag: "https://flagcdn.com/w320/us.png", options: shuffleOptions(["USA", "Canada", "UK", "Australia"]), correct: "USA" },
  { flag: "https://flagcdn.com/w320/ua.png", options: shuffleOptions(["Ukraine", "Poland", "Russia", "Belarus"]), correct: "Ukraine" },
  { flag: "https://flagcdn.com/w320/jp.png", options: shuffleOptions(["Japan", "China", "South Korea", "Vietnam"]), correct: "Japan" },
  { flag: "https://flagcdn.com/w320/it.png", options: shuffleOptions(["Italy", "Greece", "Turkey", "Portugal"]), correct: "Italy" },
  { flag: "https://flagcdn.com/w320/gb.png", options: shuffleOptions(["UK", "Ireland", "Norway", "Denmark"]), correct: "UK" },
  { flag: "https://flagcdn.com/w320/br.png", options: shuffleOptions(["Brazil", "Argentina", "Chile", "Colombia"]), correct: "Brazil" },
  { flag: "https://flagcdn.com/w320/cn.png", options: shuffleOptions(["China", "Japan", "India", "South Korea"]), correct: "China" },
  { flag: "https://flagcdn.com/w320/in.png", options: shuffleOptions(["India", "Pakistan", "Nepal", "Bangladesh"]), correct: "India" },
  { flag: "https://flagcdn.com/w320/ca.png", options: shuffleOptions(["Canada", "USA", "Mexico", "Cuba"]), correct: "Canada" },
  { flag: "https://flagcdn.com/w320/au.png", options: shuffleOptions(["Australia", "New Zealand", "Fiji", "Papua New Guinea"]), correct: "Australia" },
  { flag: "https://flagcdn.com/w320/mx.png", options: shuffleOptions(["Mexico", "Peru", "Colombia", "Chile"]), correct: "Mexico" },
  { flag: "https://flagcdn.com/w320/ru.png", options: shuffleOptions(["Russia", "Ukraine", "Kazakhstan", "Belarus"]), correct: "Russia" },
  { flag: "https://flagcdn.com/w320/za.png", options: shuffleOptions(["South Africa", "Nigeria", "Kenya", "Egypt"]), correct: "South Africa" },
  { flag: "https://flagcdn.com/w320/kr.png", options: shuffleOptions(["South Korea", "North Korea", "Japan", "China"]), correct: "South Korea" },
  { flag: "https://flagcdn.com/w320/ng.png", options: shuffleOptions(["Nigeria", "Ghana", "Kenya", "South Africa"]), correct: "Nigeria" },
  { flag: "https://flagcdn.com/w320/eg.png", options: shuffleOptions(["Egypt", "Saudi Arabia", "Tunisia", "Morocco"]), correct: "Egypt" },
  { flag: "https://flagcdn.com/w320/es.png", options: shuffleOptions(["Spain", "Portugal", "Italy", "Greece"]), correct: "Spain" },
  { flag: "https://flagcdn.com/w320/ar.png", options: shuffleOptions(["Argentina", "Brazil", "Chile", "Peru"]), correct: "Argentina" },
  { flag: "https://flagcdn.com/w320/pl.png", options: shuffleOptions(["Poland", "Czech Republic", "Slovakia", "Hungary"]), correct: "Poland" },
  { flag: "https://flagcdn.com/w320/ro.png", options: shuffleOptions(["Romania", "Bulgaria", "Serbia", "Moldova"]), correct: "Romania" },
];

const randomQuestion = (count) => {
  const shuffled = [...flags].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

module.exports = { flags, randomQuestion };
