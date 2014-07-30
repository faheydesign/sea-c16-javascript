  $.ajax({
    url: "http://rs.hankyates.com:3000/content"
  }).done(function(data) {
    $.each(data, function(key, value){
      $("#" + value.name).empty().html("<p>" + value.content + "</p");
    });
  });

$('nav').on('click','a',openTab);

function openTab(e){
  e.preventDefault();
  var $this = $(this);
  var targ = $this.attr('href');
  $('div, nav a').removeClass('active');
  $(targ).toggleClass('active');
  $this.toggleClass('active');
}
