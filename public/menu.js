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
        menuButton.style.display = "none"; // Cacher le bouton menu
    });

    // Fermer le menu (bouton fermer)
    closeMenu.addEventListener("click", function () {
        sideMenu.classList.remove("show");
        menuOverlay.classList.remove("show");
        document.body.style.overflow = ""; // Réactiver le défilement
        menuButton.style.display = ""; // Réafficher le bouton menu
    });

    // Fermer le menu (clic sur l'overlay)
    menuOverlay.addEventListener("click", function () {
        sideMenu.classList.remove("show");
        menuOverlay.classList.remove("show");
        document.body.style.overflow = ""; // Réactiver le défilement
        menuButton.style.display = ""; // Réafficher le bouton menu
    });

    // Indicateur de fonctionnalité - Attirer l'attention sur le menu
    setTimeout(function () {
        menuButton.classList.add("attention");

        // Arrêter l'animation après 3 secondes
        setTimeout(function () {
            menuButton.classList.remove("attention");
        }, 3000);
    }, 2000);

    // Enregistrer si l'utilisateur a déjà ouvert le menu
    menuButton.addEventListener("click", function () {
        localStorage.setItem("menuOpened", "true");
        menuButton.classList.remove("attention");
    });

    // Vérifier si l'utilisateur a déjà ouvert le menu
    window.addEventListener("load", function () {
        if (!localStorage.getItem("menuOpened")) {
            setTimeout(function () {
                menuButton.classList.add("attention");
            }, 2000);
        }
    });
});
