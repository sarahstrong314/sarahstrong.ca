$(document).ready(function() {
  $("#content").addClass($("#content > div").attr('id'));

  $("nav li h3").click(function(ev) {
    var $li = $(ev.target).closest("li");

    if ($li.find("ul").is(":visible")) {
      $li.find("ul").slideUp('fast');
    } else {
      $("nav li").not($li).find("ul").slideUp('fast');
      $li.find("ul").slideDown('fast');
    }
  });

  var path = document.location.pathname.replace('.html', '');
  $("nav").find("a[href='" + path + "']").closest("ul").show();
});
