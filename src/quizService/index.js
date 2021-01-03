const qBank = [
  {
    question:
      "Which one of the following is not a Harappan site?",
    answers: ["Chanhudaro", "Kot Diji", "Sohgaura", "Desalpur"],
    correct: "Sohgaura",
    questionId: "099099"
  },
  {
    question:
      'In which of the following relief sculpture inscriptions is \'Ranyo Ashoka\' (King Ashoka) mentioned along with the stone portrait of Ashoka?',
    answers: ["Kanganahalli", "Sanchi I", "Shahbazgarhi", "Sohgaura"],
    correct: "Kanganahalli",
    questionId: "183452"
  },
  {
    question:
      "With reference to forced labour (Vishti) in India during the Gupta period, which one of the following statements is correct?",
    answers: [" It was considered a source of income for the State, a sort of tax paid by the people.", "It was totally absent in the Madhya Pradesh and Kathiawar regions of the Gupta Empire.", "The forced labourer was entitled to weekly wages.", "The eldest son of the labourer was sent as the forced labourer."],
    correct: "It was considered a source of income for the State, a sort of tax paid by the people.",
    questionId: "267908"
  },
  {
    question: "With reference to Mian Tansen, which one of the following statements is not correct?",
    answers: [
      "Tansen was the title given to him by Emperor Akbar.",
      "Tansen composed Dhrupads on Hindu gods and goddesses.",
      "Tansen composed songs on his patrons.",
      "Tansen invented many Ragas."
    ],
    correct: "Tansen was the title given to him by Emperor Akbar.",
    questionId: "333247"
  },
  {
    question: "With reference to Indian history, who among the following is a future Buddha, yet to come to save the world?",
    answers: ["Avalokiteshvara", "Lokesvara", "Maitreya", "Padmapani"],
    correct: "Maitreya",
    questionId: "496293"
  },
  {
    question:
      "Which one of the following was a very important seaport in the Kakatiya kingdom?",
    answers: [
      "Kakinada",
      "Motupalli",
      "Machilipatnam (Masulipatnam)",
      "Nelluru"
    ],
    correct: "Motupalli",
    questionId: "588909"
  },
  {
    question:
      'Banjaras during the medieval period of Indian history were generally',
    answers: ["agriculturists", "warriors", "weavers", "traders"],
    correct: "traders",
    questionId: "648452"
  },
  {
    question: "Who of the following had first deciphered the edicts of Emperor Ashoka?",
    answers: ["Georg Bilhler", "James Prinsep", "Max Muller", "William Jones"],
    correct: "James Prinsep",
    questionId: "786649"
  },
  {
    question:
      "With reference to the economic history of medieval India, the term Araghatta' refers to",
    answers: ["bonded labour", "land grants made to military officers", "waterwheel used in the irrigation of land", "wastel and converted to cultivated land"],
    correct: "waterwheel used in the irrigation of land",
    questionId: "839754"
  },
  {
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    answers: [
      "Cabbage Patch Kids",
      "Transformers",
      "Care Bears",
      "Rubik’s Cube"
    ],
    correct: "Cabbage Patch Kids",
    questionId: "98390"
  },
  {
    question: "Area 51 is located in which US state?",
    answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
    correct: "Nevada",
    questionId: "1226535"
  },
  {
    question: "What is the largest organ of the human body?",
    answers: ["Skin", "Heart", "large Intestine", "Liver"],
    correct: "Skin",
    questionId: "1436873"
  },
  {
    question: "Which sign of the zodiac is represented by the Crab?",
    answers: ["Cancer", "Libra", "Virgo", "Sagittarius"],
    correct: "Cancer",
    questionId: "1515110"
  },
  {
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    answers: ["Subscriber", "Single", "Secure", "Solid"],
    correct: "Subscriber",
    questionId: "1747256"
  },
  {
    question: "Which American president appears on a one dollar bill?",
    answers: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ],
    correct: "George Washington",
    questionId: "195075"
  },
  {
    question: "Which of these colours is NOT featured in the logo for Google?",
    answers: ["Pink", "Yellow", "Blue", "Green"],
    correct: "Pink",
    questionId: "2838900"
  },
  {
    question: "Who is depicted on the US hundred dollar bill?",
    answers: [
      "Benjamin Franklin",
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "Benjamin Franklin",
    questionId: "3182461"
  },
  {
    question: "What do the letters in the GMT time zone stand for?",
    answers: [
      "Greenwich Mean Time",
      "Global Meridian Time",
      "General Median Time",
      "Glasgow Man Time"
    ],
    correct: "Greenwich Mean Time",
    questionId: "3239112"
  },
  {
    question:
      'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."',
    answers: ["Truth", "Answer", "Cause", "Source"],
    correct: "Truth",
    questionId: "3410327"
  },
  {
    question: "What do the letters of the fast food chain KFC stand for?",
    answers: [
      "Kentucky Fried Chicken",
      "Kentucky Fresh Cheese",
      "Kibbled Freaky Cow",
      "Kiwi Food Cut"
    ],
    correct: "Kentucky Fried Chicken",
    questionId: "3791672"
  },
  {
    question: "Which restaurant's mascot is a clown?",
    answers: ["McDonald's", "Whataburger", "Burger King", "Sonic"],
    correct: "McDonald's",
    questionId: "3893585"
  },
  {
    question:
      "What machine element is located in the center of fidget spinners?",
    answers: ["Bearings", "Axles", "Gears", "Belts"],
    correct: "Bearings",
    questionId: "4235063"
  },
  {
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    answers: ["Libra", "Gemini", "Taurus", "Capricorn"],
    correct: "Libra",
    questionId: "4321002"
  },
  {
    question: "Which of the following presidents is not on Mount Rushmore?",
    answers: [
      "John F. Kennedy",
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "John F. Kennedy",
    questionId: "4442286"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
