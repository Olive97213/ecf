
// const circles = document.querySelectorAll('.circle-one, .circle-two, .circle-three, .circle-four, .circle-center');



// circles.forEach(circle => {
//   circle.addEventListener('click', () => {
//     circle.classList.toggle('active');
//   });
// });

// circles.forEach(circle => {
//   circle.addEventListener('mouseover', () => {
//     if (!circle.classList.contains('active')) {
//       circle.style.transition = 'all 0.2s ease';
//       circles.forEach(circle => circle.style.animationPlayState = 'paused');
//     }
//   });

//   circle.addEventListener('mouseout', () => {
//     if (!circle.classList.contains('active')) {
//       circle.style.transition = 'all 0.2s ease';
//       circles.forEach(circle => circle.style.animationPlayState = 'running');
//     }
//   });
// });

// const circles = document.querySelectorAll('.circle-one, .circle-two, .circle-three, .circle-four, .circle-center');

// circles.forEach(circle => {
//   circle.addEventListener('click', () => {
//     circle.classList.toggle('active');
//     const aboutText = circle.querySelector('.description');
//     if (circle.classList.contains('active')) {
//       aboutText.style.display = 'block';
//     } else {
//       aboutText.style.display = 'none';
//     }
//   });

//   circle.addEventListener('mouseover', () => {
//     if (!circle.classList.contains('active')) {
//       circle.style.transition = 'all 0.3s ease';
//       circles.forEach(circle => circle.style.animationPlayState = 'paused');
//     }
//   });

//   circle.addEventListener('mouseout', () => {
//     if (!circle.classList.contains('active')) {
//       circle.style.transition = 'all 0.3s ease';
//       circles.forEach(circle => circle.style.animationPlayState = 'running');
//     }
//   });
// });

function generateRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function updateGradientColor() {
  var bodyElement = document.getElementById("myBody");
  var gradientColor = generateRandomColor();
  bodyElement.style.setProperty("--gradient-color", gradientColor);
}

// Mettre à jour la couleur toutes les 3 secondes (3000 millisecondes)
setInterval(updateGradientColor, 3000);


const circles = document.querySelectorAll('.circle-one, .circle-two, .circle-three, .circle-four, .circle-center');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circle.classList.toggle('active');
    const aboutText = circle.querySelector('.description');
    if (circle.classList.contains('active')) {
      setTimeout(() => {
        aboutText.style.display = 'block';
      }, 2000);
    } else {
      aboutText.style.display = 'none';
    }

    const maPhoto = circle.querySelector(".maphoto");
    if (circle.classList.contains('active')) {
      setTimeout(() => {
      maPhoto.style.display = 'block';
      }, 1000);
    } else {
      maPhoto.style.display = 'none';
    }

  });

  circle.addEventListener('mouseover', () => {
    if (!circle.classList.contains('active')) {
      circle.style.transition = 'all 0.3s ease';
      circles.forEach(circle => circle.style.animationPlayState = 'paused');
    }
  });

  circle.addEventListener('mouseout', () => {
    if (!circle.classList.contains('active')) {
      circle.style.transition = 'all 0.3s ease';
      circles.forEach(circle => circle.style.animationPlayState = 'running');
    }
  });
});

const projects = document.querySelectorAll('.project-one, .project-two, .project-three, .project-four');

projects.forEach(project => {
  project.addEventListener('click', () => {
    const circle = project.parentElement.parentElement; // Accéder à l'élément cercle parent
    if (circle.classList.contains('active')) {
      circle.classList.remove('active');
      
    }
  });
});





