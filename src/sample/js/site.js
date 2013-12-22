
$(function() {
  var nav, navTop;
  commonObj().firstLastChild();
  commonObj().stripe();
  commonObj().nthChild();
  commonObj().nthLastChild();
  commonObj().nthOfType();
  commonObj().nthLastOfType();
  commonObj().ie6Hover();
  if ($('#side').length = true) {
    nav = $('#side');
    navTop = nav.offset().top;
    $(window).scroll(function() {
      var winTop;
      winTop = $(this).scrollTop();
      if (winTop >= navTop) {
        $('#side').addClass('fixed');
      } else {
        $('#side').removeClass('fixed');
      }
    });
  }
  $(window).scroll(function() {
    $('#side').find('a').each(function(index, element) {
      var target, targetTop, winTop;
      target = $(element).attr('href');
      if ($(target).length = true) {
        targetTop = $(target).offset().top;
        winTop = $(window).scrollTop();
        if (winTop >= targetTop) {
          $('#side').find('a').removeClass('cr');
          $(element).addClass('cr');
        }
      }
    });
  });
  $('a[href^="#"]').each(function(indx, element) {
    var anchorID, _target, _this;
    _this = $(element);
    anchorID = _this.attr('href');
    if (anchorID !== '#') {
      _target = $(anchorID);
    } else {
      _target = $('body');
    }
    return _this.click(function(e) {
      var doc, targetPositionTop;
      doc = $('body');
      targetPositionTop = _target.offset().top;
      return doc.stop().animate({
        scrollTop: targetPositionTop
      }, {
        duration: 500,
        complete: function() {}
      });
    });
  });
});
