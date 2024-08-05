if (!window.location.pathname.includes("create")) {
  const params = new URLSearchParams(window.location.search);

  // Extract information from the query parameters
  const name = params.get("name");
  const phoneNumber = params.get("phone");
  const address = params.get("address");
  const avatar = params.get("avatar");
  console.l;
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
} else {
  const codes = window.codes;
  const glide = new Glide(".glide").mount();
  let avatarIndex = 0;
  let url = "";
  glide.on(["run"], function () {
    avatarIndex =
      document.querySelectorAll("li")[glide._i]?.getAttribute("data-value") ||
      0;
  });
  const linkContainer = document.getElementById("link-container");
  const countryCodeElement = document.getElementById("country-codes");
  const generateButton = document.getElementById("generate-button");
  const leftArrow = document.getElementById("left-arrow");
  leftArrow.addEventListener("click", () => {
    glide.go("<");
  });
  const rightArrow = document.getElementById("right-arrow");
  rightArrow.addEventListener("click", () => {
    glide.go(">");
  });
  linkContainer.addEventListener("click", (e) => {
    navigator.clipboard.writeText(url);
  });
  generateButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const countryCode = countryCodeElement.value;
    const phoneNumber = document.getElementById("phone-number").value;
    const firstLineOfAddess = document.getElementById("first-line").value;
    const postCode = document.getElementById("post-code").value;

    url = `
  https://tagisafe.netlify.app?name=${name}&avatar=${avatarIndex}&phone=${countryCode}${phoneNumber}&address=${firstLineOfAddess},${postCode}
  `;
    linkContainer.innerHTML = url;
    linkContainer.classList.remove("hide");
  });
  codes.forEach((code) => {
    const option = document.createElement("option");
    option.value = code["dial_code"].replace(/\+/gim, "");
    option.text = `${code["dial_code"]} (${code.name})`;
    countryCodeElement.appendChild(option);
  });
}
