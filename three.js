function check() {
    let passw = document.getElementsByName("passw");
    if (passw[0].value == "12345678") {
        document.getElementById("msg").innerHTML = "You shall pass";
    } else {
        alert("Incorrect password");
    }
    return false;
}
