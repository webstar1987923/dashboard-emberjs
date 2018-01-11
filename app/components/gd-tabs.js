import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		
		Ember.run.scheduleOnce('afterRender', this, function() {        	

			$('#sidebarCollapse').on('click', function () {

		        $('#sidebar').toggleClass('active');
				$("#sidebarCollapse").css("display", "none");
		    });

      	});
    }

});
