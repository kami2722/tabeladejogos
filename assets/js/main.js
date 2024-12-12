function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="assets/times/icon-${player1}.png" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="assets/times/icon-${player2}.png" alt="Bandeira da ${player2}">
    </li>
    `
}

function createCard(date, day, games) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.getElementById("app").innerHTML = `
<main id="cards">
${createCard("11/12", "Quarta-feira", createGame("atletico", "16:00", "vasco"))}
${createCard("12/12", "Quinta-feira", createGame("flamengo", "17:00", "bota"))}
${createCard("13/12", "Sexta-feira", createGame("corinthians", "18:30", "santos"))}
${createCard("14/12", "Sábado", createGame("palmeiras", "19:00", "gremio"))}
${createCard("15/12", "Domingo", createGame("cruzeiro", "20:00", "bahia"))}
${createCard("15/12", "Domingo", createGame("sp", "20:30", "inter"))}

</main>
`