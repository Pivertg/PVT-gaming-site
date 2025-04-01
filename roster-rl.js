document.addEventListener("DOMContentLoaded", function () {
    let select = document.getElementById("roster-select");

    if (!select) {
        console.error("Erreur : L'élément #roster-select est introuvable.");
        return;
    }

    select.addEventListener("change", displayRoster);

    // Remplir la liste déroulante dynamiquement
    const rosters = {
        "roster2": "Roster 2",
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
            { nom: "PVT|nawer", classement: "L2"},
            { nom: "PVT|nawer", classement: "L2" },
            { nom: "PVT|nawer", classement: "L2" },
        ],
        "roster2": [
            { nom: "PVT|SKIBIDI ZIZOU", classement: "GC2", },
            { nom: "PVT|Crazy coca", classement: "GC2", },
            { nom: "PVT|Zenotoa", classement: "GC2", }
        ],
        "roster3": [
            { nom: "PVT|nawer", classement: "L2", },
            { nom: "PVT|nawer", classement: "L2", },
            { nom: "PVT|nawer", classement: "L2", }
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
                    <p><strong>Classement :</strong> ${player.classement}</p>
                </div>
            </div>
        `;
    });
    content += `</div>`;

    details.innerHTML = content;
}
