(() => {
	// stub
	console.log('fired!');

	// select elements with JavaScript

	// setting up a variable using the let keyword,
	// and using a CSS slector to find the element we want to use.

	//;let stores the reference to element as a variable (in memory)
	let mainHeadline = document.querySelector("main-headline"),
		subHead = document.querySelector("#raster-vector h3"),
		swapTextButton = document.querySelector(".switch-type"),
		allImages = document.querySelector("#image-container img"),
		objectButton + document.querySelector(".container button")


	// functions are reusable pieces of code - put these between the variables and the event handling
	// that you can run any time
	function logMyId() {
		console.log(this.id);
		// toggle a class here with classlist

		// this.style.opacity = 0.5;
	}

	function swapText() {
		mainHeadline.textContent = "Now you're something else!";
		mainHealine.classlist.toggle("selected");


		subHead.textContent = "You are also something else!";
		mainHealine.classlist.toggle("selected");
	}

	function logTheSvg() {
		console.log(this.previousElementSibling.id);
	}


	// events always go down here
	// svgGraphic.addEvenListener("click", logMyId);
	swapTextButton.addEventListener("click", swapText);

	// select and loop through a bunch of items at once -> one to many relationship
	allImages.forEach(item => {
		item.addEventListener("click", logMyId)
	});

	// the button beside the svg objectButton
	objectButton.addEventListener("click", logMyId),

})();
