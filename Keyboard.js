var keyboard = {
87:"W",
83:"S",
65:"A",
68:"D",
32:"пробел",
16:"shift",
13:"inter",
37:"Лево",
39:"Право",
38:"Вверх",
40:"Вниз",

};
$ ("body").keydown(function (event) {
    console.log (keyboard[event.keyCode]);
});