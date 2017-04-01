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
var final = $('.final');

var template = function () {
    button1.css('color','black');
    button2.css('color','#bbbbbb');
    button3.css('color','#bbbbbb');
    button4.css('color','#bbbbbb');
    content1.show();
    content2.hide();
    content3.hide();
    content4.hide();
    final.hide();
    /*console.log(window.innerHeight);*/

};

window.onload = template;

if (window.innerHeight < 440) {
    innerwrap.css("display", "block");
    $('.wrapper').css('height', 'auto');
}

/*windows changing*/

var switchCounter = 1;
var headerText = $("p.header__text");
/*content1.show();*/

var switchPrev=$('.switch__prev');
var switchNext=$(".switch__next");


var case1 = function () {
    headerText.text("1. Введите имя и e-mail");
    switchNext.css('color', '#ff9800').css('background-color', 'white').text('Следующий');
    button1.css('color','black');
    content1.show();
    content2.hide();
    content3.hide();
    content4.hide();
};
var case2 = function () {
    headerText.text("2. Выберите страну и город");
    switchNext.css('color', '#ff9800').css('background-color', 'white').text('Следующий');
    button2.css('color','black');
    content1.hide();
    content2.show();
    content3.hide();
    content4.hide();
};
var case3 = function () {
    headerText.text("3. Отметьте социальные сети");
    switchNext.css('color', '#ff9800').css('background-color', 'white').text('Следующий');
    button3.css('color','black');
    content1.hide();
    content2.hide();
    content3.show();
    content4.hide();
};
var case4 = function () {
    headerText.text("4. Выберите любимого котика");
    switchNext.css('color', 'white').css('background-color', '#ff9800').text('Завершить');
    button4.css('color','black');
    content1.hide();
    content2.hide();
    content3.hide();
    content4.show();
};



switchPrev.on('click', function () {
    /*if (switchCounter == 1) {
     return false;
     }*/
    switch (switchCounter) {
        case 1:
            return false;
            break;
        case 2:
            switchCounter--;
            case1();
            button2.css('color','#ff9800');
            return false;
            break;
        case 3:
            switchCounter--;
            case2();
            button3.css('color','#ff9800');
            return false;
            break;
        case 4:
            switchCounter--;
            case3();
            button4.css('color','#ff9800');
            return false;
    }
});

switchNext.on("click", function () {
    switch (switchCounter) {
        case 1:
            switchCounter++;
            case2();
            button1.css('color','#ff9800');
            return false;
            break;
        case 2:
            switchCounter++;
            case3();
            button2.css('color','#ff9800');
            return false;
            break;
        case 3:
            switchCounter++;
            case4();
            button3.css('color','#ff9800');
            return false;
            break;
        case 4:
            $('.innerwrap').hide();
            user.name = contentName.val();
            user.email = contentEmail.val();
            try {
                user.country = countries[contentCountry.val()];
                user.city = cities[$('.content__city').val()].name;
            } catch (e) {
            }
            /*user.social=;*/
            $('.final__name').text(user.name);
            $('.final__email').text(user.email);
            $('.final__location').text(user.country + ', ' + user.city);


            final.show();
            return false;
    }
});

/*1-4 buttons*/

var button1=$('.header__button1'),
    button2=$('.header__button2'),
    button3=$('.header__button3'),
    button4=$('.header__button4');

button1.on('click', function () {
    button1.css('color','black');
    switchCounter=1;
    case1();
    return false;
});

button2.on('click', function () {
    button2.css('color','black');
    switchCounter=2;
    case2();

    return false;
});

button3.on('click', function () {
    button3.css('color','black');
    switchCounter=3;
    case3();

    return false;
});

button4.on('click', function () {
    button4.css('color','black');
    switchCounter=4;
    case4();

    return false;
});


/*------STEP1--------*/



var nameTemp = /.+/;
var emailTemp = /.+@.+\..+/;
var contentName = $('.content__name');
var contentEmail = $('.content__email');
/*if ( nameTemp.test(contentName.val()) && emailTemp.test(contentEmail.val()) == false ){
    switchNext.off();

}*/



/*-----STEP2-------*/

var contentCountry = $('.content__country');
var contentCity = $('.content__city');

for (var i in countries) {
    contentCountry.append('<option class=\"content__option\" value=\"' + i + '\">' + countries[i] + '</option>');
}

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


var socialCheck = $('.content__socialcheck');
socialCheck.on('change', function (e) {
    console.log();
    $(e.target).parent().siblings().toggle();
});


/*------STEP4------*/

var contentImages = $('.content__images');


/*-------FINAL------*/

var finalReset=$('.final__reset');
finalReset.on('click', function () {
    switchCounter=1;
    template();
    $('.innerwrap').css('display', 'block');
    switchNext.css('color', '#ff9800').css('background-color', 'white').text('Следующий');
    headerText.text('1. Введите имя и e-mail');
});