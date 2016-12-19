'use strict';

var names = [];

var clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', function () {

	var name = document.getElementById('data');
	var person = name.value;

	if (person === '') {
		person = 'Père Noël';
	}

	console.log(person);

	var result = 'Bonjour ' + person + ' !';

	document.getElementById('message').innerHTML = result;

	var add = document.createElement('li');

	document.body.appendChild(add).innerHTML = person;
	names.push(person);

	console.log(names);
});
