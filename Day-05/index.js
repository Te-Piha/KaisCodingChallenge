function addOne(){
    const counter = document.getElementById('counter')
    const newCounter = Number(counter.innerText)
   
document.getElementById('counter').innerHTML = newCounter + 1
}

function minusOne(){
    const counter = document.getElementById('counter')
    const newCounter = Number(counter.innerText)
   
document.getElementById('counter').innerHTML = newCounter - 1
}