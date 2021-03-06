import base from './../bd/base.json';

const main = () => {
    const list = JSON.stringify(base);
    const newObject = JSON.parse(list);
    console.log(newObject[2].name);
    const mainContent = document.querySelector('.box');
    
    const main = `
        <main >
            <aside class="">
                <ul class="list"></ul>
            </aside>
            <article class="block">
                <h2>Переменные и типы данных</h2>
                <p>
                    Переменная (variable) - это, по существу, именованное значение, и, как подразумевает название, данное значение может изменяться в любое время. 
                </p>
                <h3>Динамическая типизация</h3>
                <p>JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной заранее. Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную для хранения данных различных типов:</p>
                <p>var foo = 42; // сейчас foo типа Number</p>
                <p>foo = "bar"; // а теперь foo типа String</p>
                <p>foo = true;  // foo становится типа Boolean</p>
                <h2>Типы данных</h2>
                <p>Стандарт ECMAScript определяет 9 типов:</p>
                <ul>
                    <li>
                        6 типов данных являющихся примитивами:
                        <p>1) Undefined (Неопределенный тип)  : typeof instance === "undefined"</p>
                        <p>2) Boolean (Булев, Логический тип) : typeof instance === "boolean"</p>
                        <p>3) Number (Число) : typeof instance === "number"</p>
                        <p>4) String (Строка) : typeof instance === "string"</p>
                        <p>5) BigInt  : typeof instance === "bigint"</p>
                        <p>6) Symbol (в ECMAScript 6)  : typeof instance === "symbol"</p>
                    </li>
                    <li>
                    Null (Null тип ) : typeof instance === "object". 
                    <p>Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов;</p>
                    </li>
                    <li>
                    Object (Объект) : typeof instance === "object".
                    <p>Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова new: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date и множество других структур;</p>
                    </li>
                    <li>
                    и Function : typeof instance === "function". 
                    <p>Специальный случай, упрощающий определение типа для Функций, несмотря на то, что все функции конструктивно унаследованы от Object.</p>
                    </li>
                </ul>
                <p>И здесь нам необходимо сделать предостережение относительно использования оператора typeof для определения типа структур, т.к. все структуры будут возвращать "object" при его использовании, так как назначение typeof -- проверка типа данных, но не структур. Если проверить тип структуры всё же необходимо, то в этом случае желательно использовать оператор instanceof, так как именно он отвечает на вопрос о том, какой конструктор был использован для создания структуры.</p>
            </article>
            <article class="block">
                <h2>Условия</h2>

                <p>Инструкция if выполняет инструкцию, если указанное условие выполняется (истинно). Если условие не выполняется (ложно), то может быть выполнена другая инструкция.</p>
                <h4>Синтаксис</h4>
                <code>if (условие) {
                        <p>инструкция1</p> 
                    } else {
                        <p>инструкция2 }</p>
                </code>
                <h4>условие</h4>
                <p>Выражение, которое является либо истинным, либо ложным.</p>
                <h4>инструкция1</h4>
                <p>Инструкция, выполняемая в случае, если значение "условиe" истинно (true). Может быть любой инструкцией в том числе и вложенным if. Для группировки нескольких инструкций используется блок ({...}), Когда никакого действия не требуется, может использоваться пустая инструкция.</p>
                <h4>инструкция2</h4>
                <p>Инструкция, выполняемая в случае, если значение "условиe" ложно (false). Может быть любой инструкцией, в том числе и вложенным if. Инструкции тоже  можно группировать в блок.</p>
            </article>
            <article class="block">
                <h2>Циклы</h2>
                <p>Выражение for создаёт цикл, состоящий из 3 необязательных выражений в круглых скобках, разделённых точками с запятой.</p>
                <h4>Синтаксис</h4>
                <p>for ([инициализация]; [условие]; [финальное выражение])выражение</p>
                <h4>инициализация</h4>
                <p>Выражение (в том числе выражения присвоения) или определение переменных. Обычно используется, чтобы инициализировать счётчик. Это выражение может опционально объявлять новые переменные с помощью ключевого слова var. Эти переменные видимы не только в цикле, т.е. в той же области области видимости, что и цикл for. Результат этого выражения отбрасывается.</p>
                <h4>условие</h4>
                <p>Выражение, выполняющееся на каждой интерации цикла. Если выражение истинно, цикл выполняется. Условие не является обязательным. Если его нет, условие всегда считается истиной. Если выражение ложно, выполнение переходит к первому выражению, следующему за for.</p>
                <h4>финальное выражение</h4>
                <p>Выражение, выполняющееся в конце интерации цикла. Происходит до следующего выполнения условия. Обычно используется для обновления или увеличения переменной счётчика.</p>
                <h4>выражение</h4>
                <p>Выражение, которое выполняется, когда условие цикла истинно. Чтоб выполнить множество выражений в цикле, используйте блок ({ ... }) для группировки этих выражений. Чтобы не выполнять никакого выражения в цикле, используйте пустое выражение (;).</p>
            </article>
            <article class="block">
                <h2>Функции</h2>
                <p>Функции - ключевая концепция в JavaScript. Важнейшей особенностью языка является первоклассная поддержка функций​ (functions as first-class citizen). Любая функция это объект, и следовательно ею можно манипулировать как объектом, в частности:</p>
                <ul>
                    <li>передавать как аргумент и возвращать в качестве результата при вызове других функций (функций высшего порядка);</li>
                    <li>создавать анонимно и присваивать в качестве значений переменных или свойств объектов.</li>  
                </ul>
                <p>Функция в JavaScript специальный тип объектов, позволяющий формализовать средствами языка определённую логику поведения и обработки данных.</p>
            </article>
            <article class="block">
                <h2>Масивы</h2>
                <p>Массивы - одно из моих самых любимых средств языка JavaScript. Очень многие
                задачи программирования подразумевают манипулирование коллекциями данных,
                и свободное владение методами обработки массивов в JavaScript существенно облегчает это. 
                </p>
                <h4>Создание массива</h4>
                <code>
                var fruits = ['Яблоко', 'Банан'];  
                <p>console.log(fruits.length); // 2</p>     
                </code>
                <h4>Доступ к элементу массива по индексу</h4>
                <code>
                var first = fruits[0]; // Яблоко
                <p>var last = fruits[fruits.length - 1]; // Банан</p>
                </code>
                <h4></h4>
            </article>
            <article class="block">
                <h2>Объекты</h2>
                <p>Как и массивы, объекты в JavaScript - это контейнеры, которые называют агрегатными или комплексными типами данных. У объектов есть два основных отличия от массивов. </p>
                <ul>
                    <li>Массивы содержат значения, индексированные в числовой форме; объекты содержат свойства, индексированные строкой или символом. </li>
                    <li> Массивы упорядочены (элемент arr [0] всегда следует перед arr [ 1] ); объекты
                    не упорядочены (вы не можете гарантировать, что свойство obj.а расположено перед obj.b).</li>
                </ul>
                <h3>Перебор свойств</h3>
                <h4>Цикп for ... in </h4>
                <p>Традиционным способом перебора свойств объекта является цикл for ... in. </p>
                <p>const SYM = Symbol();</p>
                <p>const о = {а: 1, b: 2 , с: 3, [SYM] : 4 };</p>
                <code>
                    for ( let prop in о) {
                        <p>if(!o.hasOwnProperty(prop)) continue ;}</p>
                </code>
                <h4>hasOwnProperty()</h4>
                <p>Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.</p>
                <h4>Синтаксис</h4>
                <p>obj.hasOwnProperty(prop)</p>
                <h3>Параметры</h3>
                <h4>prop</h4>
                <p>Имя проверяемого свойства.</p>
                <h4>Описание</h4>
                <p>Каждый объект, произошедший от Object, наследует метод hasOwnProperty. Этот метод может использоваться для определения того, содержит ли объект указанное свойство в качестве собственного свойства объекта; в отличие от оператора in, этот метод не проверяет существование свойств в цепочке прототипов объекта.</p>
                <h3>Object.keys()</h3>
                <p>Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).</p>
                <h4>Синтаксис</h4>
                <p>Object.keys(obj)</p>
                <h3>Параметры</h3>
                <h4>obj</h4>
                <p>Объект, чьи собственные перечисляемые свойства будут возвращены.</p>
                <h3>Описание</h3>
                <p>Метод Object.keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте. Порядок свойств такой же, как и при ручном перечислении свойств в объекте через цикл.</p>
            </article>
            <article class="block">
                <h2>JSON</h2>
                <h3>JSON.parse()</h3>
                <p>Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.</p>
                <h4>Синтаксис</h4>
                <p>JSON.parse(text[, reviver])</p>
                <h4>text</h4>
                <p>Разбираемая строка JSON. Смотрите документацию по объекту JSON для описания синтаксиса JSON.</p>
                <h4>reviver (Необязательный)</h4>
                <p>Если параметр является функцией, определяет преобразование полученного в процессе разбора значения, прежде, чем оно будет возвращено вызывающей стороне.</p>
                <h4>Возвращаемое значение</h4>
                <p>Возвращает объект Object, соответствующий переданной строке JSON text.</p>
                <h4>Выбрасываемые исключения</h4>
                <p>Выбрасывает исключение SyntaxError, если разбираемая строка не является правильным JSON.</p>
                <h3>Примеры</h3>
                <p>JSON.parse('{}'); // {}</p>
                <p>JSON.parse('true'); // true</p>
                <p>JSON.parse('"foo"'); // "foo"</p>
                <p>JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]</p>
                <p>JSON.parse('null');  // null</p>
                <h3>JSON.stringify()</h3>
                <p>Метод JSON.stringify() преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.</p>
                <h4>Синтаксис</h4>
                <p>JSON.stringify(value[, replacer[, space]])</p>
                <h3>Параметры</h3>
                <h4>value</h4>
                <p>Значение, преобразуемое в строку JSON.</p>
                <h4>replacer (Необязательный)</h4>
                <p>Если является функцией, преобразует значения и свойства по ходу их преобразования в строку; если является массивом, определяет набор свойств, включаемых в объект в окончательной строке.
                Подробное описание функции replacer даётся в статье Использование родного объекта JSON руководства по JavaScript.</p>
                <h4>space (Необязательный)</h4>
                <p>Делает результат красиво отформатированным (расставляя пробелы).</p>  
            </article> 
        </main>
    `;
    mainContent.insertAdjacentHTML('beforeend', main);

    newObject.forEach(element => {
        const ul = document.querySelector('.list');
        const item = `<li class="list__item btn-warning">${element.name}</li>`;
        ul.insertAdjacentHTML('beforeend', item);
        
    });
    const button = document.querySelectorAll('.list__item');
    const block = document.querySelectorAll('.block');
    const deactivation = () => {
        button.forEach(item => {item.classList.remove('active')});
        block.forEach(item => {item.classList.remove('active')}); 
    };
    button.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            deactivation();
            btn.classList.add('active');
            block[i].classList.add('active');
        });
    });
};
export default main;