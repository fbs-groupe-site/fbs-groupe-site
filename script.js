
// On récupère le formulaire grâce à son id
const formulaire = document.getElementById("contactForm");

// On écoute l'événement "submit"
formulaire.addEventListener("submit", function(e) {
    // Empêche le rechargement automatique de la page
    e.preventDefault();

    // On récupère la valeur du champ nom
    const nom = document.getElementById("nom").value;

    // On affiche un message
    alert("Merci " + nom + " ! Votre message a bien été envoyé.");
});