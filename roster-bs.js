<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js"></script>
  <link rel="stylesheet" href="style-admin.css">
</head>
<body>

  <div id="login-container">
    <h1>Admin Dashboard</h1>
    <input type="password" id="password" placeholder="Entrez le mot de passe" />
    <button onclick="login()">Se connecter</button>
  </div>

  <div id="admin-container" style="display:none;">
    <div class="navbar">
      <h1>Admin Dashboard</h1>
      <button onclick="logout()">Déconnexion</button>
    </div>

    <div class="add-roster-container">
      <button onclick="showCreateRosterForm()">+ Ajouter un Roster</button>
    </div>

    <div id="create-roster-form" style="display:none;">
      <input type="text" id="rosterName" placeholder="Nom du Roster" required />
      <button onclick="createRoster()">Créer le Roster</button>
    </div>

    <h2>Liste des Roster</h2>
    <table id="rosterTable">
      <thead>
        <tr>
          <th>Nom du Roster</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Les rosters seront ajoutés ici -->
      </tbody>
    </table>
  </div>

  <script>
    const API_URL = "https://pvt-gaming-api.gamingpivert.workers.dev/api";
    let currentRosterId = null;
    let loggedIn = false;

    // Fonction de login avec mot de passe
    function login() {
      const password = document.getElementById("password").value;
      if (password === "admin123") {  // Exemple de mot de passe, à changer pour plus de sécurité
        loggedIn = true;
        document.getElementById("login-container").style.display = "none";
        document.getElementById("admin-container").style.display = "block";
        loadRosters();
      } else {
        alert("Mot de passe incorrect.");
      }
    }

    // Fonction de déconnexion
    function logout() {
      loggedIn = false;
      document.getElementById("admin-container").style.display = "none";
      document.getElementById("login-container").style.display = "block";
    }

    // Charger la liste des rosters
    async function loadRosters() {
      const response = await fetch(`${API_URL}/rosters`);
      const rosters = await response.json();
      const rosterTableBody = document.getElementById("rosterTable").getElementsByTagName("tbody")[0];
      rosterTableBody.innerHTML = '';

      rosters.forEach(roster => {
        const row = rosterTableBody.insertRow();
        row.innerHTML = `
          <td>${roster.name}</td>
          <td>
            <button onclick="editRoster('${roster.id}')">Modifier</button>
            <button onclick="deleteRoster('${roster.id}')">Supprimer</button>
            <button onclick="addPlayer('${roster.id}')">Ajouter Joueur</button>
          </td>
        `;
      });
    }

    // Afficher le formulaire de création de roster
    function showCreateRosterForm() {
      document.getElementById("create-roster-form").style.display = "block";
    }

    // Créer un roster avec 3 joueurs par défaut
    async function createRoster() {
      const rosterName = document.getElementById("rosterName").value;

      try {
        const response = await fetch(`${API_URL}/rosters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: rosterName })
        });

        if (!response.ok) {
          throw new Error(`Erreur: ${response.statusText}`);
        }

        const roster = await response.json();
        await addDefaultPlayers(roster.id);
        loadRosters();  // Recharger la liste des rosters
        document.getElementById("create-roster-form").style.display = "none";
      } catch (error) {
        alert("Erreur lors de la création du roster: " + error.message);
      }
    }

    // Ajouter 3 joueurs par défaut à un roster
    async function addDefaultPlayers(rosterId) {
      const defaultPlayers = [
        { pseudo: "Joueur 1", brawlTag: "123456" },
        { pseudo: "Joueur 2", brawlTag: "234567" },
        { pseudo: "Joueur 3", brawlTag: "345678" }
      ];

      for (let player of defaultPlayers) {
        await fetch(`${API_URL}/rosters/${rosterId}/joueurs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(player)
        });
      }
    }

    // Modifier un roster (exemple)
    function editRoster(rosterId) {
      alert("Fonction de modification en cours de développement...");
    }

    // Supprimer un roster
    async function deleteRoster(rosterId) {
      try {
        const response = await fetch(`${API_URL}/rosters/${rosterId}`, {
          method: "DELETE"
        });

        if (!response.ok) {
          throw new Error(`Erreur: ${response.statusText}`);
        }

        alert("Roster supprimé avec succès !");
        loadRosters();
      } catch (error) {
        alert("Erreur lors de la suppression du roster: " + error.message);
      }
    }

    // Ajouter un joueur à un roster
    async function addPlayer(rosterId) {
      const pseudo = prompt("Entrez le pseudo du joueur :");
      const brawlTag = prompt("Entrez le tag Brawl Stars du joueur :");

      try {
        const response = await fetch(`${API_URL}/rosters/${rosterId}/joueurs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ pseudo, brawlTag })
        });

        if (!response.ok) {
          throw new Error(`Erreur: ${response.statusText}`);
        }

        alert("Joueur ajouté avec succès !");
        loadRosters();
      } catch (error) {
        alert("Erreur lors de l'ajout du joueur: " + error.message);
      }
    }
  </script>
</body>
</html>
