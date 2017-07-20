var robot = ["bonjour", "++", "bonjour", "ca va?", "il fait chaud"]
var compt = 0


$(document).ready(function() {

    $('.submit').on('click', function() {
        if (compt === robot.length - 1) {
            compt = 0
        }
        $('.reponse').append('<p class="text-right">' + $(".pseudo").val() + ': ' + $(".texte").val() + '</p>')
        $(".reponse").scrollTop($(".reponse").height() + 1000000)
        setTimeout(function() {
            $('.reponse').append('<p class="text-left">' + "robot : " + robot[compt] + '</p>')
            $(".reponse").scrollTop($(".reponse").height() + 1000000)
        }, 1000);
        compt++
    });

});
