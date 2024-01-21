const buuten = document.querySelector('#click');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const table = document.querySelector('table');


buuten.addEventListener('click', () => {
    clickCreate()
})
next.addEventListener('click', () => {
    clickCreate()
    table.innerHTML= '';
})
previous.addEventListener('click', () => {
    clickCreate();
    table.innerHTML = '';
});

 


let counter = 1;
function clickCreate() {
    counter++;
    fetch(`https://swapi.dev/api/planets/?page=${counter}`)
        .then(function (next) {
            return next.json()
        })
        .then(function (myJson) {
            table.innerHTML = '';
            table.innerHTML += `
        <thead>
        <tr>
        <th>Planet Name</th>
        <th>Population</th>
        <th>Climate</th>
        <th>Gravity</th>
        </tr>
        </thead>
        `

            for (let planets of myJson.results) {
                table.innerHTML +=
                    `
            <tr>
            <td>${planets.name}</td>
            <td>${planets.population}</td>
            <td>${planets.climate}</td>
            <td>${planets.gravity}</td>
            </tr>
            `;
            }
            if (myJson.next === null) {
                next.disabled = true;
            }
        })
}

