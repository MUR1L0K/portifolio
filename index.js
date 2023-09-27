window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

document.getElementById("themeButton").addEventListener("click", () => {
  const body = document.querySelector("body");
  const root = document.querySelector(":root");
  if (body.dataset.theme == "dark") {
    document.getElementById("homeButton").src = "images/botao-home.png";
    document.getElementById("themeImg").src = "images/night-mode.png";
    document.getElementById("locationImg").src = "images/location.png";
    document.getElementById("gitHubImg").src = "images/github.png";
    document.getElementById("linkedinImg").src = "images/linkedin.png";
    document.getElementById("gitHubImg02").src = "images/github.png";
    document.getElementById("linkedinImg02").src = "images/linkedin.png";
    document.getElementById("linkImg01").src = "images/external-link.png";
    document.getElementById("linkImg02").src = "images/external-link.png";
    document.getElementById("linkImg03").src = "images/external-link.png";
    document.getElementById("mailImg").src = "images/mail-icon.png";
    document.getElementById("phoneImg").src = "images/phone-icon.png";
    document.getElementById("copyImg01").src = "images/copy-icon.png";
    document.getElementById("copyImg02").src = "images/copy-icon.png";
    root.style.setProperty("--backGroundOne", "#fff");
    root.style.setProperty("--backGroundTwo", "#fff");
    root.style.setProperty("--backGroundThree", "#111827");
    root.style.setProperty("--letterColorOne", "#172439");
    root.style.setProperty("--letterColorTwo", "#fff");
    body.dataset.theme = "light";
  } else {
    document.getElementById("homeButton").src = "images/botao-home-white.png";
    document.getElementById("themeImg").src = "images/light-mode.png";
    document.getElementById("locationImg").src = "images/location-white.png";
    document.getElementById("gitHubImg").src = "images/github-white.png";
    document.getElementById("linkedinImg").src = "images/linkedin-white.png";
    document.getElementById("gitHubImg02").src = "images/github-white.png";
    document.getElementById("linkedinImg02").src = "images/linkedin-white.png";
    document.getElementById("linkImg01").src = "images/external-link-white.png";
    document.getElementById("linkImg02").src = "images/external-link-white.png";
    document.getElementById("linkImg03").src = "images/external-link-white.png";
    document.getElementById("mailImg").src = "images/mail-icon-white.png";
    document.getElementById("phoneImg").src = "images/phone-icon-white.png";
    document.getElementById("copyImg01").src = "images/copy-icon-white.png";
    document.getElementById("copyImg02").src = "images/copy-icon-white.png";
    root.style.setProperty("--backGroundOne", "#030712");
    root.style.setProperty("--backGroundTwo", "#111827");
    root.style.setProperty("--backGroundThree", "#fff");
    root.style.setProperty("--letterColorOne", "#fff");
    root.style.setProperty("--letterColorTwo", "#172439");
    body.dataset.theme = "dark";
  }
});
