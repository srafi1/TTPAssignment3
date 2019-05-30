function volume() {
    let r = parseInt(document.getElementsByName("radius")[0].value);
    let volume = 4/3.*Math.PI*r*r*r;
    document.getElementById("volume").innerHTML = `Volume of sphere with radius ${r}: ${volume}`;
}
