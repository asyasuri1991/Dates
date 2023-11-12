function task1()
{
function getWeekDay(date) {
    let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[date.getDay()];
    }
let date = new Date (prompt("Введите дату (год-месяц-число)"));
alert( getWeekDay(date) );
}


function task2()
{
    today = new Date()
    nextDate = new Date("January 1, 2024")
    msPerDay = 24*60*60*1000;
    daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
    alert(`До Нового года осталось ${daysLeft} дн.`);
}


function task3()
{
    let a = new Date(prompt("Введите дату: год-месяц-число"));
    function getWeekDayNext(a) {
        a.setDate(a.getDate()+1);
        console.log(a)
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }
    function getWeekDayCurr(a) {
        a.setDate(a.getDate()-1);
        console.log(a)
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }  
    function getWeekDayPrev(a) {
        a.setDate(a.getDate()-1);
        console.log(a)
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }    
    let week = [
        {
          next: `${getWeekDayNext(a)}`,
          curr:  `${getWeekDayCurr(a)}`,
          prev: `${getWeekDayPrev(a)}`,
        }];
    console.log (week);
    alert ("Ответ указала в console.log");
}



function task4()
{
    let milli = prompt("Введите миллисекунды");
    function getMin(milli){
        let minutes = Math.floor(milli / 60000);
        return minutes;
      };
      function getSec(milli){
        let sec = Math.floor(milli / 1000);
        return sec;
      };  
      function getHours(milli){
        let hours = Math.round(milli / (1000*60*60));
        return hours;
      };  
      function getDay(milli){
        let days = Math.round(milli/ (1000*60*60*24));
        return days;
      };        
    result = [
        {
            d: `${getDay(milli)}`,
            h: `${getHours(milli)}`,
            m:  `${getMin(milli)}`,
            s: `${getSec(milli)}`,        
        }];
    console.log (result);
    alert (`${milli} миллисекунд - это ${getDay(milli)} дней`);
    alert (`${milli} миллисекунд - это ${getHours(milli)} часов`);
    alert (`${milli} миллисекунд - это ${getMin(milli)} минут`);
    alert (`${milli} миллисекунд - это ${getSec(milli)} секунд`);
}


function task5()
{
    let today = new Date();
    let hbdate = new Date(prompt("Введите дату рождения (год-месяц-число)"));
    let diff = new Date(today.getTime() - hbdate.getTime());
    alert(`Ваш возраст - ${diff.getUTCFullYear() - 1970} лет, ${diff.getUTCMonth()} мес и ${diff.getUTCDate() - 2} дн`);
}


function task6()
{
for (let friday of arrayOfFridaythe13thsIn(2023))
console.log(friday.toLocaleString(undefined, { day: "numeric", month: "long" }))
function arrayOfFridaythe13thsIn(year) {
    let array = [];
    for (let month = 0; month < 12; month++) {
        let d = new Date(year, month, 13);
        if (d.getDay() == 5) {
            array.push(d);
        }
    }
   alert (array);
}
}


function task7()
{
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let hello;
    if (hours >= 0 && hours <= 11.00)
        hello = 'Доброе утро!';
    else if (hours >= 11.01 && hours <= 17)
        hello = 'Добрый день!';
    else if (hours >= 17.01 && hours <= 24)
        hello = 'Добрый вечер!';
    alert (hello);
}


function task8()
{  
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let Christmas = new Date (2023,0,7);
    let DefendersDay = new Date (2023,1,23);
    let WomensDay = new Date (2023,2,8);
    let May = new Date (2023,4,1);
    let VictoryDay = new Date (2023,4,9);
    let RussiaDay = new Date (2023,5,12);
    let UnityDay = new Date (2023,10,4);
    let NewYear = new Date (2023,11,31);
    let holiday = [
        { 'Рождество': `${days[Christmas.getDay()]}`},
        { 'День защитника Отечества': `${days[DefendersDay.getDay()]}`},
        { 'Международный женский день': `${days[WomensDay.getDay()]}`},
        { 'Праздник весны и труда': `${days[May.getDay()]}`},
        { 'День победы': `${days[VictoryDay.getDay()]}`},
        { 'День России': `${days[RussiaDay.getDay()]}`},
        { 'День народного единства': `${days[UnityDay.getDay()]}`},
        { 'Новый год': `${days[NewYear.getDay()]}`},
      ]; 
      console.log(holiday);
}

