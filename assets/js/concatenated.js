---
---
// GLOBAL JS //
	{% remote_include https://scrollif-assets.netlify.app/websites/js/no-js.js %}
	{% remote_include https://scrollif-assets.netlify.app/websites/js/can-touch.js %}
	$(document).ready(function(){$("a").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},1250,function(){});}});});

	
// EXTERNAL COMPONENTS //
	{% remote_include https://scrollif-assets.netlify.app/websites/components/loading-screen/js/loading-screen.js %}
	{% remote_include https://scrollif-assets.netlify.app/websites/components/mobile-navbar/js/mobile-navbar.js %}