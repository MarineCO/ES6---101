
const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {

	let name = document.getElementById('data');
	let person = name.value;

	if (person === '') {
		person = 'Père Noël';
	}
	
	console.log(person);

	const result = `Bonjour ${person}`;

	document.getElementById('message').innerHTML = result;
});

