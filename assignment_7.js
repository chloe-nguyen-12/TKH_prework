var names_array = [
  "bob",
  "jimmy",
  "max b",
  "bernie",
  "jordan",
  "future hendrix",
];

let evenArray = [];
let oddArray = [];

for (let i = 0; i < names_array.length; i++) {
  if (names_array[i].length % 2 === 0) {
    evenArray.push(names_array[i]);
  } else {
    oddArray.push(names_array[i]);
  }
}

for (let i = 0; i < evenArray.length; i++) {
  evenArray[i] = "b" + evenArray[i].slice(1, evenArray[i].length);
}

for (let i = 0; i < oddArray.length; i++) {
  oddArray[i] = oddArray[i].slice(0, oddArray[i].length - 1) + "c";
}

console.log(evenArray);
console.log(oddArray);
