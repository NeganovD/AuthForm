////ЭТО БЛЯДЬ РАБОТАЕТ - НЕ ТРОГАЙ СУКА\\\\\\\
var validemail = 'qwe@qwe.ru'
var validpass = 'Qwe123!'
var iemail = document.getElementById('inputEmail');
var ipass = document.getElementById('inputPass');
///ЭТО ПРОВЕРКА СОВПАДЕНИЯ ЕМЕЙЛА И ПАРОЛЯ////
document.getElementById('button').onclick = function() {
    if (iemail.value == validemail && ipass.value == validpass)
        alert('welcome')
    else
        alert('Не верный логин или пароль');
    console.log('тест');
}