if ("serviceWorker" in navigator) {

  const swCode = `

  const phrases=[
  "Confie no processo.",
  "Disciplina cria liberdade.",
  "Persistência gera resultados.",
  "Seu foco constrói o futuro.",
  "Cada passo conta."
  ];

  function random(){
    return phrases[Math.floor(Math.random()*phrases.length)];
  }

  self.addEventListener("install",()=>{
    self.skipWaiting();
  });

  setInterval(()=>{
    self.registration.showNotification(
      "Afirmação do momento ✨",
      { body: random() }
    );
  },1000*60*30);

  `;

  const blob = new Blob([swCode], { type: "text/javascript" });
  const swURL = URL.createObjectURL(blob);

  navigator.serviceWorker.register(swURL);

}