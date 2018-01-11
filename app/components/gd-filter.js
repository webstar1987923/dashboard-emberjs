import Ember from 'ember';

export default Ember.Component.extend({	
	languages: ['English', 'Spanish', 'French', 'Chinese', 'Japanese', 'Dutch', 'Russian', 'Korean', 'German'],
	selectedLanguages: Ember.A(),

	searchTypes: ['Private Tours', 'Shore Excurtions', 'Guides'],
	selectedSearchTypes: Ember.A(),

	tourTypes: ['Any', 'Adventure Tours', 'Biking', 'City Tours', 'Cultural Tours', 'Family', 'First Time Visitor', 'Fishing',
		'Food & Wine', 'Full Day Tours', 'Museums', 'Local Experience', 'Hiking & Walking', 'Nature & Wildlife', 'Religious Heritage',
		'Outdoor Tours', 'Nightclub & Bars', 'Sailing', 'Scuba Diving', 'Shopping', 'Teens', 'Theme Parks', 'Water Sports', 'Winter Sports'],
	selectedTourTypes: Ember.A(),

	appropriateTypes: ['Kids', 'Handicapped'],
	selectedAppropriateTypes: Ember.A(),

	endurance: 'High',

	mydate: '',

	didInsertElement: function () {
		$('.sidebar-header').on('click', function () {
	        $('#sidebar').toggleClass('active');
	        $("#sidebarCollapse").css("display", "block");
	    });

	}
});
