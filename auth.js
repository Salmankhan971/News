function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "yes");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Invalid login details";
    }
}

function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "yes") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}