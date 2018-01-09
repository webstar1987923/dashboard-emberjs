import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, function() {
            $(".menu-btn").click(function() {
        		$(".menu-btn").toggleClass("active");
        		$(".navbar").slideToggle(400);    	    	
			});

			$(window).resize(function(){
  				if($(window).width() > 768){
    				$('.navbar').removeAttr('style');
  				}
			});        		
        });		
	}
});
