let container = document.querySelector(".container");
let squares = document.getElementsByClassName("box");
let userRequest = 16;
let btnClearBoard = document.querySelector(".btn-clear");

let btnRed = document.querySelector(".red").onclick = () => {
    userHoverRed()};
let btnGreen = document.querySelector(".green").onclick = () => {userHoverGreen()};
let btnBlue = document.querySelector(".blue").onclick = () => {userHoverBlue()};
let btnRainbow = document.querySelector(".rainbow").onclick = () => {userHoverRainbow()};
    btnRainbow = function () {
        var o = Math.round,
            r = Math.random,
            s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    }

function resetField() {
    do {
        container.removeChild(container.lastChild);
    } while (container.firstChild);
}

function createField() {
    container.style.gridTemplateColumns = `repeat(${userRequest}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userRequest}, 1fr)`;
    for (j = 0; j < userRequest; j++) {
        for (i = 0; i < userRequest; i++) {
            let divs = document.createElement("div");
            divs.className = "box";
            container.appendChild(divs);
        }
    }
    if (userHover()) {
        userHover();
    } else if (userHoverRed()) {
        userHoverRed();
    } else if (userHoverBlue) {
        userHoverBlue();
    }
    userHover();
    if (userRequest === null) {
        userRequest = 16;
        createField();
    }
}

btnClearBoard.addEventListener("click", () => {
    resetField();
    userRequest = prompt("How many columns and rows do you want?", 32);
    createField(userRequest);
});

function userHoverRed() {
    let squaresAll = document.querySelectorAll(".box");
    squaresAll.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.background = "#FF4136";
        });
    });
}

function userHoverBlue() {
    let squaresAll = document.querySelectorAll(".box");
    squaresAll.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.background = "#0074D9";
        });
    });
}

function userHoverGreen() {
    let squaresAll = document.querySelectorAll(".box");
    squaresAll.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.background = "#2ECC40";
        });
    });
}

function userHoverRainbow() {
    let squaresAll = document.querySelectorAll(".box");
    squaresAll.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.background = btnRainbow();
        });
    });
}

function erase() {
    let squaresAll = document.querySelectorAll(".box");
    squaresAll.forEach(div => {
        div.addEventListener("click", (e) => {
            e.target.style.background = "white";
        });
    });
}

function userHover() {
    let squaresAll = document.querySelectorAll(".box");
    squaresAll.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.background = "black";
            erase();
        });
    });
}

createField();