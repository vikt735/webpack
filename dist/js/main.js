(self.webpackChunkwebsitejs=self.webpackChunkwebsitejs||[]).push([[179],{927:function(n,e,t){"use strict";var r=function(){var n=document.querySelector(".box"),e='\n        <div class="headerBlock"><img src='.concat("assets/images/js.svg","></div>\n    ");n.insertAdjacentHTML("afterbegin",e)},o=JSON.parse('[{"name":"Переменные и типы данных"},{"name":"Условия"},{"name":"Циклы"},{"name":"Функции"},{"name":"Масивы"},{"name":"Объекты"},{"name":"JSON"}]'),a=function(){var n=JSON.stringify(o),e=JSON.parse(n);console.log(e[2].name);document.querySelector(".box").insertAdjacentHTML("beforeend",'\n        <main >\n            <aside class="">\n                <ul class="list"></ul>\n            </aside>\n            <article class="block">\n                <h2>Переменные и типы данных</h2>\n                <p>\n                    Переменная (variable) - это, по существу, именованное значение, и, как подразумевает название, данное значение может изменяться в любое время. \n                </p>\n                <h3>Динамическая типизация</h3>\n                <p>JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной заранее. Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную для хранения данных различных типов:</p>\n                <p>var foo = 42; // сейчас foo типа Number</p>\n                <p>foo = "bar"; // а теперь foo типа String</p>\n                <p>foo = true;  // foo становится типа Boolean</p>\n                <h2>Типы данных</h2>\n                <p>Стандарт ECMAScript определяет 9 типов:</p>\n                <ul>\n                    <li>\n                        6 типов данных являющихся примитивами:\n                        <p>1) Undefined (Неопределенный тип)  : typeof instance === "undefined"</p>\n                        <p>2) Boolean (Булев, Логический тип) : typeof instance === "boolean"</p>\n                        <p>3) Number (Число) : typeof instance === "number"</p>\n                        <p>4) String (Строка) : typeof instance === "string"</p>\n                        <p>5) BigInt  : typeof instance === "bigint"</p>\n                        <p>6) Symbol (в ECMAScript 6)  : typeof instance === "symbol"</p>\n                    </li>\n                    <li>\n                    Null (Null тип ) : typeof instance === "object". \n                    <p>Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов;</p>\n                    </li>\n                    <li>\n                    Object (Объект) : typeof instance === "object".\n                    <p>Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова new: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date и множество других структур;</p>\n                    </li>\n                    <li>\n                    и Function : typeof instance === "function". \n                    <p>Специальный случай, упрощающий определение типа для Функций, несмотря на то, что все функции конструктивно унаследованы от Object.</p>\n                    </li>\n                </ul>\n                <p>И здесь нам необходимо сделать предостережение относительно использования оператора typeof для определения типа структур, т.к. все структуры будут возвращать "object" при его использовании, так как назначение typeof -- проверка типа данных, но не структур. Если проверить тип структуры всё же необходимо, то в этом случае желательно использовать оператор instanceof, так как именно он отвечает на вопрос о том, какой конструктор был использован для создания структуры.</p>\n            </article>\n            <article class="block">\n                <h2>Условия</h2>\n\n                <p>Инструкция if выполняет инструкцию, если указанное условие выполняется (истинно). Если условие не выполняется (ложно), то может быть выполнена другая инструкция.</p>\n                <h4>Синтаксис</h4>\n                <code>if (условие) {\n                        <p>инструкция1</p> \n                    } else {\n                        <p>инструкция2 }</p>\n                </code>\n                <h4>условие</h4>\n                <p>Выражение, которое является либо истинным, либо ложным.</p>\n                <h4>инструкция1</h4>\n                <p>Инструкция, выполняемая в случае, если значение "условиe" истинно (true). Может быть любой инструкцией в том числе и вложенным if. Для группировки нескольких инструкций используется блок ({...}), Когда никакого действия не требуется, может использоваться пустая инструкция.</p>\n                <h4>инструкция2</h4>\n                <p>Инструкция, выполняемая в случае, если значение "условиe" ложно (false). Может быть любой инструкцией, в том числе и вложенным if. Инструкции тоже  можно группировать в блок.</p>\n            </article>\n            <article class="block">\n                <h2>Циклы</h2>\n                <p>Выражение for создаёт цикл, состоящий из 3 необязательных выражений в круглых скобках, разделённых точками с запятой.</p>\n                <h4>Синтаксис</h4>\n                <p>for ([инициализация]; [условие]; [финальное выражение])выражение</p>\n                <h4>инициализация</h4>\n                <p>Выражение (в том числе выражения присвоения) или определение переменных. Обычно используется, чтобы инициализировать счётчик. Это выражение может опционально объявлять новые переменные с помощью ключевого слова var. Эти переменные видимы не только в цикле, т.е. в той же области области видимости, что и цикл for. Результат этого выражения отбрасывается.</p>\n                <h4>условие</h4>\n                <p>Выражение, выполняющееся на каждой интерации цикла. Если выражение истинно, цикл выполняется. Условие не является обязательным. Если его нет, условие всегда считается истиной. Если выражение ложно, выполнение переходит к первому выражению, следующему за for.</p>\n                <h4>финальное выражение</h4>\n                <p>Выражение, выполняющееся в конце интерации цикла. Происходит до следующего выполнения условия. Обычно используется для обновления или увеличения переменной счётчика.</p>\n                <h4>выражение</h4>\n                <p>Выражение, которое выполняется, когда условие цикла истинно. Чтоб выполнить множество выражений в цикле, используйте блок ({ ... }) для группировки этих выражений. Чтобы не выполнять никакого выражения в цикле, используйте пустое выражение (;).</p>\n            </article>\n            <article class="block">\n                <h2>Функции</h2>\n                <p>Функции - ключевая концепция в JavaScript. Важнейшей особенностью языка является первоклассная поддержка функций​ (functions as first-class citizen). Любая функция это объект, и следовательно ею можно манипулировать как объектом, в частности:</p>\n                <ul>\n                    <li>передавать как аргумент и возвращать в качестве результата при вызове других функций (функций высшего порядка);</li>\n                    <li>создавать анонимно и присваивать в качестве значений переменных или свойств объектов.</li>  \n                </ul>\n                <p>Функция в JavaScript специальный тип объектов, позволяющий формализовать средствами языка определённую логику поведения и обработки данных.</p>\n            </article>\n            <article class="block">\n                <h2>Масивы</h2>\n                <p>Массивы - одно из моих самых любимых средств языка JavaScript. Очень многие\n                задачи программирования подразумевают манипулирование коллекциями данных,\n                и свободное владение методами обработки массивов в JavaScript существенно облегчает это. \n                </p>\n                <h4>Создание массива</h4>\n                <code>\n                var fruits = [\'Яблоко\', \'Банан\'];  \n                <p>console.log(fruits.length); // 2</p>     \n                </code>\n                <h4>Доступ к элементу массива по индексу</h4>\n                <code>\n                var first = fruits[0]; // Яблоко\n                <p>var last = fruits[fruits.length - 1]; // Банан</p>\n                </code>\n                <h4></h4>\n            </article>\n            <article class="block">\n                <h2>Объекты</h2>\n                <p>Как и массивы, объекты в JavaScript - это контейнеры, которые называют агрегатными или комплексными типами данных. У объектов есть два основных отличия от массивов. </p>\n                <ul>\n                    <li>Массивы содержат значения, индексированные в числовой форме; объекты содержат свойства, индексированные строкой или символом. </li>\n                    <li> Массивы упорядочены (элемент arr [0] всегда следует перед arr [ 1] ); объекты\n                    не упорядочены (вы не можете гарантировать, что свойство obj.а расположено перед obj.b).</li>\n                </ul>\n                <h3>Перебор свойств</h3>\n                <h4>Цикп for ... in </h4>\n                <p>Традиционным способом перебора свойств объекта является цикл for ... in. </p>\n                <p>const SYM = Symbol();</p>\n                <p>const о = {а: 1, b: 2 , с: 3, [SYM] : 4 };</p>\n                <code>\n                    for ( let prop in о) {\n                        <p>if(!o.hasOwnProperty(prop)) continue ;}</p>\n                </code>\n                <h4>hasOwnProperty()</h4>\n                <p>Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.</p>\n                <h4>Синтаксис</h4>\n                <p>obj.hasOwnProperty(prop)</p>\n                <h3>Параметры</h3>\n                <h4>prop</h4>\n                <p>Имя проверяемого свойства.</p>\n                <h4>Описание</h4>\n                <p>Каждый объект, произошедший от Object, наследует метод hasOwnProperty. Этот метод может использоваться для определения того, содержит ли объект указанное свойство в качестве собственного свойства объекта; в отличие от оператора in, этот метод не проверяет существование свойств в цепочке прототипов объекта.</p>\n                <h3>Object.keys()</h3>\n                <p>Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).</p>\n                <h4>Синтаксис</h4>\n                <p>Object.keys(obj)</p>\n                <h3>Параметры</h3>\n                <h4>obj</h4>\n                <p>Объект, чьи собственные перечисляемые свойства будут возвращены.</p>\n                <h3>Описание</h3>\n                <p>Метод Object.keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте. Порядок свойств такой же, как и при ручном перечислении свойств в объекте через цикл.</p>\n            </article>\n            <article class="block">\n                <h2>JSON</h2>\n                <h3>JSON.parse()</h3>\n                <p>Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.</p>\n                <h4>Синтаксис</h4>\n                <p>JSON.parse(text[, reviver])</p>\n                <h4>text</h4>\n                <p>Разбираемая строка JSON. Смотрите документацию по объекту JSON для описания синтаксиса JSON.</p>\n                <h4>reviver (Необязательный)</h4>\n                <p>Если параметр является функцией, определяет преобразование полученного в процессе разбора значения, прежде, чем оно будет возвращено вызывающей стороне.</p>\n                <h4>Возвращаемое значение</h4>\n                <p>Возвращает объект Object, соответствующий переданной строке JSON text.</p>\n                <h4>Выбрасываемые исключения</h4>\n                <p>Выбрасывает исключение SyntaxError, если разбираемая строка не является правильным JSON.</p>\n                <h3>Примеры</h3>\n                <p>JSON.parse(\'{}\'); // {}</p>\n                <p>JSON.parse(\'true\'); // true</p>\n                <p>JSON.parse(\'"foo"\'); // "foo"</p>\n                <p>JSON.parse(\'[1, 5, "false"]\'); // [1, 5, "false"]</p>\n                <p>JSON.parse(\'null\');  // null</p>\n                <h3>JSON.stringify()</h3>\n                <p>Метод JSON.stringify() преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.</p>\n                <h4>Синтаксис</h4>\n                <p>JSON.stringify(value[, replacer[, space]])</p>\n                <h3>Параметры</h3>\n                <h4>value</h4>\n                <p>Значение, преобразуемое в строку JSON.</p>\n                <h4>replacer (Необязательный)</h4>\n                <p>Если является функцией, преобразует значения и свойства по ходу их преобразования в строку; если является массивом, определяет набор свойств, включаемых в объект в окончательной строке.\n                Подробное описание функции replacer даётся в статье Использование родного объекта JSON руководства по JavaScript.</p>\n                <h4>space (Необязательный)</h4>\n                <p>Делает результат красиво отформатированным (расставляя пробелы).</p>  \n            </article> \n        </main>\n    '),e.forEach((function(n){var e=document.querySelector(".list"),t='<li class="list__item btn-warning">'.concat(n.name,"</li>");e.insertAdjacentHTML("beforeend",t)}));var t=document.querySelectorAll(".list__item"),r=document.querySelectorAll(".block");t.forEach((function(n,e){n.addEventListener("click",(function(){t.forEach((function(n){n.classList.remove("active")})),r.forEach((function(n){n.classList.remove("active")})),n.classList.add("active"),r[e].classList.add("active")}))}))},i=t(379),c=t.n(i),s=t(225),p={insert:"head",singleton:!1};c()(s.Z,p),s.Z.locals;r(),a()},225:function(n,e,t){"use strict";var r=t(15),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"// extracted by mini-css-extract-plugin\nexport {};","",{version:3,sources:["webpack://./src/css/index.css"],names:[],mappings:"AAAA;QACQ,CAAA",sourcesContent:["// extracted by mini-css-extract-plugin\nexport {};"],sourceRoot:""}]),e.Z=i},645:function(n){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},15:function(n){"use strict";function e(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,a=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var t=e(n,4),r=t[1],o=t[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(i," */"),s=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[r].concat(s).concat([c]).join("\n")}return[r].join("\n")}},379:function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],s=e.base?a[0]+e.base:a[0],p=t[s]||0,l="".concat(s," ").concat(p);t[s]=p+1;var u=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:b(f,e),references:1}),r.push(l)}return r}function p(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function h(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var d=null,v=0;function b(n,e){var t,r,o;if(e.singleton){var a=v++;t=d||(d=p(e)),r=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=p(e),r=h.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var a=s(n,e),p=0;p<t.length;p++){var l=c(t[p]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}}},0,[[927,666]]]);