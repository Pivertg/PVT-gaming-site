document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterDetails = document.getElementById("roster-details");

    if (!rosterDetails || !rosterSelect) {
        console.error("Erreur : L'élément #roster-details ou #roster-select est introuvable !");
        return;
    }

    // === DONNÉES MANUELLES (Tu peux modifier ici) ===
    const rosters = {
        "Roster 1": [
            { name: "John Doe", pseudo: "johnny", trophées: 10, win3v3: 15, classement: "Plat 1", rangMax: "Gold" },
            { name: "Jane Smith", pseudo: "janey", trophées: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" },
            { name: "Jack Black", pseudo: "jackyB", trophées: 9, win3v3: 13, classement: "Silver 1", rangMax: "Bronze" }
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
        if (!rosters[rosterName]) {
            rosterDetails.innerHTML = "<p>Aucune donnée pour ce roster.</p>";
            return;
        }

        let tableHTML = `
            <table class="roster-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Pseudo</th>
                        <th>Trophées</th>
                        <th>Win 3v3</th>
                        <th>Classement</th>
                        <th>Rang Max</th>
                    </tr>
                </thead>
                <tbody>
        `;

        rosters[rosterName].forEach(player => {
            tableHTML += `
                <tr>
                    <td>${player.name}</td>
                    <td>${player.pseudo}</td>
                    <td>${player.trophées}</td>
                    <td>${player.win3v3}</td>
                    <td>${player.classement}</td>
                    <td>${player.rangMax}</td>
                </tr>
            `;
        });

        tableHTML += "</tbody></table>";
        rosterDetails.innerHTML = tableHTML;
    }

    // === ÉCOUTER LE CHANGEMENT DE SÉLECTION ===
    rosterSelect.addEventListener("change", function () {
        displayRoster(this.value);
    });

    // === AFFICHER UN MESSAGE PAR DÉFAUT ===
    rosterDetails.innerHTML = "<p>Sélectionnez un roster pour voir les détails.</p>";
});
