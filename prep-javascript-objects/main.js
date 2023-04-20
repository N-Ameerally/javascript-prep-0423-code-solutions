const person = { firstName: 'Nadine', lastName: 'Ameerally', hobby: 'tennis' };
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log('The persons name is:', fullName);
person.job = 'Doctor';
console.log('This persons current job is:', person.job);
person['previousJob'] = 'Dog food taster';
console.log('The persons previous job is:', person['previousJob']);
console.log(person);
