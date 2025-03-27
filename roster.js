document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    rosterSelect.addEventListener("change", displayRoster);
});

function displayRoster() {
    let details = document.getElementById("roster-details");

    // Vérification si l'élément existe
    if (!details) {
        console.error("Erreur : L'élément #roster-details est introuvable.");
        return;
    }

    // Données des rosters (à modifier selon tes besoins)
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

    // Récupérer la sélection
    let selectedRoster = document.getElementById("roster-select").value;

    // Vérifier si un roster a été choisi
    if (!selectedRoster || !rosters[selectedRoster]) {
        details.innerHTML = "<p>Sélectionnez un roster pour voir les détails.</p>";
        return;
    }

    // Construire l'affichage des joueurs sous forme de cartes
    let content = `<div class="roster-cards">`;
    rosters[selectedRoster].forEach(player => {
        content += `
            <div class="card">
                <div class="card__content">
                    <h3>${player.nom} (${player.pseudo})</h3>
                    <p>Trophées: ${player.trophees}</p>
                    <p>Win 3v3: ${player.win3v3}</p>
                    <p>Classement: ${player.classement}</p>
                    <p>Rang Max: ${player.rangMax}</p>
                </div>
            </div>
        `;
    });
    content += `</div>`;

    details.innerHTML = content;
}
