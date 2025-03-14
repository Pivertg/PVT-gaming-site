document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterDetails = document.getElementById("roster-details");

    // Liste des IDs Brawl Stars à récupérer (manuellement remplis dans le code)
    const playerIDs = ["player1ID", "player2ID", "player3ID"];  // Remplir avec les IDs des joueurs que tu veux

    // API Key Brawl Stars (tu dois obtenir ta propre clé API)
    const API_KEY = "VOTRE_CLE_API"; // Remplace par ta clé API Brawl Stars

    // Stockage des informations des joueurs
    const playerDataStorage = [];

    // Fonction pour récupérer les informations du joueur depuis l'API
    async function fetchPlayerData(playerId) {
        try {
            const response = await fetch(`https://api.brawlstars.com/v1/players/%23${playerId}`, {
                headers: {
                    "Authorization": `Bearer ${API_KEY}`
                }
            });

            if (!response.ok) {
                throw new Error('Impossible de récupérer les données du joueur');
            }

            const playerData = await response.json();
            return playerData;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Fonction pour remplir le tableau avec les informations des joueurs
    function displayPlayers() {
        if (playerDataStorage.length === 0) {
            rosterDetails.innerHTML = "<p>Aucune information disponible.</p>";
            return;
        }

        let tableHTML = `
            <table class="roster-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Trophées</th>
                        <th>Expérience</th>
                        <th>Victoires 3v3</th>
                        <th>Points de Classement</th>
                    </tr>
                </thead>
                <tbody>`;

        playerDataStorage.forEach(player => {
            tableHTML += `
                <tr>
                    <td>${player.name}</td>
                    <td>${player.trophies}</td>
                    <td>${player.expLevel}</td>
                    <td>${player.victories3v3}</td>
                    <td>${player.rankPoints}</td>
                </tr>`;
        });

        tableHTML += `</tbody></table>`;
        rosterDetails.innerHTML = tableHTML;
    }

    // Appel API pour récupérer les données des joueurs
    async function loadPlayerData() {
        for (const playerId of playerIDs) {
            const playerData = await fetchPlayerData(playerId);

            if (playerData) {
                const { name, trophies, expLevel, victories3v3, rankPoints } = playerData;
                playerDataStorage.push({
                    name,
                    trophies,
                    expLevel,
                    victories3v3,
                    rankPoints
                });
            }
        }

        // Une fois toutes les données récupérées, affiche les joueurs
        displayPlayers();
    }

    // Lancer la récupération des données dès le chargement du site
    loadPlayerData();
});
