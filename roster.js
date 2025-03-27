document.addEventListener("DOMContentLoaded", function () {
    const rosterSelect = document.getElementById("roster-select");
    const rosterCardsContainer = document.getElementById("roster-cards-container");

    // Liste des joueurs pour chaque roster
    const rosters = {
        "roster1": [
            { name: "John Doe", pseudo: "johnny", trophées: 10, win3v3: 15, classement: "Plat 1", rangMax: "Gold" },
            { name: "Jane Smith", pseudo: "janey", trophées: 8, win3v3: 12, classement: "Gold 2", rangMax: "Silver" }
        ],
        "roster2": [
            { name: "Alex Wayne", pseudo: "alexw", trophées: 12, win3v3: 18, classement: "Plat 3", rangMax: "Plat 2" },
            { name: "Emma Frost", pseudo: "frosty", trophées: 9, win3v3: 10, classement: "Gold 1", rangMax: "Gold" }
        ],
        "roster3": [
            { name: "Chris Red", pseudo: "chrisr", trophées: 11, win3v3: 20, classement: "Diamond", rangMax: "Plat 3" },
            { name: "Sarah Connor", pseudo: "termina", trophées: 14, win3v3: 22, classement: "Diamond 2", rangMax: "Diamond" }
        ]
    };

    // Fonction pour afficher les joueurs sous forme de cartes
    function displayRoster() {
        const selectedRoster = rosterSelect.value;
        rosterCardsContainer.innerHTML = ""; // Nettoyage de l'affichage précédent

        if (rosters[selectedRoster]) {
            rosters[selectedRoster].forEach(player => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <div class="card__content">
                        <h3>${player.name}</h3>
                        <p>Pseudo: ${player.pseudo}</p>
                        <p>Trophées: ${player.trophées}</p>
                        <p>Win 3v3: ${player.win3v3}</p>
                        <p>Classement: ${player.classement}</p>
                        <p>Rang Max: ${player.rangMax}</p>
                    </div>
                `;

                rosterCardsContainer.appendChild(card);
            });
        }
    }

    // Écouteur pour détecter le changement de sélection
    rosterSelect.addEventListener("change", displayRoster);
});
