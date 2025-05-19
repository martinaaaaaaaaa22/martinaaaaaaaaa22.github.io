
const overlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const btnAceptar = document.getElementById("btnAceptar");

function abrirModal() {
    overlay.style.display = "flex";
    modalContent.scrollTop = 0;
    btnAceptar.disabled = true;
}

function cerrarModal() {
    overlay.style.display = "none";
}

// Activar botón solo al final
modalContent.addEventListener("scroll", function () {
    const scrollTop = modalContent.scrollTop;
    const scrollHeight = modalContent.scrollHeight;
    const clientHeight = modalContent.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
        btnAceptar.disabled = false;
    }
});

btnAceptar.addEventListener("click", () => {
    alert("¡Términos aceptados!");
    cerrarModal();
});
