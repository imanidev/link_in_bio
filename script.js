const name = "Hi, I'm Imani";
const element = document.getElementById("Hi, I'm Imani");
const speed = 100; // time delay in milliseconds between each character

function typeWriter(text, el) {
	//el is the element to print the text to (h1)
	//text is the text to print
	let i = 0;

	function type() {
		if (i < text.length) {
			el.textContent += text.charAt(i); // add next character to h1 element text
			i++; // increment i by 1 for next char in text
			setTimeout(type, speed); // call type function after speed delay (100ms)
		}
	}
	type();
}

typeWriter(name, element);
