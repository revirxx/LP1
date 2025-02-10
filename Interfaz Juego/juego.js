const menuItems = document.querySelectorAll(".menu-item");
const hoverSound = document.getElementById("sonido_desp");

//Sonido para el desplazamiento entre opciones en el menú
menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0; // Reinicia el sonido
        hoverSound.play();
    });
});

//Esto es para que el audio esté siempre activo, ya que algunos navegadores bloquean la reproducción automática
document.addEventListener("click", function () {
    document.getElementById("menu-audio").play();
}, { once: true });

