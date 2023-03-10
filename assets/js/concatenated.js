---
dir_path: scripts/
scripts:
  - script-1.js
---
// GOOGLEAPIS JQUERY LIBS //
	{% remote_include https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js %}
	{% remote_include https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js %}
	{% remote_include https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js %}
	{% remote_include https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js %}

// GLOBAL JS //
	{% remote_include https://scrollif-assets.netlify.app/websites/js/smooth-scroll.js %}
	{% remote_include https://scrollif-assets.netlify.app/websites/js/no-js.js %}
	{% remote_include https://scrollif-assets.netlify.app/websites/js/can-touch.js %}
	{% remote_include https://scrollif-assets.netlify.app/websites/js/remove-focus.js %}

// EXTERNAL COMPONENTS //
	{% remote_include https://scrollif-assets.netlify.app/websites/components/loading-screen/js/loading-screen.js %}
	{% remote_include https://scrollif-assets.netlify.app/websites/components/mobile-navbar/js/mobile-navbar.js %}

// INTERNAL JS //
{% for script in page.scripts %}
    {% assign script_path = dir_path | append: script %}
    {% include_relative script_path %}
{% endfor %}
$(window).scroll(function() {
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height() / 1.3;
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    if (elementScrolled('div.back-to-top-button')) {
        $('div.back-to-top-button').addClass("visible");
    }
});