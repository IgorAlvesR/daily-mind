const manifest = {
  name: "MindFlow",
  short_name: "MindFlow",
  start_url: ".",
  display: "standalone",
  background_color: "#020617",
  theme_color: "#6366f1",
  icons: [
    {
      src: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      sizes: "192x192",
      type: "image/png"
    }
  ]
};

const blob = new Blob([JSON.stringify(manifest)], {
  type: "application/json"
});

const manifestURL = URL.createObjectURL(blob);

const link = document.createElement("link");
link.rel = "manifest";
link.href = manifestURL;

document.head.appendChild(link);