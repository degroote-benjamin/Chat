var robot = ["bonjour","++","bonjour","ca va?","il fait chaud"]
var compt = 0


$(document).ready(function(){

    $('.submit').on('click',function(){
      if(compt === robot.length-1){
        compt=0
      }
      $('.reponse').scrollTop = $('.reponse').scrollHeight;
       $('.reponse').append('<p class="text-right">'+$(".pseudo").val() +': '+$(".texte").val() +'</p>')
       setTimeout(function () {
       $('.reponse').append('<p class="text-left">'+"robot : " + robot[compt] +'</p>')
  }, 1000);
       compt++
    });

});
