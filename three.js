// Task 3 and 4
function check() {
    let passw = document.getElementById("passw");
    if (passw.value == "12345678") {
        document.getElementById("msg").innerHTML = "You shall pass";
    } else {
        alert("Incorrect password");
    }
}
