document.addEventListener("DOMContentLoaded", function () {
    let select = document.getElementById("roster-select");

    if (!select) {
        console.error("Erreur : L'élément #roster-select est introuvable.");
        return;
    }

    select.addEventListener("change", displayRoster);

    // Remplir la liste déroulante dynamiquement
    const rosters = {
        "roster4": "Roster 4",
        "roster5": "Roster 5",
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
        "roster4": [
            { nom: "PVT|nawer", trophees: 83535, win3v3: 12455, classement: "L2", rangMax: "" },
            { nom: "PVT|SCOLDEN",trophees: 72715, win3v3: 6785, classement: "L2", rangMax: "" },
            { nom: "PVT|RA7", trophees: 95184, win3v3: 9167, classement: "L1", rangMax: "" },
            { nom: "PVT|firecrow", trophees: 78637, win3v3: 15305, classement: "L1", rangMax: "" }
        ],
        "roster5": [
            { nom: "PVT|KAIZO", trophees: 78347, win3v3: 19445, classement: "L2", rangMax: "" },
            { nom: "PVT|TAIZO", trophees: 82711, win3v3: 16491, classement: "L2", rangMax: "" },
            { nom: "PVT|Alone", trophees: 76751, win3v3: 19981, classement: "L3", rangMax: "" }
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
