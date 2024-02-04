let div = document.querySelector('div')

 async function homework(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(response){
        return response.json()
    })
    .then(myJson =>{
       div.innerHTML += `
       <p> Id : ${myJson.id}</p>`
    })
        
    
}
homework()

