//Animação de borda no header após scroll
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

//troca de tema do site
document.getElementById("chk").addEventListener("change", () => {
  const body = document.querySelector("body");
  const root = document.querySelector(":root");
  if (body.dataset.theme == "dark") {
    document.getElementById("gitHubImg").src = "images/github.png";
    document.getElementById("linkedinImg").src = "images/linkedin.png";
    document.getElementById("gitHubImg02").src = "images/github.png";
    document.getElementById("linkedinImg02").src = "images/linkedin.png";
    root.style.setProperty("--backGroundOne", "#fff");
    root.style.setProperty("--backGroundTwo", "#ededed");
    root.style.setProperty("--backGroundThree", "#111827");
    root.style.setProperty("--backGroundFour", "#c8cbd2");
    root.style.setProperty("--backGroundFive", "#0e142328");
    root.style.setProperty("--letterColorOne", "#172439");
    root.style.setProperty("--letterColorTwo", "#fff");
    root.style.setProperty("--letterColorThree", "#fff");
    root.style.setProperty("--linkTextShadow", "rgb(0, 0, 0)");
    root.style.setProperty("--downloadBackGround", "rgba(0, 0, 0, 0.776)");
    root.style.setProperty("--socialLinksBackGround", "#2e2e2e44");
    body.dataset.theme = "ligth";
  } else {
    document.getElementById("gitHubImg").src = "images/github-white.png";
    document.getElementById("linkedinImg").src = "images/linkedin-white.png";
    document.getElementById("gitHubImg02").src = "images/github-white.png";
    document.getElementById("linkedinImg02").src = "images/linkedin-white.png";
    root.style.setProperty("--backGroundOne", "#030712");
    root.style.setProperty("--backGroundTwo", "#111827");
    root.style.setProperty("--backGroundThree", "#fff");
    root.style.setProperty("--backGroundFour", "#374151");
    root.style.setProperty("--backGroundFive", "#0e1423");
    root.style.setProperty("--letterColorOne", "#fff");
    root.style.setProperty("--letterColorTwo", "#172439");
    root.style.setProperty("--letterColorThree", "#030712");
    root.style.setProperty("--linkTextShadow", "rgba(255, 255, 255, 0.8)");
    root.style.setProperty("--downloadBackGround", "#ffffffc9");
    root.style.setProperty("--socialLinksBackGround", "#ffffff44");
    body.dataset.theme = "dark";
  }
});
