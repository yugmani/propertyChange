const d1 = document.getElementById("div1");
const d2 = document.getElementById("div2");

d2.onclick = function(){
    d1.innerHTML = "<h1>Right Now!</h1> <h3>Was that quick or what?</h3>";
    d1.style.backgroundColor = "#CCCCCC";
    return false;
};