function generateRandomCard() {
  const suits = ["heart", "spade", "club", "diamond"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardContainer = document.getElementById("card-container");

  if (!cardContainer) {
    return;
  }

  cardContainer.classList.remove("heart", "spade", "club", "diamond");

  cardContainer.classList.add(randomSuit);

  cardContainer.querySelector(".top-suit").innerHTML = getSuitSymbol(
    randomSuit
  );
  cardContainer.querySelector(".middle-suit").innerHTML = randomValue;
  cardContainer.querySelector(".bottom-suit").innerHTML = getSuitSymbol(
    randomSuit
  );
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "heart":
      return "♥";
    case "spade":
      return "♠";
    case "club":
      return "♣";
    case "diamond":
      return "♦";
    default:
      return "";
  }
}
