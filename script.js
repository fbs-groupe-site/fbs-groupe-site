// ================= MENU MOBILE =================
const bouton = document.getElementById("boutonMenu");
const menu = document.getElementById("menu");

if (bouton && menu) {
  bouton.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}


const formulaire = document.getElementById("contactForm");

if (formulaire) {
  formulaire.addEventListener("submit", function(e) {
    e.preventDefault();

    const nomInput = document.getElementById("nom");

    if (nomInput) {
      const nom = nomInput.value;
      alert("Merci " + nom + " ! Votre message a bien été envoyé.");
    } else {
      alert("Message envoyé !");
    }
  });
}