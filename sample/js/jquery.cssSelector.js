var commonObj;

commonObj = function() {
  var _firstLastChild, _ie6Hover, _nthChild, _nthLastChild, _nthLastOfType, _nthOfType, _stripe;
  _firstLastChild = function(options) {
    var param;
    param = $.extend({
      selector: '.flChild',
      firstChildClass: 'firstChild',
      lastChildClass: 'lastChild'
    }, options);
    $(param.selector).each(function(index, element) {
      $(element).children().first().addClass(param.firstChildClass);
    });
    $(param.selector).each(function(index, element) {
      $(element).children().last().addClass(param.lastChildClass);
    });
  };
  _stripe = function(options) {
    var param;
    param = $.extend({
      stripeSelector: '.stripe',
      oddClass: 'odd',
      evenClass: 'even'
    }, options);
    $(param.stripeSelector).each(function(index, element) {
      $(element).children(':odd').addClass(param.evenClass);
    });
    $(param.stripeSelector).each(function(index, element) {
      $(element).children(':even').addClass(param.oddClass);
    });
  };
  _nthChild = function(options) {
    var param;
    param = $.extend({
      selectorClass: 'nthChild',
      childClass: 'child-'
    }, options);
    $('[class*=' + param.selectorClass + ']').each(function(index, element) {
      $(element).children().each(function(index, element) {
        var nthChild, patern, _this;
        patern = new RegExp('.*?' + param.selectorClass + '\-(\d*) ?.*?');
        _this = $(element);
        nthChild = _this.parent().attr('class').replace(patern, '$1');
        if (isNaN(nthChild) === false) {
          _this.addClass(param.childClass + ((index % nthChild) + 1));
        } else {
          _this.addClass(param.childClass + (index + 1));
        }
      });
    });
  };
  _nthLastChild = function(options) {
    var param;
    param = $.extend({
      selectorClass: 'nthLastChild',
      childClass: 'lastChild-'
    }, options);
    $('[class*=' + param.selectorClass + ']').each(function(index, element) {
      var maxLen;
      maxLen = $(element).children().length;
      $(this).children().each(function(index, element) {
        var nthChild, patern, _this;
        patern = new RegExp('.*?' + param.selectorClass + '\-(\d*) ?.*?');
        _this = $(element);
        nthChild = _this.parent().attr('class').replace(patern, '$1');
        if (isNaN(nthChild) === false) {
          _this.addClass(param.childClass + (((maxLen - index - 1) % nthChild) + 1));
        } else {
          _this.addClass(param.childClass + (maxLen - index));
        }
      });
    });
  };
  _nthOfType = function(options) {
    var param;
    param = $.extend({
      selectorClass: 'nthType',
      childClass: 'tyChild-'
    }, options);
    $('[class*=' + param.selectorClass + ']').each(function(index, element) {
      var nthChild, nthType, patern, patern2, _this;
      patern = new RegExp('.*?' + param.selectorClass + '-([a-zA-Z]*)-?[0-9]*.*');
      patern2 = new RegExp('.*?' + param.selectorClass + '-[a-zA-Z]*-?([0-9]*)?\s?.*');
      _this = $(element);
      nthType = _this.attr('class').replace(patern, '$1');
      nthChild = _this.attr('class').replace(patern2, '$1');
      _this.children(nthType).each(function(index, element) {
        if (isNaN(nthChild) === false) {
          $(element).addClass(param.childClass + ((index % nthChild) + 1));
        } else {
          $(element).addClass(param.childClass + (index + 1));
        }
      });
    });
  };
  _nthLastOfType = function(options) {
    var param;
    param = $.extend({
      selectorClass: 'nthLastType',
      childClass: 'lastTyChild-'
    }, options);
    $('[class*=' + param.selectorClass + ']').each(function(index, element) {
      var maxLen, nthChild, nthType, patern, patern2, _this;
      patern = new RegExp('.*?' + param.selectorClass + '-([a-zA-Z]*)-?[0-9]*.*');
      patern2 = new RegExp('.*?' + param.selectorClass + '-[a-zA-Z]*-?([0-9]*)?\s?.*');
      _this = $(element);
      nthType = _this.attr('class').replace(patern, '$1');
      nthChild = _this.attr('class').replace(patern2, '$1');
      maxLen = _this.children(nthType).length;
      _this.children(nthType).each(function(index, element) {
        if (isNaN(nthChild) === false) {
          $(element).addClass(param.childClass + (((maxLen - index - 1) % nthChild) + 1));
        } else {
          $(element).addClass(param.childClass + (maxLen - index));
        }
      });
    });
  };
  _ie6Hover = function(options) {
    var param;
    param = $.extend({
      hoverSelector: '.hoverWrap',
      hoverClass: 'hover'
    }, options);
    $(param.hoverSelector).hover(function() {
      $(this).addClass(param.hoverClass);
    }, function() {
      $(this).removeClass(param.hoverClass);
    });
  };
  return {
    firstLastChild: _firstLastChild,
    stripe: _stripe,
    nthChild: _nthChild,
    nthLastChild: _nthLastChild,
    nthOfType: _nthOfType,
    nthLastOfType: _nthLastOfType,
    ie6Hover: _ie6Hover
  };
};
