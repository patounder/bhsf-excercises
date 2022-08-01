const done = false;

const isItDoneYet = new Promise((resolve, reject) => {
	if (done) {
		const workDone = 'Here is the thing I built';
		resolve(workDone);
	} else {
		const why = 'Still working on something else';
		reject(why);
	}
});

isItDoneYet.then(res => console.log(res)).catch(err => console.log(err));


const fooObj = () =>  {
	return {
		name : 'Pato',
		age : 34
	}
};

console.log(`FooOBj ${fooObj().age}`);