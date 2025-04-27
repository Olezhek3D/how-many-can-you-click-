const h1 = document.getElementById("myH1");
const h2 = document.getElementById("myH2");
const btn = document.getElementById("myBtn");
const pageContent = document.getElementById("clicker");

let count = 0;
let game = false;

btn.onclick = function () {
    game = true;
    count = 0;
    btn.style.display = "none";
    h2.textContent = "";
    h1.textContent = "Кликай, кликай, кликай!!";

    setTimeout(function () {
        game = false;
        btn.style.display = "block";
        h1.textContent = "Сколько ты раз сможешь кликнуть на фон за 10 секунд?";
        h2.textContent = `Ты кликнул(а) ${count} раз. Это здорово!`;
    }, 3000);
};

pageContent.onclick = function (event) {
    if (game) {
        if (event.target !== btn) {
            count++;
        }
    }
};

