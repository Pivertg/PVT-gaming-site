document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterBody = document.getElementById("roster-body");
    const rosterDetails = document.getElementById("roster-details");

    if (!rosterSelect || !rosterBody) {
        console.error("Erreur : Éléments introuvables !");
        return;
    }

    // === DONNÉES MANUELLES ===
    const rosters = {
        "Roster 1": [
            { name: "John Doe", pseudo: "johnny", trophées: 10, win3v3: 15, classement: "Plat 1", rangMax: "Gold" },
            { name: "Jane Smith", pseudo: "janey", trophées: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" }
        ],
        "Roster 2": [
            { name: "Max Power", pseudo: "maxp", trophées: 12, win3v3: 20, classement: "Diamond", rangMax: "Plat" },
            { name: "Sara White", pseudo: "saraW", trophées: 11, win3v3: 18, classement: "Plat 3", rangMax: "Gold" }
        ],
        "Roster 3": [
            { name: "Tom Speed", pseudo: "speedyT", trophées: 14, win3v3: 22, classement: "Champ", rangMax: "Diamond" },
            { name: "Elise Thunder", pseudo: "eliseT", trophées: 13, win3v3: 19, classement: "Diamond", rangMax: "Plat" }
        ]
    };

    // === AFFICHER LE ROSTER SÉLECTIONNÉ ===
    function displayRoster(rosterName) {
        rosterBody.innerHTML = ""; // Effacer les anciennes données

        if (!rosters[rosterName]) {
            rosterDetails.innerHTML = "<p>Aucune donnée pour ce roster.</p>";
            return;
        }

        rosters[rosterName].forEach(player => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.pseudo}</td>
                <td>${player.trophées}</td>
                <td>${player.win3v3}</td>
                <td>${player.classement}</td>
                <td>${player.rangMax}</td>
            `;

            rosterBody.appendChild(row);
        });
    }

    // === ÉCOUTE DU CHANGEMENT DE SÉLECTION ===
    rosterSelect.addEventListener("change", function () {
        displayRoster(this.value);
    });

    // === MESSAGE PAR DÉFAUT ===
    rosterDetails.innerHTML = "<p>Sélectionnez un roster pour voir les détails.</p>";
});
