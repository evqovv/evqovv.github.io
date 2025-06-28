const img = document.querySelector("img");

img.addEventListener("click", () => {
	const src = img.getAttribute("src");
	if (src === "images/firefox1.png") {
		img.setAttribute("src", "images/firefox2.png");
	} else {
		img.setAttribute("src", "images/firefox1.png");
	}
})

let but = document.querySelector("button");
let heading = document.querySelector("h1");

function set_user_name() {
	let name = prompt("Please enter your name: ");
	if (!name) {
		set_user_name();
	} else {
		localStorage.setItem("name", name);
		heading.innerHTML = "Mozilla is cool, " + name;
	}
}

if (!localStorage.getItem("name")) {
	set_user_name();
} else {
	let stored_name = localStorage.getItem("name");
	heading.innerHTML = "Mozilla is cool, " + stored_name;
}

but.addEventListener("click", () => {
	set_user_name();
});