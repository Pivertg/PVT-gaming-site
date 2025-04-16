document.addEventListener("DOMContentLoaded", function () {
    // Éléments du menu
    const menuButton = document.querySelector(".menu-button");
    const sideMenu = document.querySelector(".side-menu");
    const closeMenu = document.querySelector(".close-menu");
    const menuOverlay = document.querySelector(".menu-overlay");
    
    // Vérifier si les éléments existent
    if (!menuButton || !sideMenu || !closeMenu || !menuOverlay) {
        console.error("Erreur : Éléments du menu latéral non trouvés.");
        return;
    }
    
    // Ouvrir le menu
    menuButton.addEventListener("click", function () {
        sideMenu.classList.add("show");
        menuOverlay.classList.add("show");
        document.body.style.overflow = "hidden"; // Empêcher le défilement du body
    });
    
    // Fermer le menu (bouton fermer)
    closeMenu.addEventListener("click", function () {
        sideMenu.classList.remove("show");
        menuOverlay.classList.remove("show");
        document.body.style.overflow = ""; // Réactiver le défilement
    });
    
    // Fermer le menu (clic sur l'overlay)
    menuOverlay.addEventListener("click", function () {
        sideMenu.classList.remove("show");
        menuOverlay.classList.remove("show");
        document.body.style.overflow = ""; // Réactiver le défilement
    });
    
    // Indicateur de fonctionnalité - Attirer l'attention sur le menu
    // Ajouter une classe d'animation après un court délai pour les nouveaux utilisateurs
    setTimeout(function() {
        menuButton.classList.add("attention");
        
        // Arrêter l'animation après 3 secondes
        setTimeout(function() {
            menuButton.classList.remove("attention");
        }, 3000);
    }, 2000);
    
    // Enregistrer si l'utilisateur a déjà ouvert le menu
    menuButton.addEventListener("click", function() {
        localStorage.setItem("menuOpened", "true");
        menuButton.classList.remove("attention"); // Arrêter l'animation une fois cliqué
    });
    
    // Vérifier si l'utilisateur a déjà ouvert le menu
    window.addEventListener("load", function() {
        if (!localStorage.getItem("menuOpened")) {
            // Montrer l'animation uniquement pour les nouveaux utilisateurs
            setTimeout(function() {
                menuButton.classList.add("attention");
            }, 2000);
        }
    });
});
