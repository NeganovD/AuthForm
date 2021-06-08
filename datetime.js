setInterval(function() {
    var objToday = new Date(),
        weekday = new Array('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'),
        dayOfWeek = weekday[objToday.getDay()],
        dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
        months = new Array('Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours(),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds();
    var today = curHour + ":" + curMinute + ":" + curSeconds + " " + dayOfWeek + ", " + dayOfMonth + ' ' + curMonth + ' ' + curYear + ' г.';
    document.getElementsByTagName('time')[0].textContent = today;
}, 1000);