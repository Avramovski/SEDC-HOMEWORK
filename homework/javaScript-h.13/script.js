const inputType = document.querySelector('#type');
const inputBrand = document.querySelector('#brand');
const searchButton = document.querySelector('#button');
const inputModel = document.querySelector('#model');
const inputDoors = document.querySelector('#doors');
const selectGasType = document.querySelector('#gasType');
const selectColor = document.querySelector('#color');
const inputNew = document.querySelector('#new');
const inputOld = document.querySelector('#old');
const inputBoth = document.querySelector('#both');
const inputHorsepower = document.querySelector('#horsepower');
const table = document.getElementById('IdTable');
function createHead() {
    table.innerHTML += `
    <thead>
    <tr>
        <th>Type</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Doors</th>
        <th>Gas Type</th>
        <th>Color</th>
        <th>Horsepower</th>
    </tr>
</thead>
`
}
function createTable(car) {
    table.innerHTML += `
    <tbody>
        <tr>
            <td>${car.type}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.doors}</td>
            <td>${car.gasType}</td>
            <td>${car.color}</td>
            <td>${car.horsepower}</td>
        </tr>
    </tbody>`
}
async function fetchByType() {

    const response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json");
    const cars = await response.json();

    let filteredItems = cars.filter(car =>
        (!inputType.value || car.type === inputType.value) &&
        (!inputBrand.value || car.brand === inputBrand.value)
    );

    const searchModel = inputModel.value.toLowerCase();
    if (searchModel !== "") {
        filteredItems = filteredItems.filter(car =>
            car.model.toLowerCase().includes(searchModel)
        );
    }

    const filterDoors = inputDoors.value;
    if (filterDoors !== "") {
        filteredItems = filteredItems.filter((car) => car.doors == filterDoors);
    }
    if (selectGasType.value !== "") {
        filteredItems = filteredItems.filter(
            (car) => car.gasType === selectGasType.value
        );
    }
    if (selectColor.value !== "") {
        const colore = selectColor.value.trim().toLowerCase();
        filteredItems = filteredItems.filter((car) =>
            car.color.toLowerCase().includes(colore)
        );
    }

    filteredItems = filteredItems.filter((car) => {
        if (inputNew.checked && car.isNew) {
            return true;
        }
        if (inputOld.checked && !car.isNew) {
            return true;
        }
        if (!inputNew.checked && !inputOld.checked) {
            return true;
        }

    });

    const filterHorsepower = inputHorsepower.value;
    if (filterHorsepower !== "") {
        filteredItems = filteredItems.filter((car) => car.horsepower >= parseInt(filterHorsepower));
    }



    filteredItems.forEach(car => createTable(car));
}


searchButton.addEventListener('click', async () => {
    table.innerHTML = '';
    createHead();
    await fetchByType();
});


let createTableBtn = document.querySelector("#create-table")
createTableBtn.addEventListener('click', function () {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json")
        .then(function (response) {
            return response.json()
        })
        .then((json) => {


            table.innerHTML += `
        <thead>
        <tr>
            <th>Type</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Doors</th>
            <th>Gas Type</th>
            <th>Color</th>
            <th>Horsepower</th>
            </tr>
            </thead>
            `
            json.forEach(car => {
                table.innerHTML += `
                    <tbody>
                        <tr>
                            <td>${car.type}</td>
                            <td>${car.brand}</td>
                            <td>${car.model}</td>
                            <td>${car.doors}</td>
                            <td>${car.gasType}</td>
                            <td>${car.color}</td>
                            <td>${car.horsepower}</td>
                        </tr>
                    </tbody>
                `;
            });

        })
})


let del = document.querySelector('#delete')
del.addEventListener('click', () => {
    table.innerHTML = ''
})