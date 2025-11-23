document.addEventListener("scroll", verificaBotao);

function verificaBotao() {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    let button = document.getElementById("botaoUp");
    if (scrollPos == 0) {
        button.style.display = "none";
    } else {
        button.style.display = "inline-block";
    }

}