function studyUserLogin() {

    // Clear login fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Make STUDY USER button active
    document.getElementById("userRole").classList.remove("active");
    document.getElementById("adminRole").classList.remove("active");
    document.getElementById("studyRole").classList.add("active");

    // Put cursor in username
    document.getElementById("username").focus();
}


function login(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "study" && password === "1717") {

        window.location.href = "study.html";

    } else {

        alert("Invalid Username or Password");

    }
}
