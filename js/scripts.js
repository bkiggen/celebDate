// Front End work

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = $('input[name=quest1]:checked').val();
    var drinks = parseInt($('input[name=drinks]').val());
    var q2 = (drinks) * 3;

    var q3a = getNum(parseInt($('input[name=quest3a]:checked').val()));
    var q3b = getNum(parseInt($('input[name=quest3b]:checked').val()));
    var q3c = getNum(parseInt($('input[name=quest3c]:checked').val()));
    var q3d = getNum(parseInt($('input[name=quest3d]:checked').val()));
    var q3 = q3a + q3b + q3c + q3d;
    var q4 = $('input[name=quest4]:checked').val();
    var gen = $('input[name=gen1]:checked').val();
    var score = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4);

    var process = function(){
      if(score <= 20){
        $("img, h6").hide();
        $(".low").show();
      } else if(score > 20 && score <= 50) {
        $("img, h6").hide();
        $(".medium").show();
      } else if (score > 50){
        $("img, h6").hide();
        $(".high").show();
      } else {
        alert("Please enter more information");
      };
    };


    if(gen === "male"){
      process();
      $(".women").hide();
    } else if (gen === "female") {
      process();
      $(".men").hide();
    } else if (gen === "any"){
      process();
    } else {
      alert("Please tell us what kind of celeb you want.");
    }
  });
});

// Back End work
function getNum(val) {
  if (isNaN(val)) {
    return 0;
  }
  return val;
}
