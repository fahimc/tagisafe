import "./create.css";
import { codes } from "./codes.js";
const glide = new Glide(".glide").mount();
let avatarIndex = 0;
let url = "";
glide.on(["run"], function () {
  avatarIndex =
    document.querySelectorAll("li")[glide._i]?.getAttribute("data-value") || 0;
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
