var xxx = 'qwe@qwe.ru'; ///задаем верный email.
var yyy = 'Qwe123!'; /// задаем верный пароль.
var iemail = document.getElementById('inputEmail'); //задаем значение из инпута
var ipass = document.getElementById('inputPass'); //задаем значение из инпута
var rvfemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //регулярные выражение для проверки валидности ввода email.
var lowerLetters = /[a-zа-я]/g; //задание массиву маленькие буквы.
var UpperLetters = /[A-ZА-Я]/g; //задание массиву большие буквы.
var Numbers = /[0-9]/g; //задание массиву цифры.
var specznak = /[!"№;%:?*()@#\s]/g; //задает массиву нужные спец сивмволы.

document.getElementById('button').onclick = function() 
{
    if (iemail.value.match(rvfemail)) {
    } else {
        alert('Проверьте правильность ввода email');
        return false;
    }
    if (ipass.value.match(lowerLetters)) {} else { //через матч ищется хотя бы один маленький символ из введеного в инпут.
        alert('Пароль должен иметь хотя одну бы маленькую букву');
    }
    if (ipass.value.match(UpperLetters)) {} else {
        alert('Пароль должен иметь хотя бы одну Большую букву');
    }
    if (ipass.value.match(Numbers)) {} else {
        alert('Пароль должен иметь хотя бы одну цифру');
    }
    if (ipass.value.match(specznak)) {} else {
        alert('Пароль должен иметь хотя бы один спецзнак');
    }
    if (iemail.value.toUpperCase() == xxx.toUpperCase() && ipass.value == yyy)
        alert('welcome')
    else
        alert('Не верный логин или пароль');
}
