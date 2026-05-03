function showPerformance(team, type, format){

    const data = {
        "Pakistan": {
            "ICC": {
                "ODI": "Best: Champions Trophy 2017 Winner 🏆",
                "T20": "Best: T20 World Cup 2009 Winner 🏆",
                "Test": "Strong Test history with many wins",
                "Champions Trophy": "Winner 2017"
            },
            "ACC": {
                "ODI": "Asia Cup multiple titles",
                "T20": "Asia Cup T20 performances",
                "Test": "Not played",
                "Champions Trophy": "Not played"
            }
        }
    };

    // safety cleanup (VERY IMPORTANT)
    team = (team || "").trim();
    type = (type || "").trim();
    format = (format || "").trim();

    let text =
        data?.[team]?.[type]?.[format]
        || "No data available for selected combination";

    document.getElementById("performanceBox").innerHTML =
        `<div class="card"><h3>${text}</h3></div>`;
}
