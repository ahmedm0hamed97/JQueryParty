
$(document).ready(function () {
  $(".loader").fadeOut(3000, function () {
    $('.loaderBox').remove();
    $("body").css("overflow", "visible");
  });
});

const navWidth = $("#home nav").outerWidth();
$("#home nav").css({ left: -navWidth });

$('#openNavBar').click(function(){
  $('#home nav').animate({left :'0'},1000)
  // $('')
})

$('#closeNavBar').click(function(){
  // console.log('ahmed');
  $('#home nav').animate({left : -navWidth},1000)
})



$('.item h3').click(function(){
  let currentP= $(this).siblings()[0];
  let currentPHeight=$(this).innerHeight(false);
  // console.log(currentP);
  if($(currentP).css("margin-bottom") == "0px"){
    $(currentP).css("margin-bottom", currentPHeight);
    $('.item p').not(currentP).slideUp(500)
  }else{
    $(currentP).css("margin-bottom", "0");
  }

  $(this).siblings().slideToggle();
})


// duration

const targetDate = new Date("2024-05-28T00:00:00").getTime();
// console.log(targetDate); //1716843600000

(function updateTime() {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  $("#days").text(formatTime(days));
  $("#hours").text(formatTime(hours));
  $("#minutes").text(formatTime(minutes));
  $("#seconds").text(formatTime(seconds));

  setTimeout(updateTime, 1000);
})();
// two digit 00
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// updateTime()



// contact characters length

$("#message").keyup(function () {
  const messageLength = this.value.length;
  const count = 100 - messageLength;
  $('#characters').text(`${count} characters`);

  if(count == 0){
    $('#characters').text("your available character finished");
    $('#characters').css("color" , "red");
    // console.log('ahmed');
    // $('#characters').remove();
  }else{
    $('#characters').text(`${count} characters`);
    $('#characters').css("color" , "#31D2F2");

  }
});