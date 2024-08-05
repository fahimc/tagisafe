import "./style.css";

const params = new URLSearchParams(window.location.search);

// Extract information from the query parameters
const name = params.get("name");
const phoneNumber = params.get("phone");
const address = params.get("address");
const avatar = params.get("avatar");

if (!address) {
  document.getElementById("mapsButton").style.display = "none";
} else {
  document.getElementById("mapsButton").onclick = function () {
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
  };
}

if (!name) {
  document.getElementById(
    "personName"
  ).innerHTML = `My Name<br/><span class="name">UNKNOWN</span>`;
} else {
  document.getElementById(
    "personName"
  ).innerHTML = `My Name<br/><span class="name">${name}</span>`;
}

if (!avatar) {
} else {
  document.getElementById("avatar").src = `avatar/avatar-${avatar}.svg`;
}
document.getElementById("callButton").onclick = function () {
  window.location.href = `tel:${phoneNumber}`;
};

document.getElementById("whatsappButton").onclick = function () {
  window.location.href = `https://wa.me/${phoneNumber}`;
};
new Glide(".glide").mount();
