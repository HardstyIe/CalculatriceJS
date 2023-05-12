// DOM
const touches = [...document.querySelectorAll(".buttonCalc")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");

console.log(touches);
document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

touches.forEach((touche) => {
  touche.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
    console.log(valeur);
  });
});

const boutonEffacer = document.querySelector("#bouton-effacer");

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case "49,3":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      case "8":
        ecran.textContent = ecran.textContent.slice(0, -1);
        break;
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        ecran.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("Une erreur est survenue dans votre calcul : " + e.error.message);
});
