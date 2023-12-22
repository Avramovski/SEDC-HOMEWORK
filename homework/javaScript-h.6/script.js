const submit = document.getElementById("button");



submit.addEventListener("click", function () {
    const tabel = document.getElementsByTagName('table')[0];
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;

    if (  isNaN(rows) || isNaN(columns)){
        alert('You need to input number!');
        return ;
        
        
    }
    console.log(rows, columns);
    
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            let text = document.createTextNode(`Row-${[i + 1]} Col-${[j + 1]}`)

            td.append(text)
            tr.append(td)
        }
        tabel.append(tr)
    }
    
})


