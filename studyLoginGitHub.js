function studyUserLogin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    document.getElementById("username").focus();
}

function login(event) {

    if (event) {
        event.preventDefault();
    }

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "study" && password === "1234") {
        window.location.href = "study.html";
    } else {
        alert("Invalid Username or Password");
    }
}
