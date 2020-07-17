function task1(){
    let number = prompt("Введити пятизначное число");
    let lastNum = number % 10;
    let result = ((number-lastNum)/10)+(lastNum*10000)
    alert(result)
}

function task2 () {
    let number = prompt("Введити целое число");
    (number % 2 == 0) ? alert(`Число ${number} является четным`)
        : alert(`Число ${number} является нечетным`);
}

function task3() {
    //Будем считать что дату ввели правельно
    let year = prompt("Введити год") ;
    let month = prompt("Введити месяц");
    let day = prompt("Введити день");
    let yearIsVisokos = (( year % 4 == 0 ) || ( year % 400 == 0 )) ? false : true;
    day++;

    if(yearIsVisokos){
        if(month == 2){
            if(day == 30){
                month++;
                day = 1;
            }
        }
        else if(day == 31) {
            month++;
            day = 1;
        }
    }else {
        if (day == 31) {
            month++;
            day = 1;
        }

    }

    if(month > 12){
        month = 0;
        year++;
    }

    alert(`${day}.${month}.${year}`)
}

function task4() {
    let num = prompt("Введити простое число");
    let numIsProst = true;

    for(let i = 2;i<num;i++){
        if((num % i) == 0){
            numIsProst = false;
            break;
        }
    }

    if(numIsProst){
        alert(`Число ${num} простое`)
    } else {
        alert(`Число ${num} не простое`)
    }
}

function task5(num1,num2,num3,num4,num5) {
    let max = num1;
    let nums = [num1,num2,num3,num4,num5]
    i=1;

    while (nums[i] != undefined){
        if(nums[i]>max){
            max = nums[i];
        }
        i++;
    }
    return max;
}

let fruits = ['orange','beclajan','pomidor','arbus','banan','iabloko','mandarin','ananas']

function task6(nameFruit) {
    nameFruit = nameFruit.toLowerCase();

    for(let i = 0;i<fruits.length;i++){
        if(fruits[i] = nameFruit){
            return i;
        }
    }

    return -1;
}

// Возращает true если палиндром
function task7(str) {
    for(let i = 0;i<str.length;i++){
        if(str[i] != str[str.length - i -1]){
            return false;
        }
    }

    return true;
}

function task8() {
    let num = prompt("Введите трехзначное число");
    let revNum = "";

    for (let i = 0; i < 3; i++) {
        revNum += num % 10;
        num = (num - num % 10) / 10;
    }

    alert(revNum)
}

function task9() {
    let numUser = prompt("Загадайте число от 0 до 100");
    let left = 0;
    let right = 100;
    let ans = "";
    let mid = Math.floor(left + (right - left) / 2);

    do{
        ans = prompt(`Ваше число > ${mid}, < ${mid} или == ${mid}`);

        if(ans == ">"){
            left = mid + 1;
        }
        else if(ans == "<"){
            right = mid;
        }

        mid = Math.floor(left + (right - left) / 2);
    }while(ans != "==")
}

function task10() {
    bals = 0;

    ans = prompt("Если человек съест мухомор что с ним будет?\na)Умрет\nb)Трипанет\nc)Нечего не произойдет");

    if(ans == "с") bals += 2;

    ans = prompt("Как приветствуются панки?\na)Пожимают руки\nb)Рэп дерьмо,папса параша,панки Хой! Победа наша" +
        "\nc)Плюют друг другу в лицо");

    if(ans == "b") bals += 2;

    ans = prompt("Дед мороз существует?\na)ДА\nb)нет\nc)ДА");

    if(ans == "a" || ans == "c") bals += 2;

    alert(`У вас ${bals} баллов!\nДа ты крут!`)
}