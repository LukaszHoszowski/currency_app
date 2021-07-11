# Currency app


## The story  of asynchronous technic in js
1. Callback - callback hell
2. Promise(Future w pythonie) - 
3. Generatory
4. Async/Await

## Dictionary
- AJAX - asynchronous javascript and xml
- SPA - Single page application

## Variables
        Scope       Reinicialization    Redeclaration   Hoisting

VAR     Func        Y                   Y               Y

LET     Block       Y                   X               X

Const   Block       X                   X               X

Hoisting - zmienne VAR, funkcje, classy

Funkcje

Named                                   Annonymous
Function name (param) {body return}     function (param) {body return}

Dzialanie funkcjo zalezne od kontekstu

fn arrow
Explicite return
() => {return 1}
Implicite return
x => x * 2 (ukyty return)
(x, y) => x * y

const d = () => ({"ala": 2}) uzyc okraglych nawiasow aby uzyskac implicite return

Call stack  FILO
queue       FIFO

deque w pythonie - kolejka dwustronna

Event loop - petla zdarzen, przenoszenie zdarzen z MicroTask queue i Callback queue do call stacka

Event loop ifs gora -> if callstack empty, if global context empty
dol -> if micro task queue, if callback queue empty

Call stack obslugiwany przez interpreter, petla zdarzen sprawdza czy moze przerzucac na call stack asynchroniczne zadania -> Subscriber observer

Async:

Callback
Promise -> ES6
Generator -> ES7
Async/Await -> ES7

Promise (jest funkcjonalnosc w jezyku pozwalajaca obslugiwac async) - zwraca obiekt od razu, jesli sie uda to resolve()->.then()|reject().catch(), 