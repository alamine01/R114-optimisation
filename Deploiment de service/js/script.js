(function(){
  // Light helper to fade-in images when they finish loading.
  const markLoaded = (img) => img.classList.add('loaded');

  document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.card img');
    imgs.forEach((img) => {
      // Ensure future loads don't block rendering.
      img.loading = 'lazy';
      img.decoding = 'async';

      if (img.complete) {
        markLoaded(img);
      } else {
        img.addEventListener('load', () => markLoaded(img), { once:true });
      }
    });
  });
})();
