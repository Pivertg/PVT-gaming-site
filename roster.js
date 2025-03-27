document.addEventListener("DOMContentLoaded", function () {
    const rosters = {
        "Roster Alpha": [
            { nom: "Thomas", pseudo: "DarkWarrior", trophees: 18000, win3v3: 320, classement: "Or II", rangMax: 25 },
            { nom: "Lucas", pseudo: "ShadowSniper", trophees: 21000, win3v3: 500, classement: "Diamant I", rangMax: 30 },
            { nom: "Emma", pseudo: "QueenBee", trophees: 19500, win3v3: 420, classement: "Platine III", rangMax: 28 }
        ],
        "Roster Bravo": [
            { nom: "Nathan", pseudo: "StormBreaker", trophees: 22000, win3v3: 600, classement: "Maître I", rangMax: 35 },
            { nom: "Léo", pseudo: "FirePhoenix", trophees: 17000, win3v3: 280, classement: "Or III", rangMax: 24 },
            { nom: "Alice", pseudo: "MoonLight", trophees: 20000, win3v3: 450, classement: "Platine II", rangMax: 27 }
        ],
        "Roster Charlie": [
            { nom: "Ethan", pseudo: "ThunderStrike", trophees: 24000, win3v3: 700, classement: "Maître II", rangMax: 38 },
            { nom: "Mia", pseudo: "NightOwl", trophees: 19000, win3v3: 400, classement: "Platine I", rangMax: 26 },
            { nom: "Sacha", pseudo: "IronFist", trophees: 20500, win3v3: 480, classement: "Diamant II", rangMax: 30 },
            { nom: "Zoé", pseudo: "ShadowCat", trophees: 18000, win3v3: 350, classement: "Or II", rangMax: 25 }
        ]
    };

    const rosterSelect = document.getElementById("roster-select");
    const tableBody = document.getElementById("roster-table-body");

    // Remplir la liste déroulante avec les noms des rosters
    Object.keys(rosters).forEach(rosterName => {
        const option = document.createElement("option");
        option.value = rosterName;
        option.textContent = rosterName;
        rosterSelect.appendChild(option);
    });

    // Fonction pour afficher les joueurs du roster sélectionné
    function displayRoster(rosterName) {
        tableBody.innerHTML = ""; // Effacer le tableau

        if (rosters[rosterName]) {
            rosters[rosterName].forEach(player => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${player.nom}</td>
                    <td>${player.pseudo}</td>
                    <td>${player.trophees}</td>
                    <td>${player.win3v3}</td>
                    <td>${player.classement}</td>
                    <td>${player.rangMax}</td>
                `;
                tableBody.appendChild(row);
            });
        }
    }

    // Changer le tableau lorsqu'un roster est sélectionné
    rosterSelect.addEventListener("change", function () {
        const selectedRoster = this.value;
        displayRoster(selectedRoster);
    });
});
