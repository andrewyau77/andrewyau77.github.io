$(document).ready(function() {

  // Updating the year in the copyright
  var date = new Date(),
      year = date.getFullYear();

  $('.copy-date').html(year);

  // Nav Bar smooth scroll library init
  $('.nav-bar a').smoothScroll({
    offset: -140
  });

  // Handles Nav and Footer Transition Colors
  if ($(window).height() > 800) {
    $('.footer').removeClass('clear')
  }

  // On scroll
  $(window).scroll(function() {

    // Check if the top of window is past 625px for nav
    if($(window).scrollTop() > 625) {
      $('.nav-bar').removeClass('clear')
    } else {
      $('.nav-bar').addClass('clear')
    }

    // Check if the bottom of window is past 800 for footer
    if($(window).scrollTop() + $(window).height()  > 800) {
      $('.footer').removeClass('clear')
    } else {
      $('.footer').addClass('clear')
    }

  });

  // On scroll
  $(window).resize(function() {

    // Check if the bottom of window is past 800 for footer
    if($(window).scrollTop() + $(window).height()  > 800) {
      $('.footer').removeClass('clear')
    } else {
      $('.footer').addClass('clear')
    }

  });
});
