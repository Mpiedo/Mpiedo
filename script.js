const searchBtn = document.getElementById('search-btn')
const pokeTable = document.getElementById('pokemon-table')

const baseUrl = "https://pokeapi.co/api/v2"
let nextUrl = ""



function fetchPokeList() {
    let url = baseUrl + "/pokemon"
    if (nextUrl !== "") {
        url = nextUrl


    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            nextUrl = data.next
            for (let pokemon of data.results) {
                // create a row on first position
                let row = pokeTable.insertRow(0)

                // create cells
                let cell1 = row.insertCell(0)
                let cell2 = row.insertCell(1)

                cell1.innerHTML = pokemon.name
                cell2.innerHTML = pokemon.url

            }

        })
}




searchBtn.addEventListener('click', () => {
    fetchPokeList()
})

while (nextUrl == !null) {
    fetchPokeList()
}