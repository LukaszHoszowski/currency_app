# Currency app

## The story of asynchronous technic in js

1. Callback - callback hell
2. Promise(Future w pythonie) -
3. Generatory
4. Async/Await

## Dictionary

- AJAX - asynchronous javascript and xml
- SPA - Single page application

## REST api (alternative GraphQL)

- CRUD

|  CRUD   |  SQL   |   REST    |
| :-----: | :----: | :-------: |
| create  | INSERT |   POST    |
|  ready  | SELECT |    GET    |
| upgrade | UPDATE | PUT/PATCH |
| delete  | DELETE |  DELETE   |

- endpoint

1. GET -> domain/books - wiele ksiazek
2. GET -> domain/books/<id> - konkretna ksiazka
3. POST -> domain/books
4. PUT/PATCH -> domain/books/<id>
5. DELETE - domain/books/<id>

- users

1. GET -> /users
2. GET -> /users/<id>
3. POST -> /users
4. PUT/PATCH -> /users/<id>
5. DELETE -> /users/<id>

<!-- /users/<id>/products/<id> -->

## HTTP
- status code
- headers
- body

```
https://www.maps.google.com/city?elo=xd&yolo=2
```

1. https:// -> protocol (ftp, ssh, pop3, smtp, imap, ws)
2. www -> type (file, pdf)
3. maps -> subdomain
4. google -> domain
5. com -> domain family (eu, tv - tuval)
6. city - endpoint/source
7. ? -> start parameters (fbclid)
8. elo=xd - param, key value
9. & - param separator

btoa() -> konwertowanie do base64
atob() -> konwertowanie z base64

Axios - client do robienia requestow

---------------------------------------------------------------------------
## Variables

        Scope       Reinicialization    Redeclaration   Hoisting

VAR Func Y Y Y

LET Block Y X X

Const Block X X X

Hoisting - zmienne VAR, funkcje, classy

Funkcje

Named Annonymous
Function name (param) {body return} function (param) {body return}

Dzialanie funkcjo zalezne od kontekstu

fn arrow
Explicite return
() => {return 1}
Implicite return
x => x _ 2 (ukyty return)
(x, y) => x _ y

const d = () => ({"ala": 2}) uzyc okraglych nawiasow aby uzyskac implicite return

Call stack FILO
queue FIFO

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


enctype="multipart/form-data" - wysylanie zdjec, zdjecie za duze zeby wyslac w jednej ramce, serwer musi wiedziec ze ma czekac na pozostale ramki


moment js do obslugi data
