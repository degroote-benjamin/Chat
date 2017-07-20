var robot = ["bonjour", "++", "bonjour", "ca va?", "il fait chaud"]
var compt = 0


    $('.submit').on('click', function() {
chat()
$(".texte").focus()
    });


$(".texte").keypress(function(e) {
    if(e.which == 13) {
chat()
}
  });


function chat(){
    if (compt === robot.length - 1) {
        compt = 0
    }
    $('.reponse').append('<p class="text-right">' + $(".pseudo").val() + ': ' + $(".texte").val() + '</p>')
    $(".reponse").scrollTop($(".reponse").height() + 1000000)
    setTimeout(function() {
        $('.reponse').append('<p class="text-left">' + "robot : " + robot[compt] + '</p>')
        $(".reponse").scrollTop($(".reponse").height() + 1000000)
    }, 1000);
    $(".texte").val("")
    compt++
}
