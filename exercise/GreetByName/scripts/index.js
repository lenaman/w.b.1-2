window.onload = init;

function init() {
    const greetBtn = document.getElementById("greetBtn");
    helloBtn.onclick = ongreetBtnClicked;
}
function ongreetBtnClicked(){
    alert("Hello There!");
}