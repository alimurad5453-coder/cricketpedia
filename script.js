let playersData = [];
let umpiresData = [];
let stadiumsData = [];
let historyData = [];

/* =======================
   LOAD ALL JSON FILES
======================= */

// PLAYERS
fetch("players.json")
.then(res => res.json())
.then(data => {
    playersData = data;
    renderPlayers(playersData);
});

// UMPIRES
fetch("umpires.json")
.then(res => res.json())
.then(data => {
    umpiresData = data;
    renderUmpires(umpiresData);
});

// STADIUMS
fetch("stadiums.json")
.then(res => res.json())
.then(data => {
    stadiumsData = data;
    renderStadiums(stadiumsData);
});

// HISTORY
fetch("history.json")
.then(res => res.json())
.then(data => {
    historyData = data;
    renderHistory(historyData);
});

/* =======================
   RENDER FUNCTIONS
======================= */

// PLAYERS
function renderPlayers(list) {
    let container = document.getElementById("playersList");
    if (!container) return;

    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="card" onclick="openPlayer('${p.id}')">
                <h3>${p.name}</h3>
                <p>Country: ${p.country}</p>
                <p>Type: ${p.type}</p>
            </div>
        `;
    });
}

// UMPIRES
function renderUmpires(list) {
    let container = document.getElementById("umpiresList");
    if (!container) return;

    container.innerHTML = "";

    list.forEach(u => {
        container.innerHTML += `
            <div class="card">
                <h3>${u.name}</h3>
                <p>Matches: ${u.matches}</p>
            </div>
        `;
    });
}

// STADIUMS
function renderStadiums(list) {
    let container = document.getElementById("stadiumsList");
    if (!container) return;

    container.innerHTML = "";

    list.forEach(s => {
        container.innerHTML += `
            <div class="card">
                <h3>${s.name}</h3>
                <p>Country: ${s.country}</p>
                <p>Capacity: ${s.capacity}</p>
            </div>
        `;
    });
}

// HISTORY
function renderHistory(list) {
    let container = document.getElementById("historyList");
    if (!container) return;

    container.innerHTML = "";

    list.forEach(h => {
        container.innerHTML += `
            <div class="card">
                <h3>${h.title}</h3>
                <p>${h.description}</p>
            </div>
        `;
    });
}

/* =======================
   SEARCH (PLAYERS ONLY)
======================= */

function searchSite() {
    let input = document.getElementById("searchBox").value.toLowerCase();

    let filtered = playersData.filter(p =>
        p.name.toLowerCase().includes(input)
    );

    renderPlayers(filtered);
}

/* =======================
   PLAYER PAGE OPEN
======================= */

function openPlayer(id) {
    window.location.href = "player.html?id=" + id;
}

/* =======================
   TOP BUTTON
======================= */

function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
/* =======================
   TEAMS / EVENTS SYSTEM
======================= */

let teamsData = {};

// LOAD TEAMS DATA
fetch("data.json")
.then(res => res.json())
.then(data => {
    teamsData = data;
    renderTeamsList();
});

// TEAMS LIST PAGE
function renderTeamsList() {
    let container = document.getElementById("teamsList");
    if (!container) return;

    container.innerHTML = "";

    Object.keys(teamsData).forEach(team => {
        container.innerHTML += `
            <div class="card" onclick="openTeam('${team}')">
                <h3>${team}</h3>
            </div>
        `;
    });
}

// OPEN TEAM PAGE
function openTeam(team) {
    window.location.href = "team.html?team=" + team;
}

// SHOW EVENTS (ICC / ACC)
function renderEvents(team) {
    let container = document.getElementById("eventsList");
    if (!container) return;

    container.innerHTML = "";

    Object.keys(teamsData[team]).forEach(eventType => {
        container.innerHTML += `
            <div class="card" onclick="renderFormats('${team}','${eventType}')">
                <h3>${eventType} Events</h3>
            </div>
        `;
    });
}

// SHOW FORMATS (ODI / T20 / Test / etc)
function renderFormats(team, eventType) {
    let container = document.getElementById("formatsList");
    if (!container) return;

    container.innerHTML = "";

    Object.keys(teamsData[team][eventType]).forEach(format => {
        container.innerHTML += `
            <div class="card" onclick="showPerformance('${team}','${eventType}','${format}')">
                <h3>${format}</h3>
            </div>
        `;
    });
}

// SHOW PERFORMANCE DETAILS
function showPerformance(team, eventType, format) {
    let container = document.getElementById("performance");
    if (!container) return;

    let data = teamsData[team][eventType][format];

    container.innerHTML = `
        <div class="card">
            <h2>${team} - ${eventType} - ${format}</h2>
            <p>Matches: ${data.matches}</p>
            <p>Wins: ${data.wins}</p>
            <p>Best Player: ${data.bestPlayer}</p>
        </div>
    `;
}
