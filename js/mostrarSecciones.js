function mostrarSeccion(evt, seccion) {
    var i, secc;
    secc = document.getElementsByClassName("secc");
    for (i = 0; i < secc.length; i++) {
        secc[i].style.display = "none";
    }

    document.getElementById(seccion).style.display = "block";
    evt.currentTarget.className += " active";
}
