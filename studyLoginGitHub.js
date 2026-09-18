function selectRole(role) {
    if (role === "study") {
        document.getElementById("username").style.display = "block";
        document.getElementById("password").style.display = "block";
    }
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "study" && password === "1234") {
        window.location.href = "study.html";
    } else {
        alert("Invalid Username or Password");
    }
}