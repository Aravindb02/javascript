// console.log("Ist javascript");
// alert("Ist javascript");
// document.getElementById("ullas").innerHTML='ullas';
function submitForm(event) {
    let names = document.getElementById("name").value;
    let emails = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let scale = document.getElementById("scales").checked;
    let horn = document.getElementById("horns").checked;
    let colorhead = document.getElementById("head").value;
    let colorbody = document.getElementById("body").value;
    let gender;
    let male = document.getElementById("male").checked;
    if (male) {
        gender = "male";
    }
    let female = document.getElementById("female").checked;
    if (female) {
        gender = "female";
    }
    let date = document.getElementById("start").value;
    let time = document.getElementById("time").value;
    // var image = document.getElementById("file").value;
    // document.getElementById("sn").innerHTML = `<img src="${image}" width="">`

    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const displayImage = document.getElementById('displayImage');
            displayImage.src = e.target.result;
            displayImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }

    alert(names + " " + emails + " " + password + " " + scale + " " + horn + " " + colorhead + " " + colorbody + " " + gender + " " + date + "" + time);
    
    event.preventDefault();
}