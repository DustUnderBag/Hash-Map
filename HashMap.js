import { LinkedList } from "./Linked-List/LinkedList.js";

class HashMap {
    capacity = 16;
    loadFactor = 0.75;
    buckets = new Array(this.capacity);
    
    #entriesCount = 0;

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

    #getBucket(key) {
        const hashCode = this.#hash(key);
        return this.buckets[hashCode];
    }

    set(key, value) {
        //For debugging only, can remove for production.
        const hashCode = this.#hash(key);
        const pair = {hashCode, key,  value};
        console.log(pair);
        
        const bucket = this.#getBucket(key);
        let tmp = bucket.head;
        //If bucket is empty.
        if(tmp == null) {
            bucket.prepend(key, value);
            this.#entriesCount++;
            return;
        }

        //If bucket is NOT empty...
        //If it has repeated key in any node, replace its value with new value.
        //Else, append this node at the list's tail.
        while(tmp.nextNode != null && tmp.value.key != key) {
            tmp = tmp.nextNode;
        }
        //update value of key.
        if(tmp.key == key) {
            tmp.value = value;
        } else {
            //append new node.
            bucket.append(key, value);
            this.#entriesCount++;
        }
    }

    get(key) {
        const bucket = this.#getBucket(key);
        
        let tmp = bucket.head;
        if(tmp == null) return null;

        while(tmp.nextNode != null && tmp.key != key) {
            tmp = tmp.nextNode;
        }
        if(tmp.key == key) return tmp.value;
        return null;
    }

    has(key) {
        const bucket = this.#getBucket(key);
        return bucket.contains(key);
    }

    remove(key) {
        const bucket = this.#getBucket(key);

        //Empty bucket
        if(bucket.head == null) return false;

        //Head is the target node
        if(bucket.head.key === key) {
            bucket.head = bucket.head.nextNode;
            this.#entriesCount--;
            return true;
        }

        let previous;
        let current = bucket.head;

        if(current.nextNode != null && current.key !== key) {
            previous = current;
            current = current.nextNode;
        }
        
        if(current.key === key) {
            previous.nextNode = current.nextNode;
            this.#entriesCount--;
            return true;
        }else {
            return false;
        }
    }

    length() {
        return this.#entriesCount;
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

console.log("Count: ", test.length());

console.log("Remove: ", test.remove("elephant"));
console.log("Remove: ", test.remove("haaat"));
console.log("Remove: ", test.remove("grape"));
console.log("Remove: ", test.remove("lion"));

console.log("Count: ", test.length());

for(let i = 0; i < test.buckets.length; i++) {
    console.log(test.buckets[i].toString());
}