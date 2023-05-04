
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


// creation fond d'ecran couleur random


// function generateRandomColor() {
//   var r = Math.floor(Math.random() * 256);
//   var g = Math.floor(Math.random() * 256);
//   var b = Math.floor(Math.random() * 256);
//   return "rgb(" + r + "," + g + "," + b + ")";
// }

// function updateGradientColor() {
//   var bodyElement = document.getElementById("myBody");
//   var gradientColor = generateRandomColor();
//   bodyElement.style.setProperty("--gradient-color", gradientColor);
// }


// setInterval(updateGradientColor, 3000);
// // Mettre à jour la couleur toutes les 3 secondes (3000 millisecondes)

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
      circle.style.transition = 'all 0.5s ease';
      circles.forEach(circle => circle.style.animationPlayState = 'paused');
    }
  });

  circle.addEventListener('mouseout', () => {
    if (!circle.classList.contains('active')) {
      circle.style.transition = 'all 0.5s ease';
      circles.forEach(circle => circle.style.animationPlayState = 'running');
    }
  });
});

const projects = document.querySelectorAll('.project-one, .project-two, .project-three, .project-four, .contact');

projects.forEach(project => {
  project.addEventListener('click', () => {
    const circle = project.parentElement.parentElement; // Accéder à l'élément cercle parent
    if (circle.classList.contains('active')) {
      circle.classList.remove('active');

    }
  });
});


const nameEl = document.querySelector("#name");
const firstnameEl = document.querySelector("#firstname");
const emailEl = document.querySelector("#email");
const form = document.querySelector(".contact");
const submit = document.querySelector("#submit");
const textArea = document.querySelector("#bio");

const checkName = () => {
  let valid = false;

  const name = nameEl.value.trim();

  if (!isRequired(name)) {
    showError(nameEl, "Le nom ne peut pas être vide");
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};

const checkFirstname = () => {
  let valid = false;

  const firstname = firstnameEl.value.trim();

  if (!isRequired(firstname)) {
    showError(firstnameEl, "Le Prénom ne peut pas être vide");
  } else {
    showSuccess(firstnameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "l'email ne peut être vide");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email non valide");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isNameValid = checkName();
  let isFirstnameValid = checkFirstname();
  let isEmailValid = checkEmail();

  let isFormValid =
    isNameValid &&
    isFirstnameValid &&
    isEmailValid;

  let ebody = `
    <h3>First Name: </h3>${firstnameEl.value}
    <br>
    <h3>Last Name: </h3>${nameEl.value}
    <br>
    <h3>Email: </h3>${emailEl.value}
    <br>
    <h3>Message: </h3>${textArea.value}
  `;

  // let ebody=

  // <b>Nom: </b>${nameEl.value}&nbsp;$(firstnameEl.value)
  // <br>
  // <b>Email: </b>${emailEl.value}
  // <br> 
  // <b>Message: </b>${textArea.value}
  // <br>






  if (isFormValid) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "colivier972@hotmail.fr",
      Password: "D5EA4C547E110307F8922C85AEF39FDB710A",
      To: 'colivier972@hotmail.fr',
      From: "colivier972@hotmail.fr",
      Subject: "This is the subject",
      Body: ebody
    }).then(
      message => alert(message)
    );
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.call(null, ...args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "name":
        checkName();
        break;
      case "firstname":
        checkFirstname();
        break;
      case "email":
        checkEmail();
        break;
    }
  })
);

// API meteo
let ville = 'Marseille';
// Afficher à l'entrée de la page une température d'une ville par défaut, ici Marseille
// Pour ca on appelle la fonction recevoirTemperature();
recevoirTemperature(ville);
function recevoirTemperature(ville) {
    let appid = '5dd4a3cfb9e347e4e1b4e7fd61fe21dd';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=' + appid + '&lang=fr&units=metric';
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();
    requete.onload = function () {
        console.log(requete);
        if (requete.readyState == XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let temp = requete.response.main.temp;
                let ville = requete.response.name;
                let icone = requete.response.weather[0].icon;
                let min = requete.response.main.temp_min;
                let max = requete.response.main.temp_max;
                let newDiv = document.createElement('div');
                newDiv.innerHTML = '<p>Min : <span class="text-primary font-weight-bold">' + min + '°C</span>' + '</p> <p>Max : <span class="text-danger font-weight-bold"> ' + max + '°C</span></p>';
                let img = document.createElement('img');
                img.src = 'https://openweathermap.org/img/wn/' + icone + '@2x.png';
                let selectVille = document.querySelector('#ville')
                selectVille.innerHTML = '<h2>' + ville + '</h2>';
                selectVille.append(img);
                selectVille.append(newDiv);
                let selectTemp = document.querySelector('#temperature_label')
                selectTemp.textContent = temp;
            }
            else {
                alert('Un problème est intervenu, merci de ressaisir une nouvelle ville ou revenir plus tard.');
            }
        }
    }
}
let bouton = document.querySelector('#changer');
bouton.addEventListener('click', () => {
    let villeChoisie = ville;
    villeChoisie = prompt('Quelle ville souhaitez-vous choisir ?');
    recevoirTemperature(villeChoisie);
})





