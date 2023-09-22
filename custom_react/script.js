const root =document.getElementById("root");
let newElement={
    type:"a",
    props:{
        href:"https://youtube.com",
        target:"_blank"
    },
    clildrean:"hello youtube"
}
function createElement(newElement,root) {
    let x=document.createElement(newElement.type);
    for (const prop in newElement.props) {
        x.setAttribute(prop,newElement.props[prop]);
    }
    x.innerHTML=newElement.clildrean
    root.appendChild(x)
}

let x=document.getElementById("btn1");
let y=document.getElementById("btn2");
x.addEventListener("click",add)
y.addEventListener("click",sub)

createElement(newElement,root)
function add() {
    let element =document.getElementById("btn1");
    let x=Number.parseInt(element.innerHTML)+21+12;
    element.innerHTML=x;
}
function sub() {
    let element =document.getElementById("btn2");
    let x=Number.parseInt(element.innerHTML)-(21+12);
    element.innerHTML=x;
}