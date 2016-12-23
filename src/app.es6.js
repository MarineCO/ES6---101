(() => {

	const app = {

		namesTab: [],

		clickBtn: document.getElementById('btn'),

		clickBtn2: document.getElementById('btn2'),

		name: document.getElementById('data'),

		ul: document.getElementById('list'),

		init() {
			this.listeners();
		},

		listeners() {
			app.clickBtn.addEventListener('click', () => {
				this.writeMessage();
			});
			app.clickBtn2.addEventListener('click', () => {
				this.search();
			});
		},

		writeMessage() {
			let person = app.name.value;

			if (person === '') {
				person = 'Père Noël';
			}
			
			const result = `Bonjour ${person} !`;
			
			document.getElementById('message').innerHTML = result;
			
			this.changeTextForm(person);
		},

		changeTextForm(person) {
			const textChanged = person.charAt(0).toUpperCase() + person.slice(1).toLowerCase();
			
			this.addNametoTab(person, textChanged);
		},

		addNametoTab(person, textChanged) {
			const add = document.createElement('li');
			
			app.ul.appendChild(add).innerHTML = textChanged;
			
			app.namesTab.push(textChanged);

		},

		search() {
			let filterNamesTab = [];
			const inputSearch = document.getElementById('search');
			const getInput = inputSearch.value;
			const lowerCaseInput = getInput.toLowerCase();

			app.ul.innerHTML = '';

			for (const i = 0; i < app.namesTab.length; i++) {
				
				const element = app.namesTab[i];
				const lowercaseElement = element.toLowerCase();
				const filter = lowercaseElement.indexOf(lowerCaseInput);

				if (filter === 0) {

					const result = document.createElement('li');
					
					result.innerHTML = element;

					app.ul.appendChild(result);
				}
			}
		},
	}

	app.init();

})();

