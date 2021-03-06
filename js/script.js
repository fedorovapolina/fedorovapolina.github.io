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

/*var user = {
 "name": "",
 "email": "",
 "country": "",
 "city": "",
 "social": [],
 "image": ""
 };*/

function User(name, email, country, city, social, image) {
    this.name = name;
    this.email = email;
    this.country = country;
    this.city = city;
    this.social = social;
    this.image = image;
}

function Social(title, page) {
    this.title = title;
    this.page = page;
}

var user = new User('', '', '', '', [], '');
/*general*/
var innerwrap = $(".innerwrap");
var content1 = $(".content1");
var content2 = $(".content2");
var content3 = $(".content3");
var content4 = $(".content4");
var final = $('.final');

var template = function () {
    button1.css('color', 'black');
    button2.css('color', '#bbbbbb');
    button3.css('color', '#bbbbbb');
    button4.css('color', '#bbbbbb');
    content1.show();
    content2.hide();
    content3.hide();
    content4.hide();
    final.hide();
    $('.wrapper').css('opacity', '1');
    button2.off();
    button3.off();
    button4.off();

    /*console.log(window.innerHeight);*/

};

window.onload = template;

if (window.innerHeight < 440 || window.innerWidth < 600 || screen.height < 440 || screen.width < 600) {
    innerwrap.css("display", "block");
    $('.wrapper').css('height', '100%').css('width', '100%');
}

/*windows changing*/

var switchCounter = 1;
var headerText = $("p.header__text");
/*content1.show();*/

var switchPrev = $('.switch__prev');
var switchNext = $(".switch__next");


var case1 = function () {
    headerText.text("1. Введите имя и e-mail");
    switchNext.css('color', '#ff9800').css('background-color', 'white').text('Следующий');
    button1.css('color', 'black');
    content1.show();
    content2.hide();
    content3.hide();
    content4.hide();
};
var case2 = function () {
    headerText.text("2. Выберите страну и город");
    switchNext.css('color', '#ff9800').css('background-color', 'white').text('Следующий');
    button2.css('color', 'black');
    content1.hide();
    content2.show();
    content3.hide();
    content4.hide();
};
var case3 = function () {
    headerText.text("3. Отметьте социальные сети");
    switchNext.css('color', '#ff9800').css('background-color', 'white').text('Следующий');
    button3.css('color', 'black');
    content1.hide();
    content2.hide();
    content3.show();
    content4.hide();
};
var case4 = function () {
    headerText.text("4. Выберите любимого котика");
    switchNext.css('color', 'white').css('background-color', '#ff9800').text('Завершить');
    button4.css('color', 'black');
    content1.hide();
    content2.hide();
    content3.hide();
    content4.show();
};


switchPrev.on('click', function () {
    switch (switchCounter) {
        case 1:
            return false;
            break;
        case 2:
            switchCounter--;
            case1();
            button2.css('color', '#ff9800');
            return false;
            break;
        case 3:
            switchCounter--;
            case2();
            button3.css('color', '#ff9800');
            return false;
            break;
        case 4:
            switchCounter--;
            case3();
            button4.css('color', '#ff9800');
            return false;
    }
});

switchNext.on("click", function () {
    switch (switchCounter) {
        case 1:
            try {
                if (nameTemp.test(contentName.val()) && emailTemp.test(contentEmail.val())) {
                    switchCounter++;
                    $('.content__name').css('box-shadow', 'none');
                    $('.content__email').css('box-shadow', 'none');
                    case2();
                    button2.on('click', button2Click);
                    button1.css('color', '#ff9800');
                    return false;
                    /*break;*/
                } else {
                    if (nameTemp.test(contentName.val()) == false) {
                        $('.content__name').css('box-shadow', '0 0 5px red');
                        return false;
                        /* break;*/
                    } else {
                        $('.content__name').css('box-shadow', 'none');
                    }
                    if (emailTemp.test(contentEmail.val()) == false) {
                        $('.content__email').css('box-shadow', '0 0 5px red');
                        return false;
                        /*break;*/
                    } else {
                        $('.content__email').css('box-shadow', 'none');
                    }
                }

            } catch (a) {
                console.log(a);
            }
            break;
        case 2:

            if (selCoun && selCity) {
                switchCounter++;
                case3();
                button2.css('color', '#ff9800');
                contentCountry.css('box-shadow', 'none');
                contentCity.css('box-shadow', 'none');
                button3.on('click',button3Click);
                /*console.log(selCoun + ' '+ selCity);*/
                return false;
            } else {
                if (selCoun == undefined) {
                    contentCountry.css('box-shadow', '0 0 5px red');
                    return false;
                } else {
                    contentCountry.css('box-shadow', 'none');

                }
                if (selCity == undefined) {
                    contentCity.css('box-shadow', '0 0 5px red');
                    return false;
                } else {
                    contentCity.css('box-shadow', 'none');

                }
            }

            break;
        case 3:
            switchCounter++;
            case4();
            button3.css('color', '#ff9800');
            button4.on('click', button4Click);
            return false;
            break;
        case 4:
            if (selectedImage && selectedImage.filter('.content__image-dog').length != 1) {
                $('.innerwrap').hide();


                user.name = contentName.val();
                user.email = contentEmail.val();
                try {
                    user.country = countries[contentCountry.val()];
                    user.city = cities[$('.content__city').val()].name;
                } catch (e) {
                }

                var par = $('.content__socialcheck:checked').parent();

                for (i = 0; i < par.length; i++) {
                    user.social[i] = new Social($(par[i]).text(), $(par[i]).siblings('input').val());
                    $('.final__social').append('<p class="final__social-item"><span class="final__social-title">' + user.social[i].title
                        + ': </span>' + user.social[i].page + '</p>');
                }


                $('.final__name').text(user.name);
                $('.final__email').text(user.email);
                $('.final__location').text(user.country + ', ' + user.city);


                $('.final__image').attr('src', src);


                final.show();
                return false;
            } else {
                return false;
            }
    }
});

