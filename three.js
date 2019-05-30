function check() {
    let passw = document.getElementsByName("passw");
    if (passw[0].value == "12345678") {
        document.getElementById("msg").innerHTML = "You shall pass";
    }
    return false;
}
