document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterDetails = document.getElementById("roster-details");

    // Données manuelles pour les joueurs dans les rosters
    const savedRosters = {
        roster1: [
            {
                pseudo: "Player1",
                id: "player1ID", // L'ID Brawl Stars ici
                image: "https://example.com/avatar1.jpg", // Lien vers l'image du joueur
                trophies: 1200, // Trophées du joueur
                wins3v3: 45, // Victoires en 3v3
                rankPoints: 1200 // Points de classement
            },
            {
                pseudo: "Player2",
                id: "player2ID",
                image: "https://example.com/avatar2.jpg",
                trophies: 1500,
                wins3v3: 30,
                rankPoints: 1000
            }
        ],
        roster2: [
            {
                pseudo: "Player3",
                id: "player3ID",
                image: "https://example.com/avatar3.jpg",
                trophies: 1000,
                wins3v3: 20,
                rankPoints: 800
            }
        ]
    };

    // Sauvegarde manuelle dans le localStorage
    localStorage.setItem("rosters", JSON.stringify(savedRosters));

    // Fonction pour afficher les joueurs du roster sélectionné
    function displayRoster(rosterKey) {
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
                        <th>Points de Classement</th>
                    </tr>
                </thead>
                <tbody>`;

        // Remplir le tableau avec les informations des joueurs
        savedRosters[rosterKey].forEach(player => {
            tableHTML += `
                <tr>
                    <td><img src="${player.image}" alt="Avatar" class="player-img"></td>
                    <td>${player.pseudo}</td>
                    <td>${player.id}</td>
                    <td>${player.trophies}</td>
                    <td>${player.wins3v3}</td>
                    <td>${player.rankPoints}</td>
                </tr>`;
        });

        tableHTML += `</tbody></table>`;
        rosterDetails.innerHTML = tableHTML;
    }

    // Écouteur d'événements pour la sélection du roster
    rosterSelect.addEventListener("change", function () {
        displayRoster(this.value);
    });

    // Remplir le menu avec les rosters disponibles
    Object.keys(savedRosters).forEach(rosterKey => {
        const option = document.createElement("option");
        option.value = rosterKey;
        option.textContent = rosterKey.replace("roster", "Roster ");
        rosterSelect.appendChild(option);
    });
});
