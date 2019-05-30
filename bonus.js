// Bonus task
function volume() {
    let r = parseInt(document.getElementById("radius").value);
    let volume = 4/3.*Math.PI*r*r*r;
    document.getElementById("volume").innerHTML = `Volume of sphere with radius ${r}: ${volume}`;
}
