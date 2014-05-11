var CV = {

	templates: {
		contact : $.templates('#tpl-contact'),
		skills : $.templates('#tpl-skills'),
		experience : $.templates('#tpl-experience'),
		footer : $.templates('#tpl-footer')
	},
	bindEvents: function(){
		$('footer').on('click', 'a', function(e){
			var action = this.href.split('#')[1];
			if (action) {
				e.preventDefault();
				switch (action) {
					case 'en':
					case 'hu':
						CV.generateSite(action);
						break;

					case 'print':
						window.print();
						break;

					case 'top':
						$('html, body').animate({scrollTop:0}, 'slow');
						break;
				}
			}
		});
	},
	generateSite: function(lang) {
		$.getJSON(lang + '.json', function(data){
			$('address').html(CV.templates.contact.render(data.contact));
			$('#skills').html(CV.templates.skills.render(data.skills));
			$('#experience').html(CV.templates.experience.render(data.experience));
			$('footer').html(CV.templates.footer.render(data.footer));
			$('html, body').animate({scrollTop:0});
		});
	},
	init: function() {
		CV.bindEvents();
		CV.generateSite('hu');
	}
}

(function(){if(!win.console)win.console={log:function(){}};})();

$(document).on('ready', CV.init);