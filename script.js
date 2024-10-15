function nameFunction(event) {
    event.preventDefault(); // Prevent the form from submitting

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');

    if (firstName.length < 6) {
        firstNameInput.style.borderColor = 'red';
        alert('First name must be atleast 6 characters long!');
    }
    else if (lastName.length < 6 || lastName.length > 12) {
        lastNameInput.style.borderColor = 'red';
        alert('First name must be between 6 and 10 characters long!');
    }
    else if (firstName === '' || lastName === '') {
        alert('Both first name and last name are required!');
    }
    else {
        alert('Form submitted successfully!');
    }
}
