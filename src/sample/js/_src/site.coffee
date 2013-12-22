$ ->
	commonObj().firstLastChild()
	commonObj().stripe()
	commonObj().nthChild()
	commonObj().nthLastChild()
	commonObj().nthOfType()
	commonObj().nthLastOfType()
	commonObj().ie6Hover()

	# div#sideのfixed処理
	if $('#side').length = true

		nav		= $('#side')

		navTop	= nav.offset().top

		$(window).scroll(
			->
				winTop	= $(this).scrollTop()
 				# スクロール位置がnavの位置より下だったらクラスfixedを追加
				if winTop >= navTop
					$('#side').addClass('fixed')
				else
					$('#side').removeClass('fixed')
				return
		)

	# div#side navのcrクラス on/off
	$(window).scroll(
		->
			$('#side').find('a').each (index, element) ->
				target	= $(element).attr('href')

				if $(target).length = true 
					targetTop	= $(target).offset().top
					winTop		= $(window).scrollTop()

					if winTop >= targetTop
						$('#side').find('a').removeClass('cr')
						$(element).addClass('cr')
						return
			return
	)

	#smooth scroll
	$( 'a[href^="#"]' ).each (indx, element) ->

		_this		= $(element)
		anchorID	= _this.attr( 'href' )
		
		if anchorID isnt '#'
			_target	= $( anchorID )
		else
			_target	= $('body')

		_this.click( (e) ->
			doc					= $('body')
			targetPositionTop	= _target.offset().top

			doc.stop().animate({
				scrollTop	: targetPositionTop
			},
			{
				duration	: 500,
				complete	: ->
					# anchorID		= anchorID.replace( '#', '' );
					# location.hash	= encodeURIComponent ( anchorID );
			})
		)

	return
