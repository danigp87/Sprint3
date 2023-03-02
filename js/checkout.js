// Exercise 6
function validate() {

	let error = 0

	// Get the input fields
	let fName = document.getElementById("fName")
	let fLastN = document.getElementById("fLastN")
	let fEmail = document.getElementById("fEmail")
	let fAddress = document.getElementById("fAddress")
	let fPassword = document.getElementById("fPassword")
	let fPhone = document.getElementById("fPhone")
	let fSubmit = document.getElementById("formS")

	let errorName = document.getElementById("errorName")
	let errorLastN = document.getElementById("errorLastN")
	let errorEmail = document.getElementById("errorEmail")
	let errorAddress = document.getElementById("errorAddress")
	let errorPassword = document.getElementById("errorPassword")
	let errorPhone = document.getElementById("errorPhone")


	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value === "" || fName.value.length < 3 || /^[a-zA-Z]+$/.test(fName)) {
		fName.classList.add("is-invalid")
		errorName.style.display = "block"
		error++
	} else {
		fName.classList.remove("is-invalid")
		fName.classList.add("is-valid")
		errorName.style.display = "none"
	}

	if (fEmail.value === "" || fEmail.value.length < 3 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fEmail.value)) {
		fEmail.classList.add("is-invalid")
		errorEmail.style.display = "block"
		error++
	} else {
		fEmail.classList.remove("is-invalid")
		fEmail.classList.add("is-valid")
		errorEmail.style.display = "none"
	}

	if (fLastN.value === "" || fLastN.value.length < 3 || /^[a-zA-Z]+$/.test(fLastN)) {
		fLastN.classList.add("is-invalid")
		errorLastN.style.display = "block"
		error++
	} else {
		fLastN.classList.remove("is-invalid")
		fLastN.classList.add("is-valid")
		errorLastN.style.display = "none"
	}

	if (fAddress.value === "" || fAddress.value.length < 3) {
		fAddress.classList.add("is-invalid")
		error++
		errorAddress.style.display = "block"
	} else {
		fAddress.classList.remove("is-invalid")
		fAddress.classList.add("is-valid")
		errorAddress.style.display = "none"
	}

	if (fPassword.value === "" || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,8}$/)) {
		fPassword.classList.add("is-invalid")
		errorPassword.style.display = "block"
		error++
	} else {
		fPassword.classList.remove("is-invalid")
		fPassword.classList.add("is-valid")
		errorPassword.style.display = "none"
	}

	if (fPhone.value === "" || fPhone.value.length != 9 || isNaN(fPhone.value)) {
		fPhone.classList.add("is-invalid")
		errorPhone.style.display = "block"
		error++
	} else {
		fPhone.classList.remove("is-invalid")
		fPhone.classList.add("is-valid")
		errorPhone.style.display = "none"
	}


	if (error > 0) {
		fSubmit.addEventListener("submit", event => {
			event.preventDefault()
		}, true)
		alert("Error")
	} else {
		alert("OK")

	}
}