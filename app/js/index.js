!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

}); // end ready

function copyToClipboardOne(text){
   var copytext = document.createElement('input');
   
   if (typeof text=='undefined') copytext.value = "AUTO SCAN Car FM Transmitter | (со скидкой) 769ГРН"
   else copytext.value = text

   var tooltip = document.getElementById("myTooltip");
   tooltip.innerHTML = "Скопировано!";

   document.body.appendChild(copytext)
   copytext.select()
   document.execCommand('copy')
   document.body.removeChild(copytext)
}

function copyTopProduct(text){
   var copytext = document.createElement('input');
   
   if (typeof text=='undefined') copytext.value = "Wireless Car Mount Charger | (со скидкой) Цена: 599ГРН"
   else copytext.value = text

   var tooltip = document.getElementById("copyProduct");
   tooltip.innerHTML = "Скопировано!";

   document.body.appendChild(copytext)
   copytext.select()
   document.execCommand('copy')
   document.body.removeChild(copytext)
}

function copyToClipboardTwo(text){
   var copytext = document.createElement('input');
   
   if (typeof text=='undefined') copytext.value = "Адаптер для быстрой зарядки 20w | (со скидкой) Цена: 300ГРН"
   else copytext.value = text

   var tooltip = document.getElementById("myTooltipTwo");
   tooltip.innerHTML = "Скопировано!";

   document.body.appendChild(copytext)
   copytext.select()
   document.execCommand('copy')
   document.body.removeChild(copytext)
}

function copyToClipboardThree(text){
   var copytext = document.createElement('input');
   
   if (typeof text=='undefined') copytext.value = "Беспроводные наушники inpods 12 | (со скидкой) Цена: 399ГРН"
   else copytext.value = text

   var tooltip = document.getElementById("myTooltipThree");
   tooltip.innerHTML = "Скопировано!";

   document.body.appendChild(copytext)
   copytext.select()
   document.execCommand('copy')
   document.body.removeChild(copytext)
}

function copyToClipboardFour(text){
   var copytext = document.createElement('input');
   
   if (typeof text=='undefined') copytext.value = "Компактный Power bank MICRONIK 10000 mAh | (со скидкой) Цена: 499ГРН"
   else copytext.value = text

   var tooltip = document.getElementById("myTooltipFour");
   tooltip.innerHTML = "Скопировано!";

   document.body.appendChild(copytext)
   copytext.select()
   document.execCommand('copy')
   document.body.removeChild(copytext)
}

function outTopProduct() {
   var tooltip = document.getElementById("copyProduct");
   tooltip.innerHTML = "Копировать товар";
}

function outFunc() {
   var tooltip = document.getElementById("myTooltip");
   tooltip.innerHTML = "Копировать товар";
}

function outFuncTwo() {
   var tooltip = document.getElementById("myTooltipTwo");
   tooltip.innerHTML = "Копировать товар";
}

function outFuncThree() {
   var tooltip = document.getElementById("myTooltipThree");
   tooltip.innerHTML = "Копировать товар";
}

function outFuncFour() {
   var tooltip = document.getElementById("myTooltipFour");
   tooltip.innerHTML = "Копировать товар";
}