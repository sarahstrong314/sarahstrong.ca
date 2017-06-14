$(document).ready(function() {
  $("#content").addClass($("#content > div").attr('id'));

  // Switching sub-views of algorithms.
  $(".tabs li").click(function(ev) {
    var $li = $(ev.target).closest("li");
    var $activeTab = $(".tabs li.active")
    var $prependTitle = $(".prepend-title");
    var $activeSection, $newSection, $newTitle, newHash;

    // Don't switch between tabs if the user clicked the current tab.
    if ($li !== $activeTab) {
      // Update tab appearance.
      $(".tabs li").removeClass('active');
      $li.addClass('active');

    $newSection = $(".section." + $li.attr('id'));

      // Fade out old content if a tab was previously selected.
      if ($activeTab.length > 0) {
        $activeSection = $(".section." + $activeTab.attr('id'));
        $activeSection.fadeOut('fast', function() {
          $newSection.fadeIn('fast');
        });
      } else {
        $newSection.fadeIn('fast');
      }

      // Join subtitle with title, if applicable.
      if ($prependTitle.length > 0) {
        $('.joined-title').remove();
        $newTitle = $prependTitle.hide().clone().removeClass('prepend-title').addClass('joined-title');
        $newTitle.append(" &mdash; " + $newSection.find(".append-title").text());
        $prependTitle.parent().prepend($newTitle);
        $newSection.find(".append-title").hide();
        $newTitle.show();
      }

      newHash = "section/" + $li.attr('id');
      if (window.location.hash !== newHash) {
        window.location.hash = newHash;
      }
    }
  }); 

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
