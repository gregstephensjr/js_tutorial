// an array of all 50 states in the US
let states = ["Kansas", "Nebraska", "South Dakota", "North Dakota"];

// urlify as string
function urlify(element) {
  return element.toLowerCase().split(/\s+/).join("-");
}

// urls: imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach((element) => {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls functional version
function functionalUrls(elements) {
  return elements.map((element) => urlify(element));
}
console.log(functionalUrls(states));

// return full urls in the form https://www.example.com/<state>
// function fullUrls(elements) {
//   return elements.map(
//     (element) => `https://www.example.com/${urlify(element)}`,
//   );
// }
// console.log(fullUrls(states));

// singles: imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach((element) => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: functional version
function functionalSingles(elements) {
  return elements.filter((element) => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// filter: includes "dakota"
function includesDakota(elements) {
  return elements.filter((element) => element.toLowerCase().includes("dakota"));
}
console.log(!!includesDakota(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative version
function imperativeSum(elements) {
  let total = 0;
  elements.forEach((element) => (total += element));
  return total;
}
console.log(imperativeSum(numbers));

// sum: functional version
