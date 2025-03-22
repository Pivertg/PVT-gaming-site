document.addEventListener("DOMContentLoaded", () => {
    const rosterSelect = document.getElementById("roster-select");
    const rosterDetails = document.getElementById("roster-details");

    if (!rosterSelect || !rosterDetails) {
        console.error("❌ Erreur : Élément HTML introuvable !");
        return;
    }

    // Charger la liste des rosters
    fetch("https://pvt-gaming-api.vercel.app/api/rosters")
        .then(response => response.json())
        .then(rosters => {
            rosters.forEach(roster => {
                const option = document.createElement("option");
                option.value = roster.id;
                option.textContent = roster.nom;
                rosterSelect.appendChild(option);
            });
        })
        .catch(error => console.error("❌ Erreur lors du chargement des rosters :", error));

    // Afficher les joueurs d'un roster sélectionné
    rosterSelect.addEventListener("change", () => {
        const rosterId = rosterSelect.value;

        if (!rosterId) {
            rosterDetails.innerHTML = "<p>Sélectionnez un roster pour voir les détails.</p>";
            return;
        }

        fetch(`https://pvt-gaming-api.vercel.app/api/rosters/${rosterId}`)
            .then(response => response.json())
            .then(data => {
                if (!data.joueurs.length) {
                    rosterDetails.innerHTML = "<p>Aucun joueur dans ce roster.</p>";
                    return;
                }

                let html = `<h2>${data.nom}</h2><ul>`;
                data.joueurs.forEach(joueur => {
                    html += `
                        <li>
                            <strong>${joueur.pseudo}</strong><br>
                            🏆 Trophées : ${joueur.trophies}<br>
                            🎮 ID Brawl Stars : ${joueur.idBrawlStars}<br>
                            🏅 Win 3V3 : ${joueur.win3v3}<br>
                            📊 Classé : ${joueur.classer}<br>
                            🔝 Rang Max : ${joueur.rangMax}
                        </li><br>
                    `;
                });
                html += `</ul>`;
                rosterDetails.innerHTML = html;
            })
            .catch(error => console.error("❌ Erreur lors de l'affichage du roster :", error));
    });
});
