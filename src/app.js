function generateRandomCard() {
  // Palos disponibles
  const suits = ["heart", "spade", "club", "diamond"];
  // Valores disponibles
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

  // Generar un palo y valor aleatorio
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Seleccionar el contenedor de la carta
  const cardContainer = document.getElementById("card-container");

  if (!cardContainer) {
    return;
  }

  // Limpiar las clases anteriores
  cardContainer.classList.remove("heart", "spade", "club", "diamond");

  // Añadir la clase del palo y actualizar el contenido
  cardContainer.classList.add(randomSuit);

  // Actualizar los elementos dentro de la carta
  cardContainer.querySelector(".top-suit").innerHTML = getSuitSymbol(
    randomSuit
  ); // Solo el símbolo en la esquina
  cardContainer.querySelector(".middle-suit").innerHTML = randomValue; // El valor en el centro
  cardContainer.querySelector(".bottom-suit").innerHTML = getSuitSymbol(
    randomSuit
  ); // Solo el símbolo en la esquina
}

// Función para obtener el símbolo del palo
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
