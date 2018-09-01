/* Set up Service Worker and Register */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service worker registration successful:' + registration);
    }) 
    .catch(error => {
      console.log('Service worker registration failed:' + error);
    });
  }