setInterval(function(){
    function NOL(value)//функция, которая подставит перед значем символ "0" если значение например секунды меньше нуля, чтобы выглядело привычно(например, без функции выглядело бы так 12:0:2, а с функцией 12:00:02)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }
var datavremya = new Date();
nchas = NOL(datavremya.getHours());//применяем функцию для переменной часа, на случай если час будет меньше 10
nminuta = NOL(datavremya.getMinutes());
nsekunda = NOL(datavremya.getSeconds());
ngod = datavremya.getFullYear();
//nmesyac = NOL(datavremya.getMonth()+1); //(чтобы вывелось правильный номер месяца, т.к система считает от 0, где 0 - январь, 1 - февраль и т.д)
nden = datavremya.getDate();
dennedeli = new Array('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'); //создаем массив и задаем названия каждому элементу где 0 - это ВС, 1 - ПН и т.д
vdennedeli = dennedeli[datavremya.getDay()];
imyamesyaca = new Array('Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'); //создаем массив и задаем названия каждому элементу где 0 - это ВС, 1 - ПН и т.д
vimyamesyaca = imyamesyaca[datavremya.getMonth()];
var ZZZ = nchas + ":" + nminuta + ":" + nsekunda + " Сегодня: " + vdennedeli + ", "+ nden + " " + vimyamesyaca + " " + ngod + " г.";
console.log(ZZZ);
document.getElementsByTagName('time')[0].textContent = ZZZ;
},1000);
