let wrap = document.getElementById("wrap")
let btn = document.getElementById("btn")
let heading = document.getElementById("heading")
let color = document.getElementById("color")
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',changer)
function changer(){
    let hexcolor='#'
    for(i=0;i<6;i++){
        hexcolor = hexcolor+(randhex())
    }
    let ans = wrap.style.backgroundColor = hexcolor
    color.innerHTML=hexcolor
    return ans
}

function randhex(){
    let rand = Math.floor(Math.random()*16)
    return hex[rand]
}
let i
