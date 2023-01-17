const btn=document.getElementById("search")
var value;
const searchGitHub=()=> {
    value=document.getElementById("box").value
    alert(value)
}
btn.addEventListener("click",searchGitHub)