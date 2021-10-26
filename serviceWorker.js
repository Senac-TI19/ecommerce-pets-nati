const cacheName = 'cache-app-v1'

const recursosCacheados = [
    "index.html",
    "style.css",
    "index.js"];

self.addEventListener("install", function (event) {
    console.log("Service Worker instalado!");
    event.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(recursosCacheados);
        
        })
    );
});


self.addEventListener("activate", function () {
    console.log("Service worker ativado!");
});