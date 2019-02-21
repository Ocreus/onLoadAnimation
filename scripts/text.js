
const ani = document.querySelector(".ani");
const text = ani.querySelector(".text");
window.addEventListener("load", _ => {
    text.classList.remove("hidden");

    setTimeout(_ => {ani.style.opacity = "0"}, 1000);
    setTimeout(_ => {ani.remove()}, 2000);

    // const a = ani.querySelector(".s1").firstElementChild.firstChild.nextSibling.firstChild;
    // a.textContent.replace("fill:#f2f2f2;", "fill:blue;");


    // const b = ani.querySelector("#path815");
    // b.setAttribute("style", "fill:blue;");

    // const b = ani.querySelectorAll("#path815");
    // console.log(b);

    // for(let i=0; i<b.length;i++){
    // b[i].setAttribute("style", "fill:gray;");
    // }

    const svg = ani.getElementsByClassName("c");
    for(let i=0; i<svg.length;i++)
        svg[i].style.animation = "bgAni .8s ease-in-out forwards";
})

