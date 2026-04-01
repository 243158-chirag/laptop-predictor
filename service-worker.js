self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("laptop-predictor").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js"
      ]);
    })
  );
});