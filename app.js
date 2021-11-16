const token = 'rgRV6Nc6QfLby5c8km6rEstnaX9ZlQtytlPxJ2Y235paBEHApW8gbUOhtztO'
const playerName = document.querySelector('.inputValue')
const button = document.querySelector('.button')
//BIO
const name = document.querySelector('.name')
const image = document.querySelector('.player-image')
const team = document.querySelector('.team')
const country = document.querySelector('.country')
const birthdate = document.querySelector('.birthdate')
const height = document.querySelector('.height')
const position = document.querySelector('.position')
//STATS
const appearances = document.querySelector('.appearances')
const minutes = document.querySelector('.minutes')
const goals = document.querySelector('.goals')
const assists = document.querySelector('.assists')
const cleanSheets = document.querySelector('.clean-sheets')
const yellowCards = document.querySelector('.yellow-cards')
const redCards = document.querySelector('.red-cards')

button.addEventListener('click', function () {
    fetch(`https://soccer.sportmonks.com/api/v2.0/players/search/${playerName.value}?api_token=${token}&include=stats,position,team`)
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            //BIO
            const bio = data.data[0]
            const nameValue = bio.fullname
            const imageValue = bio.image_path
            const teamValue = bio.team.data.name
            const countryValue = bio.nationality
            const birthdateValue = bio.birthdate
            const heightValue = bio.height
            const positionValue = bio.position.data.name
            //STATS
            const dataLength = bio.stats.data.length;
            const stats = bio.stats.data[dataLength - 1];


            const appearancesValue = stats.appearences
            const minutesValue = stats.minutes
            const goalsValue = stats.goals
            const assistsValue = stats.assists
            const cleanSheetsValue = stats.cleansheets
            const yellowCardsValue = stats.yellowcards
            const redCardsValue = stats.redcards

            console.log(data)
            //BIO
            name.innerHTML = nameValue
            image.src = imageValue
            team.innerHTML = `Club: ${teamValue}`
            country.innerHTML = `Country: ${countryValue}`
            birthdate.innerHTML = `Date of birth: ${birthdateValue}`
            height.innerHTML = `Height: ${heightValue}`
            position.innerHTML = `Position: ${positionValue}`
            //STATS
            appearances.innerHTML = `Appearances: ${appearancesValue}`
            minutes.innerHTML = `Minutes: ${minutesValue}`
            goals.innerHTML = `Goals: ${goalsValue}`
            assists.innerHTML = `Assists: ${assistsValue}`
            cleanSheets.innerHTML = `Clean sheets: ${cleanSheetsValue}`
            yellowCards.innerHTML = `Yellow cards: ${yellowCardsValue}`
            redCards.innerHTML = `Red cards: ${redCardsValue}`
        })


        .catch(err => alert('Player not found! Try searching with their full name.'))

})