/*1-4 buttons*/

var button1 = $('.header__button1'),
    button2 = $('.header__button2'),
    button3 = $('.header__button3'),
    button4 = $('.header__button4');


var button1Click = function () {
    button1.css('color', 'black');
    switchCounter = 1;
    case1();
    return false;
};
var button2Click = function () {
    button2.css('color', 'black');
    switchCounter = 2;
    case2();

    return false;
};
var button3Click = function () {
    button3.css('color', 'black');
    switchCounter = 3;
    case3();

    return false;
};
var button4Click = function () {
    button4.css('color', 'black');
    switchCounter = 4;
    case4();

    return false;
};


button1.on('click', button1Click);
/*
button2.on('click', button2Click);
button3.on('click', button3Click);
button4.on('click', button4Click);
*/


/*------STEP1--------*/


var nameTemp = /.+/;
var emailTemp = /.+@.+\..+/;
var contentName = $('.content__name');
var contentEmail = $('.content__email');
/*if (  == false ){
 switchNext.off();

 }*/



/*-----STEP2-------*/

var contentCountry = $('.content__country');
var contentCity = $('.content__city');

for (var i in countries) {
    contentCountry.append('<option class=\"content__option\" value=\"' + i + '\">' + countries[i] + '</option>');
}
var selCoun, selCity;
contentCountry.on('change', function () {
    var selectedCountry = contentCountry.val();
    selCoun = selectedCountry;
    contentCity.html("<option class=\"content__option\" value=\"\" disabled selected>Город</option>");

    for (var j in cities) {
        if (cities[j].country == selectedCountry) {
            contentCity.append('<option class=\"content__option\" value=\"' + j + '\">' + cities[j].name + '</option>');
        }
    }
    contentCountry.css('box-shadow', 'none');
});

contentCity.on('change', function () {
    selCity = contentCity.val();
    contentCity.css('box-shadow', 'none');
});


/*------STEP3-----*/

var inputSocialMas = [];
var socialCheck = $('.content__socialcheck');
socialCheck.on('change', function (e) {
    var inputSocial = $(e.target).parent().siblings();
    inputSocial.toggle();
    inputSocial.css('box-shadow', 'none');
    /*inputSocialMas.push(inputSocial);
     console.log(inputSocialMas);*/
});


/*------STEP4------*/

/*var dog = $('.content__image-dog');*/
var contentDog = $('.content__dog');
contentDog.css('visibility','hidden');
var src = '';
var contentImages = $('.content__images');
var selectedImage;
contentImages.on('click', function (e) {
    selectedImage = $(e.target);

    contentImages.css('border', 'none');
    selectedImage.css('border', '3px solid #ff9800');

    if (selectedImage.filter('.content__image-dog').length == 1) {
        contentDog.css('visibility','visible');
    } else {
        contentDog.css('visibility','hidden');
        /*user.image*/
        src = selectedImage.attr('src');

    }
    /**/
});

/*-------FINAL------*/

var finalReset = $('.final__reset');
finalReset.on('click', function () {
    switchCounter = 1;
    template();
    /*selectedImage=undefined;*/
    user = new User('', '', '', '', [], '');
    $('.innerwrap').css('display', 'flex');
    $('.content__socialtext').hide();
    $('.content__images').css('border', 'none');
    switchNext.css('color', '#ff9800').css('background-color', 'white').text('Следующий');
    headerText.text('1. Введите имя и e-mail');
});