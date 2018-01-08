import Ember from 'ember';

export default Ember.Component.extend({
	guides: [
		{
			name: "La Maria",
			stars: 4,
			img: "assets/images/guides/maria.png",
			desc: "slkdk dskdf dsksdfk dsdjsfsdk dkldklsdk dskdsdskdslk dsdsldssd dsds",
			langs: [ "English", "French", "Russian"],
			rate: 20
		},
		{
			name: "Adam Gilcrist",
			stars: 3.5,
			img: "assets/images/guides/gilcrist.png",
			desc: "slkdk dskdf dsksdfk dsdjsfsdk dkldklsdk dskdsdskdslk dsdsldssd dsds",
			langs: [ "English", "French", "Polish"],
			rate: 15
		},
		{
			name: "Matthew Adams",
			stars: 4.5,
			img: "assets/images/guides/adams.png",
			desc: "slkdk dskdf dsksdfk dsdjsfsdk dkldklsdk dskdsdskdslk dsdsldssd dsds",
			langs: [ "English", "French", "Korean"],
			rate: 30
		},
		{
			name: "Lara Max",
			stars: 4,
			img: "assets/images/guides/max.png",
			desc: "slkdk dskdf dsksdfk dsdjsfsdk dkldklsdk dskdsdskdslk dsdsldssd dsds",
			langs: [ "English", "French", "Russian", "Polish"],
			rate: 22
		}
	]
});
