'use strict';

(function () {

	var app = {

		namesTab: [],

		clickBtn: document.getElementById('btn'),

		clickBtn2: document.getElementById('btn2'),

		name: document.getElementById('data'),

		ul: document.getElementById('list'),

		init: function init() {
			this.listeners();
		},
		listeners: function listeners() {
			var _this = this;

			app.clickBtn.addEventListener('click', function () {
				_this.writeMessage();
			});
			app.clickBtn2.addEventListener('click', function () {
				_this.search();
			});
		},
		writeMessage: function writeMessage() {
			var person = app.name.value;

			if (person === '') {
				person = 'Père Noël';
			}

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

			app.ul.appendChild(add).innerHTML = textChanged;

			app.namesTab.push(textChanged);
		},
		search: function search() {
			var filterNamesTab = [];
			var inputSearch = document.getElementById('search');
			var getInput = inputSearch.value;
			var lowerCaseInput = getInput.toLowerCase();

			app.ul.innerHTML = '';

			for (var i = 0; i < app.namesTab.length; i++) {

				var element = app.namesTab[i];
				var lowercaseElement = element.toLowerCase();
				var filter = lowercaseElement.indexOf(lowerCaseInput);

				if (filter === 0) {

					var result = document.createElement('li');

					result.innerHTML = element;

					app.ul.appendChild(result);
				}
			}
		}
	};

	app.init();
})();
