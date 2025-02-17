document.addEventListener("DOMContentLoaded", () => {
    const pant_log = document.getElementById("pant-log");
    const menu_cont = document.getElementById("menu");
    const boton_ingresar = document.getElementById("boton-ingresar");
    const error_log = document.getElementById("error-log");
    const menuItems = document.querySelectorAll(".menu-item");
    const hoverSound = document.getElementById("sonido_desp");
    const submenu = document.getElementById("submenu-coop");
    const coopMenu = document.querySelector(".menu-item.coop");
    const volver = document.querySelector(".submenu-item.volver");
    const submenuItems = document.querySelectorAll(".submenu-item");

    // Ocultar el submenú al recargar la página F5
    submenu.style.display = "none";

    // Verificar usuario y contraseña
    boton_ingresar.addEventListener("click", () => {
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (user === "prueba" && pass === "prueba") {
            pant_log.style.display = "none";  // Ocultar login
            menu_cont.style.display = "block";  // Mostrar menú
        } 
        else if (user !== "prueba") {  
            error_log.textContent = "Usuario no existe";
        } 
        else {  
            error_log.textContent = "Usuario o contraseña incorrectos.";
        }
    });

    // Sonido al pasar sobre las opciones del menú
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (!hoverSound.paused) {
                hoverSound.currentTime = 0;
            }
            hoverSound.play();
        });
    }); 

    // Sonido al pasar sobre las opciones del submenú Jugar Coop
    submenuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (!hoverSound.paused) {
                hoverSound.currentTime = 0;
            }
            hoverSound.play();
        });
    }); 

    // Mostrar solo el submenu al hacer clic en "JUGAR PARTIDA COOP"
    coopMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.add("hidden"); 
        submenu.style.display = "block"; 
    });    

    // Volver al menú principal
    volver.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.remove("hidden");
        submenu.style.display = "none"; 
    });    
});

