const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, "a", ...second, "b"];
console.log(combined);

const clone = [...first];

console.log(first);
console.log(clone);

const firstObj = { name: "Late" };
const secondObj = { job: "Student" };

const combinedObj = { ...firstObj, ...secondObj, location: "Nepal" };
console.log(combinedObj);

const cloneObj = { ...firstObj };
console.log(cloneObj);
