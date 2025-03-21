document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterDetails = document.getElementById("roster-details");

    // Liste des rosters avec leurs informations
    const rosters = {
        roster1: [
            { name: "Joueur1", trophies: 15000, expLevel: 120, victories3v3: 500, rankPoints: 200 },
            { name: "Joueur2", trophies: 17000, expLevel: 130, victories3v3: 600, rankPoints: 220 },
            { name: "Joueur3", trophies: 16000, expLevel: 125, victories3v3: 550, rankPoints: 210 }
        ],
        roster2: [
            { name: "Joueur4", trophies: 18000, expLevel: 140, victories3v3: 700, rankPoints: 250 },
            { name: "Joueur5", trophies: 19000, expLevel: 145, victories3v3: 750, rankPoints: 270 },
            { name: "Joueur6", trophies: 17500, expLevel: 135, victories3v3: 650, rankPoints: 230 }
        ],
        roster3: [
            { name: "Joueur7", trophies: 20000, expLevel: 150, victories3v3: 800, rankPoints: 300 },
            { name: "Joueur8", trophies: 21000, expLevel: 155, victories3v3: 850, rankPoints: 320 },
            { name: "Joueur9", trophies: 19500, expLevel: 148, victories3v3: 780, rankPoints: 290 }
        ]
        roster4: [
            { name: "Joueur7", trophies: 20000, expLevel: 150, victories3v3: 800, rankPoints: 300 },
            { name: "Joueur8", trophies: 21000, expLevel: 155, victories3v3: 850, rankPoints: 320 },
            { name: "Joueur9", trophies: 19500, expLevel: 148, victories3v3: 780, rankPoints: 290 }
        ]
        roster5: [
            { name: "Joueur7", trophies: 20000, expLevel: 150, victories3v3: 800, rankPoints: 300 },
            { name: "Joueur8", trophies: 21000, expLevel: 155, victories3v3: 850, rankPoints: 320 },
            { name: "Joueur9", trophies: 19500, expLevel: 148, victories3v3: 780, rankPoints: 290 }
        ]
        roster6: [
            { name: "Joueur7", trophies: 20000, expLevel: 150, victories3v3: 800, rankPoints: 300 },
            { name: "Joueur8", trophies: 21000, expLevel: 155, victories3v3: 850, rankPoints: 320 },
            { name: "Joueur9", trophies: 19500, expLevel: 148, victories3v3: 780, rankPoints: 290 }
        ]
    };

    // Fonction pour afficher les joueurs d'un roster
    function displayRoster(rosterKey) {
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

        selectedRoster.forEach(player => {
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
