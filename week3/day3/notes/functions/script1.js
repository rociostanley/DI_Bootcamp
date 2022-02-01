let close = document.getElementById("close")
close.addEventListener("click", disapear)
function disapear(){
    banner.classList.add("hide")
};

let seconds = document.getElementById("seconds");
let countItDown = function(){ 
    seconds.textContent = parseFloat (seconds.textContent) -1;
    if (seconds.textContent <= 0){
        clearInterval(counting);
    }
}
let counting = window.setInterval(countItDown, 1000);