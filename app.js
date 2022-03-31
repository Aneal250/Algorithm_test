const cards = [
  "King",
  1,
  2,
  45,
  "Queen",
  3,
  5,
  6,
  "Jack",
  "King",
  "Queen",
  20,
  1,
  "Queen",
  "Jack",
  9,
  20,
  "King",
];
console.log(cards);
//order of result  [1,2,3,5,6,45, "Queen", "King", "Jack"];
//result [1,2,3,5,6,9,20,45,"Queen","Queen", "King", "King","Jack","Jack"];


const sort = cards.sort()

console.log(sort)


const sortB = cards.sort((a, b) => a - b)

console.log(sortB)

const sortC = sortB.reverse()




const filterNumbers = ( val) => {
    if (typeof val == "number") {
			return val;
		}

}

const filterStrings = (val) => {
	if (typeof val == "string") {
		return val;
	}
};


// const reverseFunction = (array) => {


//     let filterNumbers = array.filter(filterNumbers).sort((a, b) => a - b)
//     let filterStrings = array.filter(filterStrings).sort().reverse();

//     const sortedArray = [ ...filterNumbers, ...filterStrings]

//     return sortedArray

// };

// const test = reverseFunction(cards);

// console.log('test', test)




// Final answer

const functionSort = (cards) => {

    let numbers = new Set(cards.filter((a) => typeof a === "number").sort((a,b) => a - b));
	let notNumbber = new Set(cards.filter((a) => typeof a === "string"));
	let output = [...Array.from(numbers), ...Array.from(notNumbber)];

    return output

}


const test = functionSort(cards)

console.log('answer', test)