
const circles = document.querySelectorAll('.circle-one, .circle-two, .circle-three, .circle-four, .circle-center');



circles.forEach(circle => {
    circle.addEventListener('click', () => {
      circle.classList.toggle('active');
     });
  });

  circles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
      if (!circle.classList.contains('active')) {
        circles.forEach(circle => circle.style.animationPlayState = 'paused');
      }
    });
  
    circle.addEventListener('mouseout', () => {
      if (!circle.classList.contains('active')) {
        circles.forEach(circle => circle.style.animationPlayState = 'running');
      }
    });
  });
  
  