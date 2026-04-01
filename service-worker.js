<<<<<<< HEAD
const CACHE_NAME = "laptop-store-v1";

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll([
"./",
"./index.html",
"./style.css",
"./script.js",
"./manifest.json"
]);
})
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
=======
const CACHE_NAME = "laptop-store-v1";

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll([
"./",
"./index.html",
"./style.css",
"./script.js",
"./manifest.json"
]);
})
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
>>>>>>> 7bd28733c16e99c0c3faf4a9fc8c6b39ec2add21
});