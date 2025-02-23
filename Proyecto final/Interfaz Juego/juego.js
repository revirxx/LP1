document.addEventListener("DOMContentLoaded", () => {
    const pant_log = document.getElementById("pant-log");
    const boton_ingresar = document.getElementById("boton-ingresar");
    const error_log = document.getElementById("error-log");

    const menu_cont = document.getElementById("menu");
    const menuItems = document.querySelectorAll(".menu-item");

    const submenu = document.getElementById("submenu-coop");
    const coopMenu = document.querySelector(".menu-item.coop");
    const volver = document.querySelector(".submenu-item.volver");
    const submenuItems = document.querySelectorAll(".submenu-item");

    const submenu1 = document.getElementById("submenu-solo");
    const soloMenu = document.querySelector(".menu-item.solo");
    const submenuItems1 = document.querySelectorAll(".submenu-item1");
    const volver1 = document.querySelector(".submenu-item1.volver");

    const submenu2 = document.getElementById("submenu-opc");
    const opcMenu = document.querySelector(".menu-item.opc");
    const submenuItems2 = document.querySelectorAll(".submenu-item2");
    const volver2 = document.querySelector(".submenu-item2.volver"); 
    
    const submenu3 = document.getElementById("submenu-mando");
    const mandoMenu = document.querySelector(".submenu-item2:nth-child(5)");
    const volver3 = document.querySelector("#submenu-mando .volver");
    const submenuItems3 = document.querySelectorAll(".submenu-item3");

    const hoverSound = document.getElementById("sonido_desp");
    const sigSound = document.getElementById("sonido_sigu");
    const atrSound = document.getElementById("sonido_atras");

    const salir = document.getElementById("boton-salir");

    const cambflecha = document.querySelector(".opc-cambiar");
    const valor = cambflecha.querySelector(".valor-opc");
    const cambIzq = cambflecha.querySelector(".camb-izq");
    const cambDerec = cambflecha.querySelector(".camb-dere");


    //Esto es para que el audio esté siempre activo, ya que algunos navegadores bloquean la reproducción automática
    document.addEventListener("click", function () {
        document.getElementById("menu-audio").play();
    }, { once: true });

    // Ocultar el submenú al recargar la página F5
    submenu.style.display = "none";
    submenu1.style.display = "none";
    submenu2.style.display = "none";    
    submenu3.style.display = "none"; 

    // Verificar usuario y contraseña
    boton_ingresar.addEventListener("click", () => {
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (user === "prueba" && pass === "prueba") {
            pant_log.style.display = "none";  // Ocultar login
            menu_cont.style.display = "block";  // Mostrar menú
        } 
        else {  
            error_log.textContent = "Usuario o contraseña incorrectos.";
        }
    });

    // Salir lleva a la pantalla de logueo
    salir.addEventListener("click", () => {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("Cerrando sesión. Adiós")
        pant_log.style.display = "block";  // Mostrar login
        menu_cont.style.display = "none";  // Ocultar menú
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

    // Sonido al pasar sobre las opciones del submenú Jugar Solo
    submenuItems1.forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (!hoverSound.paused) {
                hoverSound.currentTime = 0;
            }
            hoverSound.play();
        });
    });     

    // Sonido al pasar sobre las opciones del submenú Opciones
    submenuItems2.forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (!hoverSound.paused) {
                hoverSound.currentTime = 0;
            }
            hoverSound.play();
        });
    });  

    // Sonido al pasar sobre las opciones del submenú Mando
    submenuItems3.forEach(item => {
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
        sigSound.play();
    });    

    // Volver al menú principal
    volver.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.remove("hidden");
        submenu.style.display = "none"; 
        atrSound.play();
    });    

    // Mostrar solo el submenu al hacer clic en "JUGAR SOLO"
    soloMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.add("hidden"); 
        submenu1.style.display = "block"; 
        sigSound.play();
    });    

    // Volver al menú principal
    volver1.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.remove("hidden");
        submenu1.style.display = "none"; 
        atrSound.play();
    });       

    // Mostrar solo el submenu al hacer clic en "OPCIONES"
    opcMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.add("hidden"); 
        submenu2.style.display = "block"; 
        sigSound.play();
    });    

    mandoMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        document.getElementById("submenu-opc").style.display = "none"; 
        submenu3.style.display = "block"; 
        sigSound.play();
    });
    
    volver3.addEventListener("click", function (event) {
        event.stopPropagation();
        document.getElementById("submenu-opc").style.display = "block"; 
        submenu3.style.display = "none"; 
        atrSound.play();
    });    

    // Volver al menú principal
    volver2.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.remove("hidden");
        submenu2.style.display = "none"; 
        atrSound.play();
    });     
    
    let options = ["Desactivado", "Activado"];
    let currentIndex = 0;

    function updatevalor() {
        valor.textContent = options[currentIndex];
    }

    cambIzq.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + options.length) % options.length;
        updatevalor();
    });

    cambDerec.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % options.length;
        updatevalor();
    }); 
});

