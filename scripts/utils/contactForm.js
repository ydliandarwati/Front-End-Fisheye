// to open and close button x form 
export const showContactForm = () => {
	const contactBtn = document.querySelector(".contact_btn");
	const contactForm = document.querySelector(".modal_container");
	const closeBtn = document.querySelector(".close_btn");

	// show contact form when user click on contact button
	contactBtn.addEventListener("click", () => {
		contactForm.style.display = "flex";
		closeBtn.focus(); // puts focus on close (X) button
	});

	// close contact form when user clicks on X
	closeBtn.addEventListener("click", () => contactForm.style.display = "none");
};

// regular expressions for the fields
const nameRegExp = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{3,15})$/;
const emailRegExp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/;
const msgRegExp = /^[A-Za-z0-9|\s]{20,200}$/;

//to validate the form
export const validateForm = () => {
	// get form and the fields (name, email, message)
	const form = document.querySelector(".modal_form form");
	const firstName = document.getElementById("firstname");
	const lastName = document.getElementById("lastname");
	const email = document.getElementById("email");
	const message = document.getElementById("message");

	// check validity and show messages with every single input of user
	firstName.addEventListener("input", () => checkValidity(firstName, nameRegExp));
	lastName.addEventListener("input", () => checkValidity(lastName, nameRegExp));
	email.addEventListener("input", () => checkValidity(email, emailRegExp));
	message.addEventListener("input", () => checkValidity(message, msgRegExp));

	form.addEventListener("submit", e => {
		e.preventDefault();
		if (checkForm()) {
			// if form is valid extract its data -->  close and reset the form
			document.querySelector(".modal_container").style.display = "none";
			document.querySelectorAll(".formField").forEach(input => input.classList.remove("valid"));
			form.reset();
		}
	});

	const checkValidity = (input, regex) => {
		const errorMessage = input.dataset.error;
		const msgErrorElement = input.nextElementSibling;
		const isValid = regex.test(input.value);

		// add valid/invalid state for accessibility purposes
		if(isValid) {
			msgErrorElement.innerHTML = "";
			msgErrorElement.removeAttribute("role");
			input.removeAttribute("aria-invalid");
		} else {
			msgErrorElement.innerHTML = errorMessage;
			msgErrorElement.setAttribute("role", "alert");
			input.setAttribute("aria-invalid", "true");
		}

		input.classList.toggle("invalid", !isValid); // if valid, invalid is removed
		input.classList.toggle("valid", isValid); // if invalid, valid is removed

		return isValid;
	};

	const checkForm = () => {
		const firstnameIsValid = checkValidity(firstName, nameRegExp);
		const lastnameIsValid  = checkValidity(lastName, nameRegExp);
		const emailIsValid     = checkValidity(email, emailRegExp);
		const messageIsValid   = checkValidity(message, msgRegExp);
		return firstnameIsValid && lastnameIsValid && emailIsValid && messageIsValid;
	};
};