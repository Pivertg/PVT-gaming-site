// Définir les données des rosters manuellement
const rosters = {
    "roster1": [
        { name: "John Doe", pseudo: "johnny", trophies: 10, win3v3: 15, ranking: "Plat 1", maxRank: "Gold" },
        { name: "Jane Smith", pseudo: "janey", trophies: 8, win3v3: 12, ranking: "Gold 2", maxRank: "Silver" }
    ],
    "roster2": [
        { name: "Mark Green", pseudo: "marky", trophies: 5, win3v3: 8, ranking: "Gold 3", maxRank: "Gold" },
        { name: "Lisa White", pseudo: "lisaw", trophies: 6, win3v3: 10, ranking: "Silver 1", maxRank: "Bronze" }
    ],
    "roster3": [
        { name: "Paul Black", pseudo: "pauly", trophies: 15, win3v3: 25, ranking: "Diamond 2", maxRank: "Platinum" },
        { name: "Sophie Brown", pseudo: "sophie", trophies: 12, win3v3: 20, ranking: "Platinum 3", maxRank: "Gold" }
    ]
};

// Fonction pour afficher les détails du roster sélectionné
function displayRoster() {
    const selectedRoster = document.getElementById('roster-select').value;
    const rosterDetails = document.getElementById('roster-details');
    
    // Si aucun roster n'est sélectionné, on affiche un message d'information
    if (!selectedRoster) {
        rosterDetails.innerHTML = '<p>Sélectionnez un roster pour voir les détails.</p>';
        return;
    }

    // Vérifie si le roster sélectionné existe dans l'objet "rosters"
    const players = rosters[selectedRoster];
    
    if (!players) {
        rosterDetails.innerHTML = `<p>Le roster ${selectedRoster} n'existe pas.</p>`;
        return;
    }

    // Si le roster est valide, on crée un tableau pour afficher les informations des joueurs
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

    // Remplir le tableau avec les données des joueurs
    players.forEach(player => {
        tableHTML += `
            <tr>
                <td>${player.name}</td>
                <td>${player.pseudo}</td>
                <td>${player.trophies}</td>
                <td>${player.win3v3}</td>
                <td>${player.ranking}</td>
                <td>${player.maxRank}</td>
            </tr>
        `;
    });

    tableHTML += `</tbody></table>`;

    // Afficher le tableau dans la zone des détails
    rosterDetails.innerHTML = tableHTML;
}

// Ajouter un événement pour déclencher la fonction lorsque le roster est sélectionné
document.getElementById('roster-select').addEventListener('change', displayRoster);
