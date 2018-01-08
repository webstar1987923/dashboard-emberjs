import Ember from 'ember';

export default Ember.Component.extend({
	newItemName: null,
  	talkTags: [ {id:0, tag:'Malaga'}, {id:1, tag:'Barcelona'}],
  	selectedTags: [],
  	numTags: Ember.computed.alias('talkTags.length'),
  	actions: {
		addNew(text) {
			this.set('newItemName', text);

			let newTag = {
				id: this.get('numTags'),
				tag: text
			};

			this.get('talkTags').addObject(newTag);
			this.get('selectedTags').addObject(newTag);
    	}
    }
});
