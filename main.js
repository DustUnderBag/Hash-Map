import { HashMap } from "./HashMap.js";
import { HashSet } from "./HashSet.js";

//Testing HashMap
console.log("For Hash Map");
const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log("Length: ", test.length());

test.set('moon', 'silver');

console.log("Length: ", test.length());

console.log(test.remove("lion"));

test.clear()
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log("keys: ", test.keys());
console.log("values: ", test.values());
console.log("entries: ", test.entries());

//Testing HashSet
console.log("For Hash Set");

const hSet = new HashSet();

hSet.set('apple')
hSet.set('banana')
hSet.set('carrot')
hSet.set('dog')
hSet.set('elephant')
hSet.set('frog')
hSet.set('grape')
hSet.set('hat')
hSet.set('ice cream')
hSet.set('jacket')
hSet.set('kite')
hSet.set('lion')

console.log(hSet.capacity);

//hSet.remove("carrot");

hSet.set('moon', 'silver')

console.log(hSet.has("carrot"));

console.log(hSet.capacity);
console.log(hSet.keys());
console.log(hSet.length());