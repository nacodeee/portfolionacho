const texts = ['Frontend Developer', 'Cybersec Engineer', 'Graphic/UI/UX Designer'];

let index = 0;
let letterIndex = 0;
let direction = 1;
let isDeleting = false;

function typeText() {
    const textSpan2 = document.getElementById('textSpan2');

    const currentText = texts[index];

    if (isDeleting) {
        textSpan2.textContent = currentText.substring(0, letterIndex - 1);
        letterIndex -= 1;
    } else {
        textSpan2.textContent = currentText.substring(0, letterIndex + 1);
        letterIndex += 1;
    }

    if (!isDeleting && letterIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeText, 500); 
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; 
        setTimeout(typeText, 500); 
    } else {
        setTimeout(typeText, 100); 
    }
}

typeText();


// *TRANSLATOR* // const languageBtn = document.getElementById('language-btn');
// *TRANSLATOR* // let isEnglish = true;
// *TRANSLATOR* // 
// *TRANSLATOR* // languageBtn.addEventListener('click', function() {
// *TRANSLATOR* //   const flags = {
// *TRANSLATOR* //     english: 'usa-flag.png',
// *TRANSLATOR* //     spanish: 'spain-flag.png'
// *TRANSLATOR* //   };
// *TRANSLATOR* // 
// *TRANSLATOR* //   const texts = {
// *TRANSLATOR* //     english: {
// *TRANSLATOR* //       home: 'Home',
// *TRANSLATOR* //       skills: 'Skills',
// *TRANSLATOR* //       about: 'About me',
// *TRANSLATOR* //       portfolio: 'Portfolio'
// *TRANSLATOR* //     },
// *TRANSLATOR* //     spanish: {
// *TRANSLATOR* //         home: 'Inicio',
// *TRANSLATOR* //         skills: 'Habilidades',
// *TRANSLATOR* //         about: 'Sobre mi',
// *TRANSLATOR* //         portfolio: 'Portfolio'
// *TRANSLATOR* //     }
// *TRANSLATOR* //   };
// *TRANSLATOR* // 
// *TRANSLATOR* //   if (isEnglish) {
// *TRANSLATOR* //     // Cambiar textos a inglés
// *TRANSLATOR* //     document.querySelectorAll('nav ul li a').forEach((link, index) => {
// *TRANSLATOR* //       link.textContent = Object.values(texts.english)[index];
// *TRANSLATOR* //     });
// *TRANSLATOR* //     // Cambiar bandera a España
// *TRANSLATOR* //     languageBtn.innerHTML = '<img src="assets/spain-flag.png" alt="Spain Flag" style="width: 20px; height: auto;">';
// *TRANSLATOR* //   } else {
// *TRANSLATOR* //     // Cambiar textos a español
// *TRANSLATOR* //     document.querySelectorAll('nav ul li a').forEach((link, index) => {
// *TRANSLATOR* //       link.textContent = Object.values(texts.spanish)[index];
// *TRANSLATOR* //     });
// *TRANSLATOR* //     // Cambiar bandera a Estados Unidos
// *TRANSLATOR* //     languageBtn.innerHTML = '<img src="assets/usa-flag.png" alt="USA Flag" style="width: 20px; height: auto;">';
// *TRANSLATOR* //   }
// *TRANSLATOR* // 
// *TRANSLATOR* //   // Cambiar estado de la bandera
// *TRANSLATOR* //   isEnglish = !isEnglish;
// *TRANSLATOR* // 
// *TRANSLATOR* //   // Cambiar el idioma de todo el contenido
// *TRANSLATOR* //   document.querySelectorAll('body *').forEach(element => {
// *TRANSLATOR* //     if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
// *TRANSLATOR* //       if (isEnglish) {
// *TRANSLATOR* //         if (element.dataset.spanish) {
// *TRANSLATOR* //           element.textContent = element.dataset.spanish;
// *TRANSLATOR* //         }
// *TRANSLATOR* //       } else {
// *TRANSLATOR* //         if (element.dataset.english) {
// *TRANSLATOR* //           element.textContent = element.dataset.english;
// *TRANSLATOR* //         }
// *TRANSLATOR* //       }
// *TRANSLATOR* //     }
// *TRANSLATOR* //   });
// *TRANSLATOR* // });
  
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener('click', scrollToTop);
  });
