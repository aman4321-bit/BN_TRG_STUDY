function studyUserLogin() {

    document.getElementById("username").value = "study";
    document.getElementById("password").value = "";

    document.getElementById("username").focus();
}

function login(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "study" && password === "1234") {

        window.location.href = "study.html";

    } else {

        alert("Invalid Username or Password");

    }
}
