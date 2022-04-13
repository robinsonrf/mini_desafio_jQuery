$(document).ready(function(){

    //EJERCICIO 1
    $("#haz-click").click(function(){
        $("#caja-cambiame").width(450);
        $("#caja-cambiame").height(450);
        $("#caja-cambiame").css({
            'background': '#00ffff',
             'border': '3px',
            });
    });


    //EJERCICIO 2
    $("#menu").hide();
    $("button").click(function(){
        $("#menu").slideToggle();
    })

    
    //EJERCIO 3
    $('#mouse').mouseover(function () {
        $('ul li:even').css({ "font-size": "2rem", "color": "red"});
        $('ul li:odd').css({ "font-size": "2rem", "color": "green" });
    });

    $('#mouse').mouseleave(function () {
        $('ul li:even').css({ "font-size": "", "color": ""});
        $('ul li:odd').css({ "font-size": "", "color": "" });
    });


});



