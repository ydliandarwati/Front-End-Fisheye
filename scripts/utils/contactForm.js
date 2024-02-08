
//to open and close button x form 
export const openCloseFormContact = () => {
    const contactBtn = document.querySelector(".contact_btn");
    const contactForm = document.querySelector(".modal_wrapper");
    const closeBtn = document.querySelector(".btn_close");

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
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const msgRegExp = /^[A-Za-z0-9|\s]{20,200}$/;

//to validate the form
export const validateForm = () => {
    // get form and the fields (name, email, message)
    const form = document.querySelector('.modal_form form');
    const firstName = document.getElementById("firstname");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // check validity and show messages with every single input of user
    firstName.addEventListener('input', () => checkValidity(firstName, nameRegExp));
    lastName.addEventListener('input', () => checkValidity(lastName, nameRegExp));
    email.addEventListener('input', () => checkValidity(email, emailRegExp));
    message.addEventListener('input', () => checkValidity(message, msgRegExp));

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (checkForm()) {
            // if form is valid extract its data --> converts a JavaScript value to a JSON string
            // then, close and reset the form
            const formData = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                message: message.value,
            };
            console.log(JSON.stringify(formData));
            document.querySelector(".modal_wrapper").style.display = "none";
            document.querySelectorAll('.formField').forEach(input => input.classList.remove('valid'));
            form.reset();
        };
    });

    const checkValidity = (input, regex) => {
        const errorMessage = input.dataset.error;
        const messageProvider = input.nextElementSibling;
        const isValid = regex.test(input.value);

        if(isValid) {
            messageProvider.innerHTML = "";
            messageProvider.removeAttribute("role");
            input.removeAttribute("aria-invalid");
        } else {
            messageProvider.innerHTML = errorMessage;
            messageProvider.setAttribute("role", "alert")
            input.setAttribute("aria-invalid", "true");
        }

        input.classList.toggle('invalid', !isValid);
        input.classList.toggle('valid', isValid);

        return isValid;
    };

    const checkForm = () => {
        const firstnameIsValid = checkValidity(firstName, regexName);
        const lastnameIsValid  = checkValidity(lastName, regexName);
        const emailIsValid     = checkValidity(email, regexEmail);
        const messageIsValid   = checkValidity(message, regexMessage);
        return firstnameIsValid && lastnameIsValid && emailIsValid && messageIsValid;
    };
};