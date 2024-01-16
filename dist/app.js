let animals = ["apa", "orangutang", "gorilla", "get", "giraff"];
for (let i = 0; i < animals.length; i++) {
    console.log(stringFunction(animals[i]));
}
const object = {
    string: "string",
    number: 1,
    bool: true
};
function stringFunction(string) {
    return `Hej ${string}`;
}
// console.log(stringFunction());
console.log(object);
console.log(animals);
