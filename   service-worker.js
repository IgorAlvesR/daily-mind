const phrases = [
  "Confie no processo.",
  "Disciplina cria liberdade.",
  "Persistência gera resultados.",
  "Seu foco constrói o futuro.",
  "Cada passo conta."
];

function random() {
  return phrases[
    Math.floor(Math.random() * phrases.length)
  ];
}

self.addEventListener("install", () => {
  self.skipWaiting();
});

setInterval(() => {

  self.registration.showNotification(
    "Afirmação do momento ✨",
    { body: random() }
  );

}, 1000 * 60 * 30);