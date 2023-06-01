// Assignment 1
// A. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(num, arr=[0,1]) {
	if (num <= 0) arr = [];
	if (num == 1) arr = [0];
	for (let i = 1; i < num - 1; i++) {
		arr.push(arr[i] + arr[i - 1]);
	}
	return arr;
}
console.log(fibs(8));

//  B. Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

function fibsRec(num) {
	if (num <= 0) return [];
	if (num == 1) return [0];
	if (num == 2) return [0, 1];
	return [
		...fibsRec(num - 1),
		fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
	];
}
console.log(fibsRec(8));
