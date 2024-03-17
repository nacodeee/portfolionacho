const texts = ['Desarrollador FullStack', 'Diseñador Gráfico', 'Diseñador UI/UX'];

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
        setTimeout(typeText, 500); // Espera antes de borrar
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Cambia al siguiente texto
        setTimeout(typeText, 500); // Espera antes de empezar a escribir el siguiente
    } else {
        setTimeout(typeText, 100); // Sigue escribiendo o borrando
    }
}

typeText();

    