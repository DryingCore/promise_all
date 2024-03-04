const numbers = [4, 6, 2, 10, 20];

function asyncSquare(x) {
	return new Promise((resolve, reject) => {
		resolve(x * x);
	});
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((result) => console.log(result));
