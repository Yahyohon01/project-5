const input = document.getElementById('input');
const div = document.getElementById('demo');




let arrayOfJokes = []




function getInfo(){
    
    arrayOfJokes.push(input.value)
    console.log(arrayOfJokes)

}

function randomJokes(){
    let n = Math.floor(  Math.random() * arrayOfJokes.length)
    div.innerHTML = arrayOfJokes[n]
}