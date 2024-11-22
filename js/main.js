let leBodyEnJSON = JSON.stringify({
    title:'foo',
    body:'bar',
    userId: 1
})

let lesHeaders={
    'Content-type':'application/json',
}

// GET

fetch('https://jsonplaceholder.typicode.com/posts/1')
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