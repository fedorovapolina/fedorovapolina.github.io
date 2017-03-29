/*Incoming data*/
var cities={
    "1": {"country": 1, "name": "Ukraine"},
    "2": {"country": 3, "name": "Paris"},
    "3": {"country": 4, "name": "Madrid"},
    "4": {"country": 6, "name": "Houston"},
    "5": {"country": 7, "name": "Montreal"},
    "6": {"country": 8, "name": "Кишинев"},
    "7": {"country": 9, "name": "Minsk"},
    "8": {"country": 10, "name": "Warsaw"},
    "100": {"country": 1, "name": "Львов"},
    "101": {"country": 1, "name": "Николаев"},
    "103": {"country": 1, "name": "Переяслав-Хмельницкий"},
    "104": {"country": 1, "name": "Каменец-Подольский"},
    "105": {"country": 1, "name": "Donetsk"},
    "106": {"country": 1, "name": "Kharkov"},
    "107": {"country": 1, "name": "Луцк"},
    "108": {"country": 1, "name": "Poltava"},
    "109": {"country": 1, "name": "Черновцы"},
    "299": {"country": 1, "name": "Чернигов"},
    "333": {"country": 1, "name": "Чернигов"}
};

var countries={
    "1": "Ukraine",
    "2": "Germany",
    "3": "France",
    "4": "Spain",
    "5": "Sweden",
    "6": "USA",
    "7": "Canada",
    "8": "Moldova",
    "9": "Belarus",
    "10": "Poland"
};

/*Initiation*/

var user={
    "name":"",
    "email":"",
    "country":"",
    "city":"",
    "social":[],
    "image":""
};

/*general*/
var innerwrap=$(".innerwrap");

/*var template=function () {

     innerwrap.prepend("<div class=\"sections header\"> \
         <button class=\"header__button header__button1\">1</button>\
         <button class=\"header__button header__button2\">2</button> \
         <button class=\"header__button header__button3\">3</button>    \
         <button class=\"header__button header__button4\">4</button>    \
         <p class=\"header__text\">1. Введите имя и e-mail</p>\
         </div>");
     innerwrap.append("<form action=\"\">" +
         "<div class=\"sections content\">    " +
         "<input type=\"text\" class=\"content__input content__name\" placeholder=\"Имя\"> <br>    " +
         "<input type=\"text\" class=\"content__input content__email\" placeholder=\"E-mail\">   " +
         "</div>  <div class=\"sections switch\">    <button class=\"switch__button switch__prev\">Предыдущий</button>    <button class=\"switch__button switch__next\">Следующий</button>    </div>    </form>");
};

window.onload=template;*/

/*STEP1*/
var content=$('.content');
content.addClass("qwerty");

$(".switch__next").on("click", function () {
    var content=$('.content');
    content.text("qwerty");
    console.log("qwerty");
});


/*STEP2*/




/*STEP3*/



/*STEP4*/
