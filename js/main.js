$(document).ready(function(){

    var checkValue = function () {
        var value = $("input[type=text]").val();
        if(value == '') {
            return false;
        }
        /* clear input */
        $("input[type=text]").val('');

        /* ajax */
        $.ajax ({
            url:"http://api.openweathermap.org/data/2.5/weather?" +
            "appid=1ec052023c49e1517c1f91424d764b7f&units=metric",
            method: "get",
            data: {q:value},
            dataType: 'json',
            success: function(data){
                var result = $('<li />').appendTo('.weather-wrapper ul');
                result.html('- ' + '<span>' + data.name + '</span>' + '&#44;' + ' '+ data.sys.country + ': '
                    + data.main.temp + '&#8451;' + '&#44;' + ' '
                    + data.weather[0].description);
            }
        });
        /* clear city list */
        $(".clear").on("click", function(){
            $('.weather-wrapper ul').find("li").remove();
        });
    };

    /* Enter button */
    $("input").keypress(function(event) {
        if (event.which == 13) checkValue();
    });

    /* add */
    $('input[type=submit]').click(checkValue);

});

