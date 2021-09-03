'use strict';

//console.log(document.body); //обратились к элементу body, точно так же
//обращиемся и к другим элементам на странице

//console.log(document.documentElement); //выведет в консоль всю HTML с содержимым

//console.log(document.body.childNodes);//получить все DOM-узлы, которые
//находятся внутри родителя body(узлы - не видим в верстке, а DOM-элементы видим)

//console.log(document.body.firstChild); //получить первый узел
//console.log(document.body.lastChild); //получить второй узел родителя

//console.log(document.querySelector('#current').parentNode); //получить узел родителя
//элемента с id current

//console.log(document.querySelector('#current').parentNode.parentNode);//получить
//родителя, который еще на уровень выше в DOM-дереве


//data-атрибуты

//это ориентиры, которые ставятся в верстке(можно присвоить булиновое или др значение)
console.log(document.querySelector('[data-current="3"]').nextSibling);
//получить узел, следующий за ориентиром(data-атрибутом)
console.log(document.querySelector('[data-current="3"]').previousSibling);