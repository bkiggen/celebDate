$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = $('input[name=quest1]:checked').val();
    var q2 = $('input[name=quest2]:checked').val();
    var q3 = $('input[name=quest3]:checked').val();
    var q4 = $('input[name=quest4]:checked').val();
    var gen = $('input[name=gen1]:checked').val();
    var score = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4);
    console.log(score);

    if(score <= 20){
      $("img, h6").hide();
      $(".low").show();
    } else if(score > 20 && score <= 50) {
      $("img, h6").hide();
      $(".medium").show();
    } else {
      $("img, h6").hide();
      $(".high").show();
    }

    if(gen === "male"){
      $(".women").hide();
    } else {
      $(".men").hide();
    }
  });
});
