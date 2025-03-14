// Fonction pour récupérer les informations du joueur via l'API Brawl Stars
async function getPlayerInfo(playerTag) {
    const API_KEY = "TON_CLE_API_ICI";  // Remplace par ta clé API
    const url = `https://api.brawlstars.com/v1/players/%23${playerTag.replace("#", "")}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Accept": "application/json"
        }
    });

    if (!response.ok) {
        console.error("Erreur API:", response.status);
        return null;
    }

    return await response.json();
}

document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterDetails = document.getElementById("roster-details");

    // Charger les joueurs inscrits depuis le stockage local
    const savedRosters = JSON.parse(localStorage.getItem("rosters")) || {};

    async function displayRoster(rosterKey) {
        if (!savedRosters[rosterKey] || savedRosters[rosterKey].length === 0) {
            rosterDetails.innerHTML = "<p>Aucun joueur inscrit dans ce roster.</p>";
            return;
        }

        let tableHTML = `
            <h2>${rosterKey.replace("roster", "Roster ")}</h2>
            <table class="roster-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Pseudo</th>
                        <th>ID Brawl Stars</th>
                        <th>Trophées</th>
                        <th>Victoires 3v3</th>
                        <th>Points de Classement</th> <!-- Nouvelle colonne -->
                    </tr>
                </thead>
                <tbody>`;

        // Boucle pour chaque joueur et récupérer les infos via l'API
        for (const player of savedRosters[rosterKey]) {
            const playerInfo = await getPlayerInfo(player.id);  // Récupérer les infos via l'API

            tableHTML += `
                <tr>
                    <td><img src="${player.image}" alt="Avatar" class="player-img"></td>
                    <td>${player.pseudo}</td>
                    <td>${player.id}</td>
                    <td>${playerInfo ? playerInfo.trophies : "N/A"}</td>
                    <td>${playerInfo ? playerInfo["3vs3Victories"] : "N/A"}</td>
                    <td>${playerInfo ? playerInfo.rankPoints : "N/A"}</td> <!-- Points de classement -->
                </tr>`;
        }

        tableHTML += `</tbody></table>`;
        rosterDetails.innerHTML = tableHTML;
    }

    rosterSelect.addEventListener("change", function () {
        displayRoster(this.value);
    });
});
