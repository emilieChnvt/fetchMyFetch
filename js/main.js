let leBodyEnJSON = JSON.stringify({
    title:'foo',
    body:'bar',
    userId: 1
})

let lesHeaders={
    'Content-type':'application/json',
}

// GET

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(data => console.log(data))


//POSTS

fetch('https://jsonplaceholder.typicode.com/posts/',{
    method: 'POST',
    headers: lesHeaders,
    body: leBodyEnJSON

})
    .then(response => response.json())
    .then(data => console.log(data))

//PUT

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'PUT',
    headers: lesHeaders,
    body: JSON.stringify({
        id:1,
        tittle:'foo',
        body:'bar',
        userId:1

    }),

})
    .then(response => response.json())
    .then(data => console.log(data))

//PATCH

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'PATCH',
    headers: lesHeaders,
    body: JSON.stringify({
        title:'fo'

    }),

})
    .then(response => response.json())
    .then(data => console.log(data))



//DELETE

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: 'DELETE',
})



const btnFetch=document.querySelector('.btnFetch');

btnFetch.addEventListener('click',()=>{
    fetch('https://blinky.esdlyon.dev')
        .then(response => response.json())
        .then(data => console.log(data))




})

