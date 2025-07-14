document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Vérification des identifiants (remplace ceci par une requête API plus tard)
    if (role === "admin" && username === "admin" && password === "MonSuperMotDePasse123") {
        localStorage.setItem("adminToken", "adminLoggedIn");
        alert("✅ Connexion admin réussie !");
        window.location.href = "admin-dashboard.html";
    } 
    else if (role === "player" && username !== "" && password !== "") {
        localStorage.setItem("playerToken", "playerLoggedIn");
        alert("✅ Connexion joueur réussie !");
        window.location.href = "player-dashboard.html";
    } 
    else {
        alert("❌ Identifiants incorrects !");
    }
});
