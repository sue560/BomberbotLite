$(document).ready(function () {
  var count=0;
  $('#turn-right-button').click(function () {
    count++;
    $('.numberClicksTurn').text(count);
  });

// record total steps
    // function countSteps() {
      var steps=0;
    //   console.log('clicked');
    //   steps++;
    //   $('#number').text(steps);
    // };

//key up functions
  $(document).on("keyup", function(e) {
    // up arrow
    if (e.keyCode == 38) {
      $('#movebot').animate({
      "top": "-=110px"
    }, "slow");
      steps++;
      $('#number').text(steps);
      var yPos = $("#movebot").position().top;
      if (yPos < 100) {
        $('#movebot').stop(true);
      }
    }

    // down arrow
    if (e.keyCode == 40) {
      $('#movebot').animate({
      "top": "+=110px"
    }, "slow");
      steps++;
      $('#number').text(steps);
      var yPos = $("#movebot").position().top;
      if (yPos > 400) {
      $('#movebot').stop(true);
      }
    }

     // left arrow
    if (e.keyCode == 37) {
      $('#movebot').animate({
      "left": "-=120px"
    }, "slow");
      steps++;
      $('#number').text(steps);
      var xPos = $("#movebot").position().left;
      console.log(xPos);
      if (xPos < 400) {
      $('#movebot').stop(true);
      }
    }

     // right arrow
    if (e.keyCode == 39) {
      $('#movebot').animate({
      "left": "+=120px"
    }, "slow");
      steps++;
      $('#number').text(steps);
      var xPos = $("#movebot").position().left;
      console.log(xPos);
      if (xPos > 828) {
      $('#movebot').stop(true);
      }
    }
  });

//click functions
  $('#up').click(function () {
    $('#movebot').animate({
      "top": "-=110px"
    }, "slow");
    steps++;
    $('#number').text(steps);
    var yPos = $("#movebot").position().top;
      if (yPos < 100) {
        $('#movebot').stop(true);
      }
  });

  $('#down').click(function () {
    $('#movebot').animate({
      "top": "+=110px"
    }, "slow");
    steps++;
    $('#number').text(steps);
     var yPos = $("#movebot").position().top;
      if (yPos > 400) {
      $('#movebot').stop(true);
    }
  });

  $('#left').click(function () {
     $('#movebot').animate({
      "left": "-=125px"
    }, "slow");
    steps++;
    $('#number').text(steps);
    var xPos = $("#movebot").position().left;
      console.log(xPos);
      if (xPos < 400) {
      $('#movebot').stop(true);
      }
  });

  $('#right').click(function () {
    $('#movebot').animate({
      "left": "+=125px"
    }, "slow");
    steps++;
    $('#number').text(steps);
    var xPos = $("#movebot").position().left;
      console.log(xPos);
      if (xPos > 828) {
      $('#movebot').stop(true);
    }
  });
  $('#move-forward-button').click(function() {
        $('.walk-forward').toggleClass('active'), 
        $('.text-editor').append("<p>Walk 1 Step Forward</p>");
    });
    
    $('#turn-right-button').click(function() {
        $('.rotate-right').toggleClass('active');
        $(".text-editor2").append("<p>Rotate Right</p>");
       });
  });
;
//document ready





