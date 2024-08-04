import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
  <h1>Contact Information</h1>
<p id="personName"></p>
<button class="button" id="callButton">Call Parent</button>
<button class="button" id="whatsappButton">Send WhatsApp</button>
<button class="button" id="mapsButton">Open in Google Maps</button>
  </div>
`;

const params = new URLSearchParams(window.location.search);

// Extract information from the query parameters
const name = params.get("name");
const phoneNumber = params.get("phone");
const address = params.get("address");

// Update the page with the extracted information
document.getElementById("personName").textContent = `Name: ${name}`;

// Update button actions
document.getElementById("callButton").onclick = function () {
  window.location.href = `tel:${phoneNumber}`;
};

document.getElementById("whatsappButton").onclick = function () {
  window.location.href = `https://wa.me/${phoneNumber}`;
};

document.getElementById("mapsButton").onclick = function () {
  window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
};
