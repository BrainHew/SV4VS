
var apikey = "AIzaSyB0b-8m2WPedoGvqYMQsPkRkCOwL26nkww";

var search = document.getElementById("search");

search.focus();

search.addEventListener('keypress', function (e) {
    // если пользователь нажал на Enter, выполняем нужный код
    // e.preventDefault() для того чтобы отключить действие браузера по умолчанию (обычно это отправка формы).
    if (e.key === "Enter") {
        e.preventDefault();
        alert('You clicked Enter');
    }
});