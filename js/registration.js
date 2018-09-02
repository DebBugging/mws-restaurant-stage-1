/* Set up Service Worker and Register */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('Service worker registration successful:' + reg);
    }) 
    .catch(error => {
      console.log('Service worker registration failed:' + error);
    });
  }