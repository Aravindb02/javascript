function nameFunction(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    document.getElementById('textarea').innerHTML = firstName+" "+lastName;

    if (firstName.length < 6) {
        firstNameInput.style.borderColor = 'red';
        alert('First name must be atleast 6 characters long');
    }
    else if (lastName.length < 3 || lastName.length > 12) {
        lastNameInput.style.borderColor = 'yellow';
        alert('Last name must be between 6 and 12 characters long');
    }
    else if (firstName === '' || lastName === '') {
        alert('Both first name and last name are required');
    }
    else {
        alert('successful');
    }

}
