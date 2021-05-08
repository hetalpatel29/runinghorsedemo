function start() {

    document.getElementById("horse").style.transition = "10s";
    document.getElementById("horse").style.transform = "rotateY(0deg)";
    document.getElementById("horse").style.left = "60%";



}

function back() {
    document.getElementById("horse").style.transform = "rotateY(180deg)";

    document.getElementById("horse").style.transition = "0s";


    document.getElementById("horse").style.left = "0%";

}