var w = window.innerWidth;
if (w > 600) {
    document.getElementById("desktop").hidden = false;
    document.getElementById("mobile").hidden = true;
} else {
    document.getElementById("desktop").hidden = true;
    document.getElementById("mobile").hidden = false;
}