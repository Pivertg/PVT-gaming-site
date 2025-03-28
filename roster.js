document.addEventListener("DOMContentLoaded", function () {
    let select = document.getElementById("roster-select");

    if (!select) {
        console.error("Erreur : L'élément #roster-select est introuvable.");
        return;
    }

    select.addEventListener("change", displayRoster);

    // Remplir la liste déroulante dynamiquement
    const rosters = {
        "roster1": "Roster 1",
        "roster2": "Roster 2",
        "roster3": "Roster 3"
    };

    select.innerHTML = `<option value="">-- Choisissez un roster --</option>`;

    for (let key in rosters) {
        let option = document.createElement("option");
        option.value = key;
        option.textContent = rosters[key];
        select.appendChild(option);
    }

    // Afficher le message par défaut au chargement
    displayRoster();
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
            { nom: "Jane Smith", pseudo: "janey", trophees: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" },
            { nom: "Jane Smith", pseudo: "janey", trophees: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" }
        ],
        "roster2": [
            { nom: "Alice", pseudo: "alice99", trophees: 20, win3v3: 25, classement: "Diamond", rangMax: "Plat" },
            { nom: "Bob", pseudo: "bobby", trophees: 18, win3v3: 22, classement: "Gold", rangMax: "Silver" },
            { nom: "Jane Smith", pseudo: "janey", trophees: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" }
        ],
        "roster3": [
            { nom: "Charlie", pseudo: "charlieX", trophees: 12, win3v3: 18, classement: "Plat", rangMax: "Gold" },
            { nom: "Jane Smith", pseudo: "janey", trophees: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" },
            { nom: "Jane Smith", pseudo: "janey", trophees: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" }
        ]
    };

    let selectedRoster = document.getElementById("roster-select").value;

    // Si aucune sélection, afficher un message par défaut
    if (!selectedRoster || !rosters[selectedRoster]) {
        details.innerHTML = `<p>Veuillez choisir un roster pour voir les joueurs.</p>`;
        return;
    }

    let content = `<div class="roster-cards">`;
    rosters[selectedRoster].forEach(player => {
        content += `
            <div class="card">
                <span class="glass"></span>
                <div class="content">
                    <h3>${player.nom}</h3>
                    <p><strong>Pseudo :</strong> ${player.pseudo}</p>
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
