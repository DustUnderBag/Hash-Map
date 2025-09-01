import { LinkedList } from "./Linked-List/LinkedList.js";

class HashMap {
    capacity = 16;
    loadFactor = 0.75;
    buckets = new Array(this.capacity);

    constructor() {
        for(let i = 0; i < this.capacity; i++) {
            this.buckets[i] = new LinkedList();
        }
    }

    #hash(key) {
        let hashCode = 0;
        
        const primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode = hashCode * primeNumber + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const hashCode = this.#hash(key);
        const bucket = this.buckets[hashCode];
        const pair = {hashCode, key,  value};
        console.log(pair);
        
        let tmp = bucket.head;
        //If bucket is empty.
        if(tmp == null) {
            bucket.prepend(key, value);
            return;
        }

        //If bucket is NOT empty...
        //If it has repeated key in any node, replace its value with new value.
        //Else, append this node at the list's tail.
        while(tmp.nextNode != null && tmp.value.key != key) {
            tmp = tmp.nextNode;
        }
        if(tmp.key == key) {
            tmp.value = value;
        } else {
            bucket.append(key, value);
        }
    }

    get(key) {
        const hashCode = this.#hash(key);
        const bucket = this.buckets[hashCode];
        
        let tmp = bucket.head;
        if(tmp == null) return null;

        while(tmp.nextNode != null && tmp.key != key) {
            tmp = tmp.nextNode;
        }
        if(tmp.key == key) return tmp.value;
        return null;
    }

    has(key) {
        return this.get(key) ? true : false;
    }
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.set('elephant', 'PINK!!!!!');
test.set("jacket", "grey");


for(let i = 0; i < test.buckets.length; i++) {
    console.log(test.buckets[i].toString());
}

console.log(test.get("jacket"));


console.log(test.has("ice crea"));;