// Задание №1
// Создайте функцию с именем log, которая принимает один параметр и выводит его на экран при помощи console.log.
// Ожидаемый результат:
// log(1); // 1
// log("hello"); // "hello"
// log(); // undefined

function log(param) {
    console.log(param)
}
log("TASK 1")
log(1);
log("hello");
log();

// Задание №2
// Есть некий массив array, в котором лежат разные элементы. Выведите каждый элемент на экран при помощи функции log из задания №1, используя поочерёдно все способы из списка:
// Цикл for.
// Цикл while.
// Метод map или forEach на массиве.
// Исходные данные:
// var array = [1,2,3,"hello","world",null];

log('TASK 2: for');
var array = [1,2,3,"hello","world",null];
for(var i = 0; i<array.length; i++) 
{
    log(array[i]);
}

log('TASK 2: while');
var j = 0
while(j<array.length) 
{
    log(array[j]);
    j++;
}

log('TASK 2: map');
array.map(log);

// Задание №3
// Есть некий массив array1, в котором лежат числа. При помощи метода map создайте другой массив, содержащий те же числа, умноженные на 10.
// Исходные данные:
// var array1 = [1,2,3,4,1,2,3,0];
// Ожидаемый результат:
// array2; // [10,20,30,40,10,20,30,0]
log('TASK 3');

var array1 = [1,2,3,4,1,2,3,0];
array2 = array1.map(function(elem){return elem*10});
log(array2);

// Задание №4
// Создайте массив array. При помощи любого цикла заполните его числами от 0 до 9.
// Исходные данные:
// var array = [];
// Ожидаемый результат:
// array; // [0,1,2,3,4,5,6,7,8,9]

log('TASK 4');
var array = [];
var i = 0;
while(i<10)
{
    array.push(i);
    i++;
}
log(array);

// Задание №5
// Создайте массив field. При помощи любого цикла заполните его десятью массивами. Каждый из этих десяти массивов заполните десятью нулями. В итоге должно получиться поле 10х10 из нулей.
// Исходные данные:
// var field = []
// Ожидаемый результат:
// field; // [ [0,0, ... ,0], [0,0,...,0], ..., [0,0,...,0] ] (поле 10х10 нулей)

log('TASK 5');
var field = [];

for(var i = 0; i < 10; i++) 
{
    // вот его лучше тут держать или наверх вынести?
    var row = [];
    
    for(var j = 0; j<10; j++)
    {
        row.push(0);
    }

    field.push(row);
}
log(field);

// Задание №6
// Возьмите из задания №5 код инициализации поля. Напишите функцию createField, которая принимает параметры width и height, и создаёт поле с заданной шириной (количество массивов) и высотой (количество элементов в каждом массиве). Функция должна возвращать поле (массив массивов).
// Если в width или height переданы нули или отрицательные значения, функция не может вернуть корректное поле, поэтому она может выбросить любую ошибку, не отработать, или вернуть поле 1х1 (любой вариант на выбор).
// Ожидаемый результат:
// createField(1,1) // [ [0] ]
// createField(2,1) // [ [0], [0] ]
// createField(1,2) // [ [0,0] ]
// createField(2,2) // [ [0,0], [0,0] ]
// createField(3,3) // [ [0,0,0], [0,0,0], [0,0,0] ]

log('TASK 6');
var createField = function(w, h) 
{
    if (w <= 0 || h <= 0) throw "param cannot be 0 or negative"
    var field = [];
    for(var i = 0; i < w; i++) 
    {
        
        var row = [];
        
        for(var j = 0; j<h; j++)
        {
            row.push(0);
        }

        field.push(row);
    }
    return field;
}

log(createField(5,4));
