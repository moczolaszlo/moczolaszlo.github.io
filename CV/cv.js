$(document).on('ready', function(){

	$('footer a').on('click', function(e){
		var action = this.href.split('#')[1];
		if (action) {
			e.preventDefault();
			switch (action) {
				case 'print':
					window.print();
					break;

				case 'top':
					$('html, body').animate({scrollTop:0}, 'slow');
					break;
			}
		}
	});

});