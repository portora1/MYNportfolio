// main.js

$(function() {
  $('#menubar_hdr').click(function() {
    $('#menubar').slideToggle();
  });
});

  // ページトップに戻る
  $('.pagetop a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500);
  });
});