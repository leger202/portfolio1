alert("Bienvenue sur mon portfolio ! N'hésitez pas à me contacter via le formulaire.");




const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
nav.style.top = '0px';

  }
  else {
    nav.style.top = '-50px';
  }
})


const logo2 = document.querySelector('.logo2');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    logo2.style.opacity = '1';
  }
  else {
    logo2.style.opacity = '0';
  }
});
 const helium = document.getElementById('helium');
 window.addEventListener(scroll, () => {
if(window.scrollY =150){
  helium.style.transform = 'traslateX (300px)';
}

 })

const ratio = 0.3;
 //animation avec api intersection observer

 var option = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
 };



const handleIntersect =function( entries , observer){
  entries.forEach ( function(entry){
    if(entry.intersectionRatio > ratio){
      entry.target.classList.add('cprojets1');
       observer.unobserve(entry.target);
    };
   
  });
}

 var observer = new IntersectionObserver(handleIntersect, option);
 observer.observe(document.querySelector('.projets1'))


 const texte = " Je m'appelle  Léger Akodjenou Je suis étudiant et profondément passionné par le développement web J’aime concevoir et réaliser des sites web modernes, performants et fonctionnels Le web me permet d’exprimer ma créativité tout en apportant des solutions concrètes à des besoins réels À travers mes différents projets, je renforce continuellement mes compétences techniques et professionnelles..";
const element = document.getElementById("text");

let index = 0;
const vitesse = 50; // en millisecondes

function afficherTexte() {
  if (index < texte.length) {
    element.textContent += texte.charAt(index);
    index++;
    setTimeout(afficherTexte, vitesse);
  }
}

afficherTexte();
