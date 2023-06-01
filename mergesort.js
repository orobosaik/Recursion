// Assignment 2

function mergeSort(list) {
	if (list.length < 2) return list;

	let leftList = mergeSort(list.slice(0, Math.floor(list.length / 2)));
	let rightList = mergeSort(
		list.slice(Math.floor(list.length / 2), list.length)
	);

	let l = 0,
		r = 0,
		w = 0,
		newList = [];

	while (leftList.length > l && rightList.length > r) {
		if (leftList[l] < rightList[r]) {
			newList[w++] = leftList[l++];
		} else {
			newList[w++] = rightList[r++];
		}
	}
	for (; leftList.length > l; l++) {
		newList.push(leftList[l]);
	}
	for (; rightList.length > r; r++) {
		newList.push(rightList[r]);
	}
	return newList;
}
