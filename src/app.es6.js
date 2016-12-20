(() => {

	const app = {

		namesTab: [],

		clickBtn: document.getElementById('btn'),

		name: document.getElementById('data'),

		init() {
			this.listeners();
		},

		listeners() {
			app.clickBtn.addEventListener('click', () => {
				this.writeMessage();
			});
		},

		writeMessage() {
			let person = app.name.value;

			if (person === '') {
				person = 'Père Noël';
			}

			console.log(person);
			
			const result = `Bonjour ${person} !`;
			
			document.getElementById('message').innerHTML = result;
			
			this.changeTextForm(person);
		},

		changeTextForm(person) {
			const textChanged = person.charAt(0).toUpperCase() + person.slice(1).toLowerCase();
			
			this.addNametoTab(person, textChanged);
		},

		addNametoTab(person, textChanged) {
			let add = document.createElement('li');
			
			document.body.appendChild(add).innerHTML = textChanged;
			
			app.namesTab.push(textChanged);

			console.log(app.namesTab);
		},

		

		// const clickBtn2 = document.getElementById('btn2');

		// clickBtn2.addEventListener('click', () => {

		// 	const searchInput = document.getElementById('search');
		// 	const filter = searchInput.value.toUpperCase();
		// 	const ul = document.getElementById('list');
		// 	const li = document.getElementsByTagName('li');


		// 	li.style.display = ""
		// 	li.style.display = "none"
		// });
	}
	app.init();
})();
