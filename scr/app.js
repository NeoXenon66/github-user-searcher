const btn=document.getElementById("search")
var value;
const myclick=()=> {
    value=document.getElementById("box").value
    alert(value)
}
btn.addEventListener("click",myclick)