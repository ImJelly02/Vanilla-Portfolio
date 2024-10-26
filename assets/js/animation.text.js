document.addEventListener('DOMContentLoaded', () => {
    // Shuffle Effect for the Intro Banner Text
    const introText = document.querySelector('.major');
    if (introText) shuffleText(introText, 50);

    // Trigger the reveal animation for text elements
    animateText();
});

function shuffleText(element, duration) {
    let originalText = element.textContent;
    let shuffledText = "";
    let index = 0;

    const shuffleInterval = setInterval(() => {
        shuffledText = "";
        for (let i = 0; i < originalText.length; i++) {
            shuffledText += i < index ? originalText[i] : String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }

        element.textContent = shuffledText;
        index++;

        if (index > originalText.length) {
            clearInterval(shuffleInterval);
            element.textContent = originalText;
        }
    }, duration);
}

function animateText() {
    const elements = document.querySelectorAll('.text-reveal');

    if (elements.length === 0) {
        console.warn("No elements found with the class 'text-reveal'.");
    }

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 700); // Delay for staggered animation
    });
}
