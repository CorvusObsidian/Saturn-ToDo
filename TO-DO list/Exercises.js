/*let date = new Date()
console.log(date)
const btn = document.getElementById("print")
const input = document.getElementById("input")
let perimeter, surface;
*/



/*
location.reload(
    window.print()
    
)
btn.addEventListener("click", ()=>{
    const x = window.open()
    const par = document.createElement("div")
    x.window.opener.par.textContent = "Hello" 
})


let today = new Date()
let dd = today.getDate()
let mm = today.getMonth()+1
let yy = today.getFullYear()
const arr = []
btn.addEventListener("click", ()=>{
    
    try {

        if (arr.length<3) {

        arr.push(parseFloat(input.value));
        

        for(let i = 0; i < arr.length; i++){
            perimeter = arr[i]*3/2
            surface = Math.sqrt(perimeter*(perimeter - arr[i]**3))
        };
        console.log(perimeter)
        console.log(parseFloat(surface))

    }
    } catch (error) {
        console.log("ERROR 404")
    }
})


if (dd>3 && dd<21) return "th";

//today =`${dd}/${mm}/${yy}`*/

//console.log(arr)

const animate_string = (id) => {
    const element = document.getElementById(id)

    const textNode = element.childNodes[0] 

    let text = textNode.data

    setInterval(()=>{
        text = text[text.length-1] + text.substring(0,text.length-1)

        textNode.data = text
    },100)

}

animate_string('yourElementId')