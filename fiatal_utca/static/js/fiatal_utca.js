var win = window,
	doc = document,
	$win = $(win),
	$body = (doc.body),

	Site = {
		bindEvents: function() {

			$('a').on('click', function(e){
				var link = this;
				if (!link.target) {
					e.preventDefault();
					Site.showSection(link.href.split('http://localhost/')[1]);
				}
			});

		},
		showSection: function(id) {
			var id = id || 'fooldal',
				$section = $('#' + id);
			$('section').hide();
			$section.show();
			Site.resizeSection($section);
		},
		resizeSection: function($section){
			$section.css({
				'min-height': $win.height() - $('header').height(),
				opacity: 1
			})
			console.log();
		},
		init: function() {
			Site.bindEvents();
			Site.showSection('fooldal');
		}
	}

$(doc).on('ready', Site.init);
