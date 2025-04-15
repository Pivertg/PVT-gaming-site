async function displayRoster() {
    let details = document.getElementById("roster-details");

    if (!details) {
        console.error("Erreur : L'élément #roster-details est introuvable.");
        return;
    }

    let selectedRoster = document.getElementById("roster-select").value;

    if (!selectedRoster) {
        details.innerHTML = `<p>Veuillez choisir un roster pour voir les joueurs.</p>`;
        return;
    }

    try {
        const response = await fetch("https://pvt-gaming-api.gamingpivert.workers.dev/api/joueurs");
        if (!response.ok) throw new Error("Erreur lors de la récupération des données API");

        const allPlayers = await response.json();

        // Filtrer les joueurs du roster sélectionné
        const players = allPlayers.filter(p => p.roster === selectedRoster);

        if (players.length === 0) {
            details.innerHTML = `<p>Aucun joueur trouvé pour ce roster.</p>`;
            return;
        }

        let content = `<div class="roster-cards">`;
        players.forEach(player => {
            content += `
                <div class="card">
                    <span class="glass"></span>
                    <div class="content">
                        <h3>${player.nom || player.pseudo}</h3>
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
    } catch (error) {
        console.error(error);
        details.innerHTML = `<p>Erreur lors du chargement des joueurs.</p>`;
    }
}
