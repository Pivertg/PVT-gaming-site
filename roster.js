document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterDetails = document.getElementById("roster-details");

    // Liste des rosters avec leurs IDs Brawl Stars
    const rosters = {
        roster1: ["playerID1", "playerID2"], // Remplacer par les vrais IDs
        roster2: ["playerID3", "playerID4"],
        roster3: ["playerID5", "playerID6"],
        roster4: ["playerID7", "playerID8"],
        roster5: ["playerID9", "playerID10"],
        // Ajouter plus de rosters si nécessaire
    };

    // API Key Brawl Stars (remplacer par ta propre clé)
    const API_KEY = "VOTRE_CLE_API"; // Remplace par ta clé API

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

    // Fonction pour afficher les joueurs d'un roster
    async function displayRoster(rosterKey) {
        const selectedRoster = rosters[rosterKey];

        if (!selectedRoster || selectedRoster.length === 0) {
            rosterDetails.innerHTML = "<p>Aucun joueur inscrit dans ce roster.</p>";
            return;
        }

        let tableHTML = `
            <h2>${rosterKey.replace("roster", "Roster ")}</h2>
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

        // Récupérer les informations pour chaque joueur du roster
        for (const playerId of selectedRoster) {
            const playerData = await fetchPlayerData(playerId);

            if (playerData) {
                const { name, trophies, expLevel, victories3v3, rankPoints } = playerData;
                tableHTML += `
                    <tr>
                        <td>${name}</td>
                        <td>${trophies}</td>
                        <td>${expLevel}</td>
                        <td>${victories3v3}</td>
                        <td>${rankPoints}</td>
                    </tr>`;
            }
        }

        tableHTML += `</tbody></table>`;
        rosterDetails.innerHTML = tableHTML;
    }

    // Écouter le changement de sélection dans le menu déroulant
    rosterSelect.addEventListener("change", function () {
        const selectedRoster = this.value;
        if (selectedRoster) {
            displayRoster(selectedRoster);
        } else {
            rosterDetails.innerHTML = "<p>Sélectionnez un roster pour voir les détails.</p>";
        }
    });
});
