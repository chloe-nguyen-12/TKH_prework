var array = [
  "Retta",
  "Vern",
  "Marica",
  "Cyrus",
  "Linette",
  "Curt",
  "Nichole",
  "Jesica",
  "Wynell",
  "Michaele",
];
let longest = 0;
let longest_name = "";
for (let i = 0; i < array.length; i++) {
  let len = array[i].length;
  if (len > longest) {
    longest = len;
    longest_name = array[i];
  }
}
console.log(longest_name);
