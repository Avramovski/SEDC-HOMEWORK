let div = document.querySelector('div')

 async function homework(parametar){
    fetch(`https://jsonplaceholder.typicode.com/todos/${parametar}`)
    .then(function(response){
        return response.json()
    })
    .then(myJson =>{
       div.innerHTML += `
       <p> Id : ${myJson.id}</p>
       <p>  ${myJson.title}</p>`
    })
        
    
}
homework(1)

