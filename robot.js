$(document).ready(function () {
  
  var count=0;

  // display and record times clicked (turn right)
  $('#turn-right-button').click(function () {
    count++;
    $('.numberClicksTurn').text(count);
  });

  // display and record times clicked (move forward)
  $('#move-forward-button').click(function () {
      count++;
      $('.numberClicks').text(count);
      $('.text-editor').append("<p>Walk 1 Step Forward</p>");
  });

  // animates robot for number of times clicked
  $('.play').click(function () {
    animateRobot(count);
  });

// repeat the move
    function animateRobot(count) {
    console.log("Count: " + count);
    if (count === 0) {
      console.log("Returning!");
      return
    }
    $('.walk-forward').addClass('active');
    $('.walk-forward').on('animationend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
      var robotWalk = $('.walk-forward').clone().removeClass('active');
      $('.walk-forward').remove();
      $('.robot').prepend(robotWalk);
      // $('.walk-forward').addClass('active');
      console.log("Finished animation!");
      // $('.walk-forward').removeClass('active');
      animateRobot(count-1);
    });
    $('.rotate-right').addClass('active');
  }

// LEVEL #1 

// record total steps
  var steps=0;

//key up functions
  $(document).on("keyup", function(e) {

    //detect if Bomberbot reaches object
    var xPos = $("#movebot").position().left;
    console.log(xPos);
    var yPos = $("#movebot").position().top;
    console.log(yPos);

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
      console.log(yPos);
      if (yPos > 400) {
      $('#movebot').stop(true);
      }
        if ((xPos > 700) && (yPos > 400)) {
        $('#burgerbox').css('background-image', 'none');
        alert('you won!');
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
});






