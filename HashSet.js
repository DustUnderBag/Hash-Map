import { HashMap } from "./HashMap.js";

export class HashSet {
    #map;
    
    constructor() {
        this.#map = new HashMap();
    }

    get capacity() {
        return this.#map.capacity;
    }

    get loadFactor() {
        return this.#map.loadFactor;
    }

    set(key) {
        this.#map.set(key);
    }

    has(key) {
        return this.#map.has(key);
    }

    remove(key) {
        return this.#map.remove(key);
    }

    length() {
        return this.#map.length();
    }

    clear() {
        this.#map.clear();
    }

    keys() {
        return this.#map.keys();
    }
}


const test = new HashSet();

 test.set('apple')
 test.set('banana')
 test.set('carrot')
 test.set('dog')
 test.set('elephant')
 test.set('frog')
 test.set('grape')
 test.set('hat')
 test.set('ice cream')
 test.set('jacket')
 test.set('kite')
 test.set('lion')

console.log(test.capacity);
console.log(test.keys());

 test.set('moon', 'silver')

console.log(test.capacity);
 console.log(test.keys());
