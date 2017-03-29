/*Incoming data*/
var cities = {
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

var countries = {
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

var user = {
    "name": "",
    "email": "",
    "country": "",
    "city": "",
    "social": [],
    "image": ""
};

/*general*/
var innerwrap = $(".innerwrap");
var content1 = $(".content1");
var content2 = $(".content2");
var content3 = $(".content3");
var content4 = $(".content4");

var template = function () {
    /*content1.hide();*/
    content2.hide();
    content3.hide();
    content4.hide();
    /*console.log(window.innerHeight);*/
    /*
     innerwrap.prepend("<div class=\"sections header\"><button class=\"header__button header__button1\">1</button>    <button class=\"header__button header__button2\">2</button>    <button class=\"header__button header__button3\">3</button>    <button class=\"header__button header__button4\">4</button>    <p class=\"header__text\">1. Введите имя и e-mail</p></div>");
     innerwrap.append("<form action=\"\"><div class=\"sections content\">    <input type=\"text\" class=\"content__input content__name\" placeholder=\"Имя\"> <br>    <input type=\"text\" class=\"content__input content__email\" placeholder=\"E-mail\">    </div>    <div class=\"sections switch\">    <button class=\"switch__button switch__prev\">Предыдущий</button>    <button class=\"switch__button switch__next\">Следующий</button>    </div>    </form>");
     */
};

window.onload = template;

if (window.innerHeight < 440) {
    innerwrap.css("display", "block");
    $('.wrapper').css('height', 'auto');
}




/*------STEP1--------*/



var switchCounter = 1;
var headerText=$("p.header__text");
/*content1.show();*/


$('.switch__prev').on('click', function () {
    /*if (switchCounter == 1) {
     return false;
     }*/
    switch (switchCounter) {
        case 1:
            return false;
            break;
        case 2:
            switchCounter--;
            console.log(switchCounter);
            headerText.text("1. Введите имя и e-mail");
            content1.show();
            content2.hide();
            content3.hide();
            content4.hide();
            return false;
            break;
        case 3:
            switchCounter--;
            console.log(switchCounter);
            headerText.text("2. Выберите страну и город");
            content1.hide();
            content2.show();
            content3.hide();
            content4.hide();
            return false;
            break;
        case 4:
            switchCounter--;
            console.log(switchCounter);
            headerText.text("3. Отметьте социальные сети");
            content1.hide();
            content2.hide();
            content3.show();
            content4.hide();
            return false;
    }
});

$(".switch__next").on("click", function () {
    switch (switchCounter) {
        case 1:
            switchCounter++;
            console.log(switchCounter);
            user.name=$('.content__name').val();
            user.email=$('.content__email').val();
            headerText.text("2. Выберите страну и город");
            content1.hide();
            content2.show();
            content3.hide();
            content4.hide();
            return false;
            break;
        case 2:
            switchCounter++;
            user.country=countries[contentCountry.val()];
            user.city=cities[$('.content__city').val()].name;
            headerText.text("3. Отметьте социальные сети");
            content1.hide();
            content2.hide();
            content3.show();
            content4.hide();
            return false;
            break;
        case 3: switchCounter++;
            /*user.social=;*/
            headerText.text("4. Выберите любимого котика");
            content1.hide();
            content2.hide();
            content3.hide();
            content4.show();
            return false;
            break;
        case 4:
            /*user.image=;*/
            return false;
    }
});


/*-----STEP2-------*/

var contentCountry = $('.content__country');
var contentCity = $('.content__city');

for (var i in countries) {
    contentCountry.append('<option class=\"content__option\" value=\"' + i + '\">' + countries[i] + '</option>');
}
/*var a=$('.content__country option:selected').val();
 console.log(a);*/

contentCountry.on('change', function () {
    var selectedCountry = contentCountry.val();
    contentCity.html("<option class=\"content__option\" value=\"\" disabled selected>Город</option>");

    for (var j in cities) {
        if (cities[j].country == selectedCountry) {
            contentCity.append('<option class=\"content__option\" value=\"' + j + '\">' + cities[j].name + '</option>');
        }
    }

});




/*------STEP3-----*/



/*------STEP4------*/



/*-------FINAL------*/

/*innerwrap.html(user.name + '  ' + user.email);*/
