// import petrolPumpsData from "./petrolData.js";

let map;
let markers = [];

// Initialize Google Map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.6139, lng: 77.2090 }, // Default to Delhi
    zoom: 12,
  });

  // Add markers for all Petrol Pumps
  petrolPumpsData.forEach((pump) => {
    const marker = new google.maps.Marker({
      position: pump.location,
      map: map,
      title: pump.name,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${pump.name}</h3>
                <p>Location: (${pump.location.lat}, ${pump.location.lng})</p>
                <p>Petrol Price: ₹${pump.price.petrol} per litre</p>
                <p>Diesel Price: ₹${pump.price.diesel} per litre</p>
                <p>Amenities: ${pump.amenities.join(", ")}</p>`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    markers.push(marker);
  });

  // Fit map to markers
  fitMarkersToBounds();
}

// Fit all markers within bounds
function fitMarkersToBounds() {
  const bounds = new google.maps.LatLngBounds();
  markers.forEach((marker) => {
    bounds.extend(marker.getPosition());
  });
  map.fitBounds(bounds);
}

// Initialize map on load
window.initMap = initMap;
