let a = ["ant", "bat", "cat"];
a.forEach((item) => {
  console.log(item);
});

// iterrate over a string using forEach and array.from
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach((item) => {
  console.log(item);
});

// sort an array
let numbers = [4, 2, 5, 15, 32, 81, 17];
numbers.sort((a, b) => a - b);
console.log(numbers);
