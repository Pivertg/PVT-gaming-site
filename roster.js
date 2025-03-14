document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterDetails = document.getElementById("roster-details");

    // Liste des rosters avec leurs 3 IDs Brawl Stars (remplace par les vrais IDs)
    const rosters = {
        roster1: ["#2U9U8UOOP", "playerID2", "playerID3"], // 3 joueurs dans le roster 1
        roster2: ["playerID4", "playerID5", "playerID6"], // 3 joueurs dans le roster 2
        roster3: ["playerID7", "playerID8", "playerID9"], // 3 joueurs dans le roster 3
        // Ajouter d'autres rosters si nécessaire
    };

    // API Key Brawl Stars (remplacer par ta propre clé)
    const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJjMjMzMjU4LTRkMWQtNDg0MC1hNzI4LTYxMGQxM2U4MDJiZSIsImlhdCI6MTc0MTYxMTI4MSwic3ViIjoiZGV2ZWxvcGVyL2NhMmI0N2FjLTFhZmItY2M4MS1lMzg5LWUzYTZlMDExMmYwNyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTk0LjI1NC42Mi41NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.b52Dp0owyVdCgvLjxn-UVkjC6KrHBVKO4rEPAUGFlpzNLmdU4UbaZ1AbQsq3YpVCC8GE_9uDsMA6fJLbQzq5gA.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM2OGM2ZmRhLTRkMWEtNDJkNi1hZTUyLWNlYmRjMmQxZmZiYSIsImlhdCI6MTc0MTEwODQ5NCwic3ViIjoiZGV2ZWxvcGVyL2NhMmI0N2FjLTFhZmItY2M4MS1lMzg5LWUzYTZlMDExMmYwNyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTMuNTIuMTE1LjE2NiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.H36C-nnNKoJ8ejaIaVDjodu0gD7OQrYgKXqsiY2ObylhO3GhGD1iSEnOfVr4pU4WAx0WJ7i5GnujpCfaXLb6Rg"; // Remplace par ta clé API

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
