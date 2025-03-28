document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    rosterSelect.addEventListener("change", displayRoster);

    // Affiche le tableau par défaut au chargement de la page
    displayDefaultTable();
});

function displayRoster() {
    let details = document.getElementById("roster-details");

    if (!details) {
        console.error("Erreur : L'élément #roster-details est introuvable.");
        return;
    }

    const rosters = {
        "roster1": [
            { nom: "John Doe", pseudo: "johnny", trophees: 10, win3v3: 15, classement: "Plat 1", rangMax: "Gold" },
            { nom: "Jane Smith", pseudo: "janey", trophees: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" }
        ],
        "roster2": [
            { nom: "Alice", pseudo: "alice99", trophees: 20, win3v3: 25, classement: "Diamond", rangMax: "Plat" },
            { nom: "Bob", pseudo: "bobby", trophees: 18, win3v3: 22, classement: "Gold", rangMax: "Silver" }
        ],
        "roster3": [
            { nom: "Charlie", pseudo: "charlieX", trophees: 12, win3v3: 18, classement: "Plat", rangMax: "Gold" }
        ]
    };

    let selectedRoster = document.getElementById("roster-select").value;

    if (!selectedRoster || !rosters[selectedRoster]) {
        displayDefaultTable(); // Affiche le tableau de base si aucun roster n'est choisi
        return;
    }

    let content = `<div class="roster-cards">`;
    rosters[selectedRoster].forEach(player => {
        content += `
            <div class="card">
                <div class="card__content">
                    <h3>${player.nom} (${player.pseudo})</h3>
                    <p><strong>Trophées :</strong> ${player.trophees}</p>
                    <p><strong>Win 3v3 :</strong> ${player.win3v3}</p>
                    <p><strong>Classement :</strong> ${player.classement}</p>
                    <p><strong>Rang Max :</strong> ${player.rangMax}</p>
                </div>
            </div>
        `;
    });
    content += `</div>`;

    details.innerHTML = content;
}

// Fonction pour afficher un tableau par défaut
function displayDefaultTable() {
    let details = document.getElementById("roster-details");

    details.innerHTML = `
        <p>Sélectionnez un roster pour voir les détails.</p>
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
                <tr>
                    <td>John Doe</td>
                    <td>johnny</td>
                    <td>10</td>
                    <td>15</td>
                    <td>Plat 1</td>
                    <td>Gold</td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>janey</td>
                    <td>8</td>
                    <td>12</td>
                    <td>Gold 2</td>
                    <td>Silver</td>
                </tr>
            </tbody>
        </table>
    `;
}
