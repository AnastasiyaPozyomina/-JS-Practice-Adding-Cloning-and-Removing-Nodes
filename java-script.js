// Создание элемента
// Создание элемента c указанным тегом document.createElement(tag)
//var div = document.createElement('div');
// Создает новый текстовый узел с данным текстом document.createTextNode(text)
//var textElem=document.createTextNode('Тут был я');

//Создание сообщения. Хотим сделать DOM-элемент div, дать ему классы и заполнить текстом.
var div = document.createElement('div');
div.className = "alert alert-success";
div.innerHTML="<p><strong> Ура!</strong> Вы прочитали это важное сообщение.</p>";
// После этого кода у нас есть DOM-элемент. Пока что он присвоен в переменную div, но не виден, так как не связан со страницей.
//Чтобы DOM-узел был показан на странице, его необходимо вставить в document
//Предположим решили вставить в некий элемент parentElem, например var parentElem=document.body
//для вставки внутрь parentElem есть следующие методы .appendChild(elem) (добавляет в конец дочерных элементов) и .insertBefore(elem,nextSibling)

//Варианты
//1.добавим сообщение в конец <body>
//document.body.appendChild(div);

//2.добавим сообщение в начале <body>
document.body.insertBefore(div, document.body.firstChild);

//клонирование узлов .cloneNode
var div2 = div.cloneNode(true);
//копию можно подправить
div2.querySelector('strong').innerHTML = 'Супер!';


//вставим после текущего сообщения
div.parentNode.insertBefore(div2, div.nextSibling);

//Удаление узлов .removeChild либо .replaceChild

//Через 2 секунды удаление пропадет
setTimeout(function () {
div.parentNode.removeChild(div);
},2000);

