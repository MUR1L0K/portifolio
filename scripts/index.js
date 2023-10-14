if (document.getElementById("01")) {
  //Animação de borda no header após scroll
  window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    if (window.scrollY > 0) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });

  //Mostrar o Menu
  let mobileMenu = document.querySelector("#mobileMenu");
  document.getElementById("menuButton").addEventListener("click", () => {
    if (mobileMenu.classList.contains("closed")) {
      mobileMenu.classList.remove("closed");
    } else {
      mobileMenu.classList.add("closed");
    }
  });
  if (window.innerWidth > 750) {
    mobileMenu.classList.add("closed");
  }

  //Muda idioma
  function atualizarIdioma(ev) {
    let languageSelected = ev.target.value;
    if (languageSelected == "pt") {
      document.querySelectorAll(".languages").forEach((element) => {
        element.value = "pt";
      });
      document.querySelectorAll(".sobre").forEach((element) => {
        element.innerText = "Sobre";
      });
      document.querySelectorAll(".habilidades").forEach((element) => {
        element.innerText = "Habilidades";
      });
      document.querySelectorAll(".projetos").forEach((element) => {
        element.innerText = "Projetos";
      });
      document.querySelectorAll(".contato").forEach((element) => {
        element.innerText = "Contato";
      });
      document.getElementById("presentationTitle").innerText =
        "Bem vindo ao meu Portifólio 👋";
      document.getElementById("presentationP").innerText =
        "Me chamo Murilo, sou um dev Full-Stack apaixonado por transformar ideias em realidade, combinando habilidades técnicas e criatividade. Estou sempre em busca de novas oportunidades para aperfeiçoar minhas habilidades e trabalhar em projetos desafiadores.";
      document.getElementById("textLocation").innerText =
        "Xv de Novembro / Brasil";
      document.getElementById("onlineP").innerText =
        "Disponível para novos projetos";
      document.getElementById("sobreTitle").innerText = "Sobre mim";
      document.getElementById("sobreSubTitle").innerText =
        "Algumas curiosidades sobre mim";
      document.getElementById("primeiroAboutP").innerText =
        "Sou autoproclamado full-stack designer 'especializado' em React.js & Node.js (com muito a aprender ainda). Sou um entusiasta em trazer aspectos técnicos e digitais a vida. User experience, pixel designer, e clean code, legível, códigos altamente performáveis são o que importa.";
      document.getElementById("segAboutP").innerText =
        "Eu comecei minha jornada como desenvolvedor web em 2022, desde então, continuei a me aperfeiçoar e crescer como um desenvolvedor, aceitando desafios e aprendendo as últimas tecnologias ao longo do caminho. Agora, após 1 ano desde que comecei minha carreira como desenvolvedor, estou em busca do meu primeiro emprego na área, crendo já ter conhecimentos necessários em React.js, TypeScript, Next.js e mais.";
      document.getElementById("terAboutP").innerText =
        "Sou bem criativo e gosto de trabalhar em produtos end-to-end, gosto de trabalhar em equipe e estou disposto a aprender muito com meus colegas de trabalho.";
      document.getElementById("quarAboutP").innerText =
        "Desde 2022 venho fazendo cursos e me aperfeiçoando na área, aprendendo sobre as últimas tecnologias e me capacitando para conseguir o primeiro emprego, creio que já tenho capacidade para me candidatar a vagas de júnior.";
      document.getElementById("quinAboutP").innerText =
        "Mais algumas poucas curiosidades sobre mim:";
      document.getElementById("liUm").innerText =
        "Cursando Bacharelado em Ciências da computação na UPF";
      document.getElementById("liDois").innerText =
        "Livre para empregos Full time";
      document.getElementById("liTres").innerText = "Aluno Focado";
      document.getElementById("liQuatro").innerText = "Desenvolvedor júnior";
      document.getElementById("sexAboutP").innerText =
        "Uma última coisa, estou disponível para trabalho, então sintas-se a vontade para entrar em contato! 😉";
      document.getElementById("skillTitle").innerText = "Habilidades";
      document.getElementById("skillsSmallText").innerText =
        "Tecnologias e ferramentas que tenho mais afinidade:";
      document.getElementById("projectsTitle").innerText = "Projetos";
      document.getElementById("projectsSmallText").innerText =
        "Alguns dos projetos que eu construi:";
      document.getElementById("projectOneTitle").innerText = "Calculadora";
      document.getElementById("projectTwoTitle").innerText = "Site de clima";
      document.getElementById("projectThreeTitle").innerText = "Planer Semanal";
      document.getElementById("projectOneP").innerText =
        "Um projeto simples em HTML, CSS e JS de uma calculador para realizar operações matemáticas.";
      document.getElementById("projectTwoP").innerText =
        "Uma aplicação web de design simples em HTML, CSS e JS com integração de duas APIs para verificar o clima de qualquer cidade que você pesquisar.";
      document.getElementById("projectThreeP").innerText =
        "Um projeto de planer semanal feito em React/vite para anotar as atividades semanais.";
      document.getElementById("contactTitle").innerText = "Entrar em contato";
      document.getElementById("contactSmallText01").innerText =
        "Você pode me chamar em:";
      document.getElementById("contactSmallText01").innerText =
        "Também pode me encotrar nessas plataformas!";
      document.getElementById("footerText").innerHTML =
        " &copy; 2023 | Designed and coded by Murilo Klein";
      document.getElementById("profileImg").alt = "Foto de perfil";
      document.getElementById("aboutImg").alt = "Foto de perfil 2";
      document.getElementById("imgCalculadora").alt = "Projeto Calculadora";
      document.getElementById("imgWeather").alt = "Projeto Site de clima";
      document.getElementById("imgPlaner").alt = "Projeto Planer semanal";
    } else if (languageSelected == "en") {
      document.querySelectorAll(".languages").forEach((element) => {
        element.value = "en";
      });
      document.querySelectorAll(".sobre").forEach((element) => {
        element.innerText = "About";
      });
      document.querySelectorAll(".habilidades").forEach((element) => {
        element.innerText = "Skills";
      });
      document.querySelectorAll(".projetos").forEach((element) => {
        element.innerText = "Projects";
      });
      document.querySelectorAll(".contato").forEach((element) => {
        element.innerText = "Contact";
      });
      document.getElementById("presentationTitle").innerText =
        "Welcome to my portfolio 👋";
      document.getElementById("presentationP").innerText =
        "My name is Murilo, I'm a Full-Stack dev passionate about turning ideas into reality, combining technical skills and creativity. I'm always looking for new opportunities to improve my skills and work on challenging projects.";
      document.getElementById("textLocation").innerText =
        "Xv de Novembro / Brazil";
      document.getElementById("onlineP").innerText =
        "Available for new projects";
      document.getElementById("sobreTitle").innerText = "About me";
      document.getElementById("sobreSubTitle").innerText =
        "Some curiosities about me";
      document.getElementById("primeiroAboutP").innerText =
        "I'm a self-proclaimed full-stack designer 'specializing' in React.js & Node.js (with a lot to learn yet). I am passionate about bringing technical and digital aspects to life. User experience, pixel designer, and clean code, readable, highly performable codes are what matter to me.";
      document.getElementById("segAboutP").innerText =
        "I started my journey as a web developer in 2022, since then I have continued to improve and grow as a developer, taking on challenges and learning the latest technologies along the way. Now, after 1 year since I started my career as a developer, I'm looking for my first job in the area, believing I already have the necessary knowledge in React.js, TypeScript, Next.js and more.";
      document.getElementById("terAboutP").innerText =
        "I'm very creative and I like working on end-to-end products, I like working in a team and I'm willing to learn a lot from my co-workers.";
      document.getElementById("quarAboutP").innerText =
        "Since 2022 I have been taking courses and improving in the area, learning about the latest technologies and training myself to get my first job. I believe I now have the capacity to apply for junior positions.";
      document.getElementById("quinAboutP").innerText =
        "A few more interesting facts about me:";
      document.getElementById("liUm").innerText =
        "Studying Bachelor of Science in Computer Science at UPF";
      document.getElementById("liDois").innerText = "Free for full time jobs";
      document.getElementById("liTres").innerText = "Committed student";
      document.getElementById("liQuatro").innerText = "Junior developer";
      document.getElementById("sexAboutP").innerText =
        "One last thing, I'm available for work, so feel free to get in touch! 😉";
      document.getElementById("skillTitle").innerText = "Skills";
      document.getElementById("skillsSmallText").innerText =
        "Technologies and tools that I have the most affinity with:";
      document.getElementById("projectsTitle").innerText = "Projects";
      document.getElementById("projectsSmallText").innerText =
        "Some projects i've built:";
      document.getElementById("projectOneTitle").innerText = "Calculator";
      document.getElementById("projectTwoTitle").innerText = "Weather Site";
      document.getElementById("projectThreeTitle").innerText = "To Do List";
      document.getElementById("projectOneP").innerText =
        "A simple project in HTML, CSS and JS of a calculator to perform mathematical operations.";
      document.getElementById("projectTwoP").innerText =
        "A simply designed web application in HTML, CSS and JS with integration of two APIs to check the weather of any city you search for.";
      document.getElementById("projectThreeP").innerText =
        "A weekly planner project made in React/vite to record weekly activities.";
      document.getElementById("contactTitle").innerText = "Get in touch";
      document.getElementById("contactSmallText01").innerText =
        "You can find me here:";
      document.getElementById("contactSmallText02").innerText =
        "You can also find me in these plaraforms!";
      document.getElementById("footerText").innerHTML =
        " &copy; 2023 | Designed and coded by Murilo Klein";
      document.getElementById("profileImg").alt = "Profile photo";
      document.getElementById("aboutImg").alt = "Profile photo 2";
      document.getElementById("imgCalculadora").alt = "Calculator project";
      document.getElementById("imgWeather").alt = "Weather site project";
      document.getElementById("imgPlaner").alt = "To do list project";
    }
  }
  document.querySelectorAll(".languages").forEach((element) => {
    element.addEventListener("change", atualizarIdioma);
  });
} else {
  //Animação de borda no header após scroll
  window.addEventListener("scroll", function () {
    var header = document.getElementById("header02");
    if (window.scrollY > 0) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });

  //Muda Idioma
  function atualizarIdioma02(ev) {
    let languageSelected = ev.target.value;
    if (languageSelected == "pt") {
      document.getElementById("projectsTitle").innerText = "Projetos";
      document.getElementById("projectsSmallText").innerText =
        "Alguns dos projetos que eu construi:";
      document.getElementById("projectOneTitle").innerText = "Calculadora";
      document.getElementById("projectTwoTitle").innerText = "Site de clima";
      document.getElementById("projectThreeTitle").innerText = "Planer Semanal";
      document.getElementById("projectFourTitle").innerText = "Jogo da Velha";
      document.getElementById("projectOneP").innerText =
        "Um projeto simples em HTML, CSS e JS de uma calculador para realizar operações matemáticas.";
      document.getElementById("projectTwoP").innerText =
        "Uma aplicação web de design simples em HTML, CSS e JS com integração de duas APIs para verificar o clima de qualquer cidade que você pesquisar.";
      document.getElementById("projectThreeP").innerText =
        "Um projeto de planer semanal feito em React/vite para anotar as atividades semanais.";
      document.getElementById("projectFourP").innerText =
        "Uma aplicação web para simular o famoso jogo da velha feito em JavaScript.";
      document.getElementById("footerText").innerHTML =
        " &copy; 2023 | Designed and coded by Murilo Klein";
      document.getElementById("imgCalculadora").alt = "Projeto Calculadora";
      document.getElementById("imgWeather").alt = "Projeto Site de clima";
      document.getElementById("imgPlaner").alt = "Projeto Planer semanal";
      document.getElementById("imgTicTacToe").alt = "Projeto Jogo da velha";
      document.getElementById("projectFiveTitle").innerText = "Super Trunfo";
      document.getElementById("projectFiveP").innerText =
        "Um projeto de jogo de cartas de trunfo do famoso anime pokemon.";
      document.getElementById("imgPokemon").alt = "Projeto Pokemon ";
      document.getElementById("projectSixTitle").innerText =
        "Marcador de Pontos";
      document.getElementById("projectSixP").innerText =
        "Um projeto de Marcador de pontos bem simples feito em JavaScript.";
      document.getElementById("imgMarcador").alt =
        "Projeto Marcador de pontos ";
      document.getElementById("projectSevenTitle").innerText = "Landing Page";
      document.getElementById("projectSevenP").innerText =
        "Uma Landing page simples feita em HTML e CSS.";
      document.getElementById("imgLandingpage01").alt = "Projeto Landing Page";
      document.getElementById("projectEightTitle").innerText = "Landing Page";
      document.getElementById("projectEightP").innerText =
        "Uma Landing page simples feita em HTML e CSS.";
      document.getElementById("imgLandingpage02").alt = "Projeto Landing Page";
      document.getElementById("projectNineTitle").innerText = "Mentalista";
      document.getElementById("projectNineP").innerText =
        "Um projeto advinhador de números simples feito em JavaScript.";
      document.getElementById("imgMentalista").alt = "Projeto Mentalista";
      document.getElementById("projectTenTitle").innerText =
        "Conversor de Moedas";
      document.getElementById("projectTenP").innerText =
        "Um projeto de conversor de moedas feito em JavaScript.";
      document.getElementById("imgConversor").alt = "Projeto Conversor";
      document.getElementById("projectElevenTitle").innerText = "Landing Page";
      document.getElementById("projectElevenP").innerText =
        "Uma Landing page simples feita em HTML, CSS e com Javascript.";
      document.getElementById("imgLandingpage03").alt = "Projeto Landing Page";
    } else if (languageSelected == "en") {
      document.getElementById("projectsTitle").innerText = "Projects";
      document.getElementById("projectsSmallText").innerText =
        "Some projects i've built:";
      document.getElementById("projectOneTitle").innerText = "Calculator";
      document.getElementById("projectTwoTitle").innerText = "Weather Site";
      document.getElementById("projectThreeTitle").innerText = "To Do List";
      document.getElementById("projectFourTitle").innerText = "Tic Tac Toe";
      document.getElementById("projectOneP").innerText =
        "A simple project in HTML, CSS and JS of a calculator to perform mathematical operations.";
      document.getElementById("projectTwoP").innerText =
        "A simply designed web application in HTML, CSS and JS with integration of two APIs to check the weather of any city you search for.";
      document.getElementById("projectThreeP").innerText =
        "A weekly planner project made in React/vite to record weekly activities.";
      document.getElementById("projectFourP").innerText =
        "A web application to simulate the famous tic-tac-toe game made in JavaScript.";
      document.getElementById("footerText").innerHTML =
        " &copy; 2023 | Designed and coded by Murilo Klein";
      document.getElementById("imgCalculadora").alt = "Calculator project";
      document.getElementById("imgWeather").alt = "Weather site project";
      document.getElementById("imgPlaner").alt = "To do list project";
      document.getElementById("imgTicTacToe").alt = "Tic tac toe project";
      document.getElementById("projectFiveTitle").innerText = "Card Game";
      document.getElementById("projectFiveP").innerText =
        "A card game project from the famous pokemon anime";
      document.getElementById("imgPokemon").alt = "Pokemon project";
      document.getElementById("projectSixTitle").innerText = "Scoreboard";
      document.getElementById("projectSixP").innerText =
        "A very simple Point Marker project made in JavaScript.";
      document.getElementById("imgMarcador").alt = "ScoreBoard project";
      document.getElementById("projectSevenTitle").innerText = "Landing Page";
      document.getElementById("projectSevenP").innerText =
        "A simple Landing page made in HTML and CSS.";
      document.getElementById("imgLandingpage01").alt = "LandingPage project";
      document.getElementById("projectEightTitle").innerText = "Landing Page";
      document.getElementById("projectEightP").innerText =
        "A simple Landing page made in HTML and CSS.";
      document.getElementById("imgLandingpage02").alt = "LandingPage project";
      document.getElementById("projectNineTitle").innerText = "Guesser";
      document.getElementById("projectNineP").innerText =
        "A project of a number guesser made in JavaScript";
      document.getElementById("imgMentalista").alt = "Guesser project";
      document.getElementById("projectTenTitle").innerText =
        "Currency Converter";
      document.getElementById("projectTenP").innerText =
        "A currency converter project made in JavaScript.";
      document.getElementById("imgConversor").alt = "Converter project";
      document.getElementById("projectElevenTitle").innerText = "Landing Page";
      document.getElementById("projectElevenP").innerText =
        "A simple Landing page made in HTML, CSS and with Javascript.";
      document.getElementById("imgLandingpage03").alt = "LandingPage Project";
    }
  }
  document.querySelectorAll(".languages").forEach((element) => {
    element.addEventListener("change", atualizarIdioma02);
  });
}

//Troca de tema do site
document.querySelectorAll(".checkbox").forEach((button) => {
  button.addEventListener("change", () => {
    const body = document.querySelector(".body");
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
      document.querySelectorAll(".checkbox").forEach((element) => {
        element.checked = true;
      });
    } else {
      document.getElementById("gitHubImg").src = "images/github-white.png";
      document.getElementById("linkedinImg").src = "images/linkedin-white.png";
      document.getElementById("gitHubImg02").src = "images/github-white.png";
      document.getElementById("linkedinImg02").src =
        "images/linkedin-white.png";
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
      document.querySelectorAll(".checkbox").forEach((element) => {
        element.checked = false;
      });
    }
  });
});

//copy function
let copyButtons = document.querySelectorAll(".copyButton");
copyButtons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const button = ev.target;
    if (button.id == "emailButton") {
      navigator.clipboard.writeText("murilo.kkleinn@gmail.com");
    } else if (button.id == "phoneButton") {
      navigator.clipboard.writeText("+55 (54) 99148-7046");
    }
  });
});
