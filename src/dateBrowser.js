const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');


noButton.value = 'Нет';
yesButton.value = 'Да';

yesButton.onclick = function btnClick() {
    alert("Кнопка " + '"' + yesButton.value + '"' + " нажата");
}
noButton.onclick = function btnClick() {
    alert("Кнопка " + '"' + noButton.value + '"' + " нажата");
}