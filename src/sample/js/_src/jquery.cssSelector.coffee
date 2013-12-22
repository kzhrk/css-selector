#----------------------------------------------
#	CoffeeScript
#	jquery.cssSelector
#
#	date	: 02.24.2013
#	author	: Kobayashi Kazuhiro
#
#	library	: jQuery1.8.3
#----------------------------------------------

#----------------------------------------------
#	@name	commonObj
#	@disc	-
#----------------------------------------------
commonObj	= ->

	#----------------------------------------------
	#	@name	firstLastChild
	#	@disc	-
	#----------------------------------------------
	_firstLastChild	= (options) ->
		param	= $.extend({
			selector		: '.flChild'
			firstChildClass	: 'firstChild'
			lastChildClass	: 'lastChild'
		}, options );

		$( param.selector ).each (index, element) ->
			$(element).children().first().addClass( param.firstChildClass );
			return

		$( param.selector ).each (index, element) ->
			$(element).children().last().addClass( param.lastChildClass );
			return

		return

	#----------------------------------------------
	#	@name	stripe
	#	@disc	-
	#----------------------------------------------
	_stripe	= (options)->
		param	= $.extend({
			stripeSelector	: '.stripe'
			oddClass		: 'odd'
			evenClass		: 'even'
		}, options);

		$( param.stripeSelector ).each (index, element) ->
			$(element).children(':odd').addClass( param.evenClass );
			return

		$( param.stripeSelector ).each (index, element) ->
			$(element).children(':even').addClass( param.oddClass );
			return

		return

	#----------------------------------------------
	#	@name	nthChild
	#	@disc	-
	#----------------------------------------------
	_nthChild	= (options)->
		param	= $.extend({
			selectorClass	: 'nthChild'
			childClass		: 'child-'
		}, options);

		$( '[class*=' + param.selectorClass + ']' ).each (index, element) ->

			$(element).children().each (index, element) ->
				patern	= new RegExp ( '.*?' + param.selectorClass + '\-(\d*) ?.*?' );

				_this	= $(element);

				nthChild	= _this.parent().attr( 'class' ).replace( patern, '$1' );

				if isNaN(nthChild) is false
					_this.addClass ( param.childClass + ( ( index % nthChild ) + 1 ));
				else
					_this.addClass( param.childClass + ( index + 1 ) );

				return
			return
		return

	#----------------------------------------------
	#	@name	nthLastChild
	#	@disc	-
	#----------------------------------------------
	_nthLastChild	= (options)->
		param	= $.extend({
			selectorClass	: 'nthLastChild'
			childClass		: 'lastChild-'
		}, options);

		$( '[class*=' + param.selectorClass + ']' ).each (index, element) ->

			# 最大値
			maxLen	= $(element).children().length

			$(this).children().each (index, element) ->
				patern	= new RegExp ( '.*?' + param.selectorClass + '\-(\d*) ?.*?' );

				_this	= $(element);

				nthChild	= _this.parent().attr( 'class' ).replace( patern, '$1' );

				if isNaN(nthChild) is false
					_this.addClass ( param.childClass + (((maxLen - index - 1 ) % nthChild ) + 1 ) );
				else
					_this.addClass( param.childClass + ( maxLen - index ) );

				return
			return
		return

	#----------------------------------------------
	#	@name	nthOfType
	#	@disc	-
	#----------------------------------------------
	_nthOfType	= (options) ->
		param	= $.extend({
			selectorClass	: 'nthType'
			childClass		: 'tyChild-'
		}, options );

		$( '[class*=' + param.selectorClass + ']' ).each (index, element) ->

			patern	= new RegExp ( '.*?' + param.selectorClass + '-([a-zA-Z]*)-?[0-9]*.*' );
			patern2	= new RegExp ( '.*?' + param.selectorClass + '-[a-zA-Z]*-?([0-9]*)?\s?.*' );

			_this	= $(element);

			nthType		= _this.attr( 'class' ).replace( patern, '$1' );
			nthChild	= _this.attr( 'class' ).replace( patern2, '$1' );

			_this.children(nthType).each (index, element) ->
				if isNaN(nthChild) is false
					$(element).addClass( param.childClass + ( ( index % nthChild ) + 1 ));
				else
					$(element).addClass( param.childClass + ( index + 1 ) );

				return

			return
		return

	#----------------------------------------------
	#	@name	nthLastOfType
	#	@disc	-
	#----------------------------------------------
	_nthLastOfType	= (options) ->
		param	= $.extend({
			selectorClass	: 'nthLastType'
			childClass		: 'lastTyChild-'
		}, options );

		$( '[class*=' + param.selectorClass + ']' ).each (index, element) ->
			
			patern	= new RegExp ( '.*?' + param.selectorClass + '-([a-zA-Z]*)-?[0-9]*.*' );
			patern2	= new RegExp ( '.*?' + param.selectorClass + '-[a-zA-Z]*-?([0-9]*)?\s?.*' );

			_this	= $(element);

			nthType		= _this.attr( 'class' ).replace( patern, '$1' );
			nthChild	= _this.attr( 'class' ).replace( patern2, '$1' );

			maxLen	= _this.children(nthType).length;

			_this.children(nthType).each (index, element) ->
				if isNaN(nthChild) is false
					$(element).addClass( param.childClass + (((maxLen - index - 1) % nthChild) + 1) );
				else
					$(element).addClass( param.childClass + ( maxLen - index ) );

				return
			return
		return

	#----------------------------------------------
	#	@name	ie6Hover
	#	@disc	-
	#----------------------------------------------
	_ie6Hover	= (options) ->
		param	= $.extend({
			hoverSelector	: '.hoverWrap'
			hoverClass		: 'hover'
		}, options );

		$(param.hoverSelector).hover(
			->
				$(this).addClass( param.hoverClass )
				return
			->
				$(this).removeClass( param.hoverClass)
				return
		)

		return


	#method
	firstLastChild	: _firstLastChild
	stripe			: _stripe
	nthChild		: _nthChild
	nthLastChild	: _nthLastChild
	nthOfType		: _nthOfType
	nthLastOfType	: _nthLastOfType
	ie6Hover		: _ie6Hover
