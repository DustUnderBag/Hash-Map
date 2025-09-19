import { HashMap } from "./HashMap.js";
import { HashSet } from "./HashSet.js";

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

test.set('banana', 'PP')
test.set('grape', 'AA')
test.set('jacket', 'OFOS')
test.set('kite', 'SDDA')

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
