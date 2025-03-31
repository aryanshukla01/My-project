// Calculate average petrol price
function calculateAveragePetrolPrice() {
  const totalPrice = petrolPumpsData.reduce(
    (sum, pump) => sum + pump.price.petrol,
    0
  );
  const avgPetrolPrice = (totalPrice / petrolPumpsData.length).toFixed(2);
  return avgPetrolPrice;
}

// Calculate average diesel price
function calculateAverageDieselPrice() {
  const totalDieselPrice = petrolPumpsData.reduce(
    (sum, pump) => sum + pump.price.diesel,
    0
  );
  const avgDieselPrice = (totalDieselPrice / petrolPumpsData.length).toFixed(2);
  return avgDieselPrice;
}

// Display average prices in the DOM
function displayAveragePrices() {
  const avgPetrolPrice = calculateAveragePetrolPrice();
  const avgDieselPrice = calculateAverageDieselPrice();

  document.getElementById("priceOutput").innerHTML = `
    <p>🚗 The average <strong>petrol price</strong> at 15 Indian Oil Petrol Pumps in Delhi is <strong>₹${avgPetrolPrice} per litre</strong>.</p>
    <p>🚛 The average <strong>diesel price</strong> at 15 Indian Oil Petrol Pumps in Delhi is <strong>₹${avgDieselPrice} per litre</strong>.</p>
  `;
}

// Load prices on page load
window.onload = displayAveragePrices;
