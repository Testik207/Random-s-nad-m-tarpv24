// Комментарий 7: Массив данных, содержащий словарные пары (эстонский и русский языки)
const dictionary = [
    { et: "kodu", ru: "дом" },
    { et: "kool", ru: "школа" },
    { et: "raamat", ru: "книга" },
    { et: "arvuti", ru: "компьютер" },
    { et: "sõber", ru: "друг" },
    { et: "päike", ru: "солнце" }
];

let currentETIndex = 0;
let currentRUIndex = 0;

// Функция для генерации случайных слов для обеих колонок
function generateNewWords() {
    currentETIndex = Math.floor(Math.random() * dictionary.length);
    currentRUIndex = Math.floor(Math.random() * dictionary.length);

    document.getElementById("et-word").innerText = dictionary[currentETIndex].et;
    document.getElementById("ru-word").innerText = dictionary[currentRUIndex].ru;

    document.getElementById("et-input").value = "";
    document.getElementById("ru-input").value = "";
    document.getElementById("et-result").innerText = "";
    document.getElementById("ru-result").innerText = "";
}

// Функция проверки ответа для первой колонки (Эст -> Рус)
function checkET() {
    const userVal = document.getElementById("et-input").value.trim().toLowerCase();
    const correctVal = dictionary[currentETIndex].ru.toLowerCase();
    const resDiv = document.getElementById("et-result");

    if (userVal === correctVal) {
        resDiv.style.color = "green";
        resDiv.innerText = "Õige! / Правильно!";
        setTimeout(generateNewWords, 1500);
    } else {
        resDiv.style.color = "red";
        resDiv.innerText = "Vale! Proovi uuesti.";
    }
}

// Комментарий 8: Функция проверки ответа для второй колонки (Рус -> Эст)
function checkRU() {
    const userVal = document.getElementById("ru-input").value.trim().toLowerCase();
    const correctVal = dictionary[currentRUIndex].et.toLowerCase();
    const resDiv = document.getElementById("ru-result");

    if (userVal === correctVal) {
        resDiv.style.color = "green";
        resDiv.innerText = "Õige! / Правильно!";
        setTimeout(generateNewWords, 1500);
    } else {
        resDiv.style.color = "red";
        resDiv.innerText = "Vale! Proovi uuesti.";
    }
}

// Запускаем генерацию слов автоматически при загрузке страницы
window.onload = generateNewWords;
