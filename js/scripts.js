$(document).ready(function() {
  $("#formOne").submit(function(event){
    var animal = $("input#animal").val();
    console.log(animal);
    if (animal === "turtle") {
      $("#turtle").show();
      $("#result").html("Turtle has been selected!");
    }
    else if(animal === "snake") {
      $("#snake").show();
      $("#result").text("Snake has been selected!");
    }
    else {
      $("#insect").show();
      $("#result").text("Insect has been selected!");
    }
    event.preventDefault();
  });

});

//var animal = $("input:radio[name=animal]:checked").val();
