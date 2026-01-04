// ANECDOTES IMAGE CAROUSEL WITH CUSTOM CURSOR COUNTER

document.addEventListener('DOMContentLoaded', function() {
  const posts = document.querySelectorAll('.anecdote-post');
  
  posts.forEach(post => {
    const container = post.querySelector('.anecdote-image-container');
    const images = post.querySelectorAll('.anecdote-image');
    let currentIndex = 0;
    
    // UPDATE COUNTER DISPLAY
    function updateCounter() {
      const counter = `${currentIndex + 1} / ${images.length}`;
      container.setAttribute('data-counter', counter);
    }
    
    // SHOW SPECIFIC IMAGE
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
      updateCounter();
    }
    
    // HANDLE CLICK NAVIGATION
    container.addEventListener('click', function(e) {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const halfWidth = rect.width / 2;
      
      if (clickX < halfWidth) {
        // CLICKED LEFT HALF - PREVIOUS IMAGE
        currentIndex = (currentIndex - 1 + images.length) % images.length;
      } else {
        // CLICKED RIGHT HALF - NEXT IMAGE
        currentIndex = (currentIndex + 1) % images.length;
      }
      
      showImage(currentIndex);
    });
    
    // UPDATE CURSOR POSITION TO FOLLOW MOUSE
    container.addEventListener('mousemove', function(e) {
      container.style.setProperty('--mouse-x', e.clientX + 'px');
      container.style.setProperty('--mouse-y', e.clientY + 'px');
    });
    
    // INITIALIZE
    updateCounter();
  });
});