const name = "Hi, I'm Imani.";
const element = document.getElementById("Hi, I'm Imani.");

function typeWriter(text, el) {
    let i = 0;
    const speed = 100; // time delay in milliseconds between each character
    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

typeWriter(name, element);
