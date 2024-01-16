var animals = ["apa", "orangutang", "gorilla", "get", "giraff"];
for (var i = 0; i < animals.length; i++) {
    console.log(stringFunction(animals[i]));
}
var object = {
    string: "string",
    number: 1,
    bool: true
};
function stringFunction(string) {
    return "Hej ".concat(string);
}
// console.log(stringFunction());
console.log(object);
console.log(animals);
