// Load fuel prices and pump data from petrolData.js
const petrolPumps = petrolPumpsData;

// Populate dropdown with petrol pump names
const petrolPumpSelect = document.getElementById("petrolPumpSelect");
petrolPumps.forEach((pump, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = pump.name;
  petrolPumpSelect.appendChild(option);
});

// Fetch data when a pump is selected
function fetchData() {
  const selectedIndex = petrolPumpSelect.value;
  const outputDiv = document.getElementById("output");
  const loader = document.getElementById("loader");

  if (selectedIndex === "") {
    outputDiv.classList.add("hidden");
    return;
  }

  outputDiv.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    const pump = petrolPumps[selectedIndex];
    outputDiv.innerHTML = `
              <h2>${pump.name}</h2>
              <p><strong>Location:</strong> Latitude ${pump.location.lat}, Longitude ${pump.location.lng}</p>
              <p><strong>Petrol Price:</strong> ₹${pump.price.petrol} per litre</p>
              <p><strong>Diesel Price:</strong> ₹${pump.price.diesel} per litre</p>
              <p><strong>Amenities:</strong> ${pump.amenities.join(", ")}</p>
          `;
    loader.classList.add("hidden");
    outputDiv.classList.remove("hidden");
  }, 1500);
}

// Add event listener for dropdown change
petrolPumpSelect.addEventListener("change", fetchData);
