// MENU MOBILE
const boutonMenu = document.getElementById("boutonMenu");
const menu = document.getElementById("menu");

if (boutonMenu && menu) {
  boutonMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// FERMER LE MENU APRÈS UN CLIC SUR UN LIEN
const liensMenu = document.querySelectorAll("#menu a");

liensMenu.forEach((lien) => {
  lien.addEventListener("click", () => {
    if (menu) {
      menu.classList.remove("show");
    }
  });
});

// FORMULAIRE DE CONTACT
const formulaireContact = document.getElementById("formulaireContact");

if (formulaireContact) {
  formulaireContact.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();

    if (nom === "") {
      alert("Veuillez entrer votre nom.");
      return;
    }

    alert("Merci " + nom + " ! Votre message a bien été envoyé.");
    formulaireContact.reset();
  });
}

// FORMULAIRE D’INSCRIPTION
const formInscription = document.getElementById("formInscription");

if (formInscription) {
  formInscription.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const motdepasse = document.getElementById("motdepasse").value;
    const confirme = document.getElementById("confirme").value;

    if (nom === "" || prenom === "") {
      alert("Veuillez remplir votre nom et votre prénom.");
      return;
    }

    if (motdepasse !== confirme) {
      alert("Les mots de passe ne sont pas identiques.");
      return;
    }

    alert("Merci " + prenom + " ! Votre inscription a bien été enregistrée.");
    formInscription.reset();
  });
}