const fs = require('fs');
const readLineSync = require('readline-sync');


let students = [];

const loadData = () => {
	const fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
}


const showStudents = () => {
	for(let student of students) {
		console.log(`${student.name} - ${student.age}`);
	}
}

const showCreateStudent = () => {
	const name = readLineSync.question('Name: ');
	const age = readLineSync.question('Age: ');
	const newStudent = {
		name: name,
		age: parseInt(age)
	}

	students.push(newStudent);
}

const saveAndExit = () => {
	const content = JSON.stringify(students);
	fs.writeFileSync('./data.json', content, { encoding: 'utf8'});
}


const showMenu = () => {
	console.log('1.Show all students');
	console.log('2.Create a new student');
	console.log('3.Save and Exit');

	const option = readLineSync.question('>.');
	switch(option) {
		case '1': 
			showStudents();
			showMenu();
			break;
		case '2':
			showCreateStudent();
			showMenu();
			break;
		case '3':
			saveAndExit();
			break;
		default:
			console.log('Wrong option');
			showMenu();
			break;
	}
}



const main = () => {
	loadData();
	showMenu();
}


main();
