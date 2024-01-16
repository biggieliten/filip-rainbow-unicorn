let animals: string[] = ["apa" , "orangutang" , "gorilla" , "get", "giraff"];

for(let i = 0; i < animals.length; i++) {

console.log(stringFunction(animals[i]));

}


type objectInterface = {  
	string: string;
	number: number;
	bool: boolean;
};

const object: objectInterface = {
string: "string",
number: 1,
bool: true
}

function stringFunction(string: string): string{

	return `Hej ${string}`

}

// console.log(stringFunction());

console.log(object);
console.log(animals);