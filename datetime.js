setInterval(function() { //функция которая позволит каждую секунду проверять время, чтобы время шло в реалтайме
    var objToday = new Date(), //задаем новую переменную с текущей датой
        weekday = new Array('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'), //задаем массив с именами дней недели
        dayOfWeek = weekday[objToday.getDay()], //берем день недели(который считается от 0 до 6, где 0 ВС, а 6 - СБ) и передаем значение из массива
        dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(), //здесь описана функция, которая добавляет символ "0", если полученное число меньше 10, т.е например если бы дата была 9.12.2021, то было бы написано 09.12.2021
        months = new Array('Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'),//задаем массив с именами месяцев
        curMonth = months[objToday.getMonth()], //берем цифру месяца
        curYear = objToday.getFullYear(), //выбираем год
        curHour = objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours(), //по аналогии с днем
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(), //по аналогии с днем
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(); //по аналогии с днем
    var today = curHour + ":" + curMinute + ":" + curSeconds + " " + dayOfWeek + ", " + dayOfMonth + ' ' + curMonth + ' ' + curYear + ' г.'; //задаем переменную и передаем все переменные полученные ранее в одну.
    document.getElementsByTagName('time')[0].textContent = today; // берем значение today и вставлем в HTML код в строку с тэгом "time"
}, 1000); //задаем интервал, раз в какое время будет обновляться скрипит, в миллисекундах
