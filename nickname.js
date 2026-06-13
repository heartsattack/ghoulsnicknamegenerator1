const phrase1 = [
    "anesthetic",
    "numb",
    "numbness",
    "pulse flat",
    "nerve dead",
    "kill the pain",
    "dull ache",
    "no feeling",
    "frozen vein",
    "dead injection",
    "withdrawal"
];

const phrase2 = [
    "玉pain玉",
    "魂numb the pain魂",
    "鬼hate me鬼",
    "闇hollow闇",
    "死1000-7死",
    "血drain血",
    "骨broken骨",
    "虚empty inside虚",
    "零zero pulse零",
    "獄pudge abuzer獄",
    "呪hate me as you do呪",
    "痛ache痛"
];

const phrase3 = [
    "мне плевать на игру",
    "я dead inside",
    "мне похуй я дед инсайд",
    "1000-7",
    "пофиг на игру",
    "ты в муте",
    "нажал мув за тобой",
    "го zxc если не позер",
    "щас шмотки сломаю",
    "zxcursed",
    "zxc",
    "пустота внутри",
    "ноль эмоций",
    "всё равно",
    "уже всё равно",
    "сгорел на ммо",
    "фармил фармил а смысла нет",
    "тильтую в пустоту",
    "керри без души",
    "саппорт без надежды",
    "мид с пустыми глазами",
    "оффлейн по жизни",
    "вард на месте моего сердца",
    "смок — единственный друг",
    "билд: тоска + апатия",
    "пикни пустоту, я уже внутри",
    "пустота выбрана",
    "тильт бесконечности",
    "афк в реале",
    "вышел из игры",
    "анстакиллом по нервам",
    "ганк на моё настроение",
    "сижу в джунглях своих мыслей",
    "фармлю крипов ради крипов",
    "экспериенс? давно не качался",
    "керри без керри",
    "репортнул жизнь",
    "моя душа в лобби ожидания",
    "поиск матча — поиск смысла",
    "ни одного смыла в этой дроче",
    "my heart is on cooldown",
    "респавн через 3 минуты",
    "абузю пуджа без души",
    "хук цепляет пустоту",
    "флеш хилом по сердцу",
    "2 pos or feed",
    "1 pos or feed",
    "puck abuzer",
    "pudge abuzer",
    "sf abuzer"
];

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateNick() {
    const part1 = randomChoice(phrase1);
    const part2 = randomChoice(phrase2);
    const part3 = randomChoice(phrase3);
    
    return part1 + " " + part2 + " " + part3;
}

console.log(generateNick());
;