

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color= '#'
    for(let i = 0; i <6; i++){
        let random = Math.floor(Math.random()*16)
        color +=hex[random]
    }
    return color
}
let intervalID;
const startChangeColor = ()=>{
    if(!intervalID){
    intervalID = setInterval(changeBGColor,1000)
    }
    function changeBGColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangeColor = ()=>{
    clearInterval(intervalID)
    intervalID = null
}
document.querySelector('#start').addEventListener('click', startChangeColor)
document.querySelector('#stop').addEventListener('click', stopChangeColor)