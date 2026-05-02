let playersData = [];

// LOAD DATA FROM JSON
fetch("players.json")
.then(res => res.json())
.then(data => {
    playersData = data;
    renderPlayers(playersData);
});

// SHOW PLAYERS ON INDEX PAGE
function renderPlayers(list) {
    let container = document.getElementById("playersList");

    if (!container) return;

    container.innerHTML = "";

    list.forEach(player => {
        container.innerHTML += `
            <div class="card" onclick="openPlayer('${player.id}')">
                <h3>${player.name}</h3>
                <p>Country: ${player.country}</p>
                <p>Type: ${player.type}</p>
            </div>
        `;
    });
}

// SEARCH FUNCTION
function searchSite() {
    let input = document.getElementById("searchBox").value.toLowerCase();

    let filtered = playersData.filter(p =>
        p.name.toLowerCase().includes(input)
    );

    renderPlayers(filtered);
}

// OPEN PLAYER PAGE
function openPlayer(id) {
    window.location.href = "player.html?id=" + id;
}

// TOP BUTTON
function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
