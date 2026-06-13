const golovach = [
    "Мне пиздец как плохо, я реально сейчас сдохну",
    "Вы чмо ебаное, я вас в доту научу играть",
    "Блять, ну как так можно играть, это пиздец",
    "Ты серьезно? Ты серьезно это сделал? Ты даун?",
    "Я ебал эту игру в рот",
    "Сиди там в своей помойке, умник ебаный",
    "Каждый раз одно и то же — чмошники бегают, стримснайпят",
    "Да пошли вы все нахуй"
];


function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateCitate() {
    const golovach = randomChoice(phrase1);
    return golovach;
}

console.log(generateCitate());
;