// // // verification formulaire

// const nameEl = document.querySelector("#name");
// const firstnameEl = document.querySelector("#firstname");
// const emailEl = document.querySelector("#email");
// const form = document.querySelector(".contact");

// const checkName = () => {
//   let valid = false;


//   const name = nameEl.value.trim();

//   if (!isRequired(name)) {
//       showError(nameEl, "Le nom ne peut pas être vide");
//   } else {
//       showSuccess(nameEl);
//       valid = true;
//   }
//   return valid;
// };

// const checkFirstname = () => {
//   let valid = false;


//   const firstname = firstnameEl.value.trim();

//   if (!isRequired(firstname)) {
//       showError(firstnameEl, "Le Prénom ne peut pas être vide");
//   } else {
//       showSuccess(firstnameEl);
//       valid = true;
//   }
//   return valid;
// };

// const checkEmail = () => {
//   let valid = false;
//   const email = emailEl.value.trim();
//   if (!isRequired(email)) {
//       showError(emailEl, "l'email ne peut etre vide");
//   } else if (!isEmailValid(email)) {
//       showError(emailEl, "Email non valide");
//   } else {
//       showSuccess(emailEl);
//       valid = true;
//   }
//   return valid;
// };

// const isEmailValid = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// };

// const isRequired = (value) => (value === "" ? false : true);

// const isBetween = (length, min, max) =>
//     length < min || length > max ? false : true;

// const showError = (input, message) => {
//     // Récupération de l'élément parent de formulaire
//     const formField = input.parentElement;
//     // ajout de la classe error
//     formField.classList.remove("success");
//     formField.classList.add("error");

//     // voir le message d'erreur dans la balise small
//     const error = formField.querySelector("small");
//     error.textContent = message;
// };

// const showSuccess = (input) => {
//     // Récupération de l'élément parent de formulaire
//     const formField = input.parentElement;

//     // supprimer la classe error
//     formField.classList.remove("error");
//     formField.classList.add("success");

//     // cacher le message d'erreur dans la balise small
//     const error = formField.querySelector("small");
//     error.textContent = "";
// };

// form.addEventListener("submit", function (e) {
//     // empécher l'envois du formulaire
//      e.preventDefault(); 

//     // validation des champs
//     let isNameValid = checkName(),
//         isFirstnameValid = checkFirstname(),
//         isEmailValid = checkEmail(),
       

//     let isFormValid =
//         isNameValid &&
//         isFirstnameValid &&
//         isEmailValid &&
        

//     // soumettre le formulaire si tout est valide
//     if (isFormValid) {
//         console.log(nameEl);
//     }
// });
// // Techniquement, vous attendrez que les utilisateurs
// // suspendent la saisie pendant un petit laps de temps ou arrêtent de taper avant de valider la saisie.
// const debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//         // cancel the previous timer
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//         // setup a new timer
//         timeoutId = setTimeout(() => {
//             fn.apply(null, args);
//         }, delay);
//     };
// };

// form.addEventListener(
//     "input",
//     debounce(function (e) {
//         switch (e.target.id) {
           
//             case "name":
//                 checkName();
//                 break;
//             case "firstname":
//                 checkFirstname();
//                 break;
//             case "email":
//                 checkEmail();
//                 break;
           
//         }
//     })
// );
