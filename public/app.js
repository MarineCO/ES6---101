'use strict';

(function () {

	var app = {

		namesTab: [],

		clickBtn: document.getElementById('btn'),

		name: document.getElementById('data'),

		init: function init() {
			this.listeners();
		},
		listeners: function listeners() {
			var _this = this;

			app.clickBtn.addEventListener('click', function () {
				_this.writeMessage();
			});
		},
		writeMessage: function writeMessage() {
			var person = app.name.value;

			if (person === '') {
				person = 'Père Noël';
			}

			console.log(person);

			var result = 'Bonjour ' + person + ' !';

			document.getElementById('message').innerHTML = result;

			this.changeTextForm(person);
		},
		changeTextForm: function changeTextForm(person) {
			var textChanged = person.charAt(0).toUpperCase() + person.slice(1).toLowerCase();

			this.addNametoTab(person, textChanged);
		},
		addNametoTab: function addNametoTab(person, textChanged) {
			var add = document.createElement('li');

			document.body.appendChild(add).innerHTML = textChanged;

			app.namesTab.push(textChanged);

			console.log(app.namesTab);
		}
	};
	app.init();
})();
