console.log('Скрипт загружен'); // Сообщение в консоле, что скрипт запущен

document.getElementById('button').addEventListener('click', function() {
    alert('Сейчас откроется страница с динамическими элементами');
        // Добавим переход на следующую страницу
        window.location.href = 'image.html'; // Переход на страницу image.html
    });

// Получаем элементы с классами circle и square
const circle = document.querySelector('.circle');
const square = document.querySelector('.square');

// Добавляем обработчики событий клика для каждого элемента
circle.addEventListener('click', function() {
 if (this.style.borderRadius === '50%') {
 this.style.borderRadius = '0'; // Круг превращается в квадрат
 } else {
 this.style.borderRadius = '50%'; // Квадрат превращается в круг
 }
});
square.addEventListener('click', function() {
 if (this.style.borderRadius === '50%') {
 this.style.borderRadius = '0'; // Круг превращается в квадрат
 } else {
 this.style.borderRadius = '50%'; // Квадрат превращается в круг
 }
});