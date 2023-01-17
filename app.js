let btn=document.getElementById("search")
let value;
let myclick=()=> {
    value=document.getElementById("box").value
    alert(value)
}
btn.addEventListener("click",myclick)