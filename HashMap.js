import { LinkedList } from "./Linked-List/LinkedList.js";

class HashMap {
    capacity = 16;
    loadFactor = 0.75;
    #entriesCount;
    
    constructor() {    
        this.#entriesCount = 0;

        this.buckets = [];

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
        const bucket = this.#getBucket(key);
        let tmp = bucket.head;

        //If bucket is empty.
        //No need to check load level, as it's always just one entry after this.
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
        //update value of key for conflicting key
        if(tmp.key == key) {
            tmp.value = value;
            return;
        }

        //append new node non-conflicting key
        bucket.append(key, value);
        this.#entriesCount++;

        /*
        Load Factor is threshold where once number of entries exceeds it, 
        a resize/rehashing process is triggered, hence doubling the capacity.
        */
        if(this.#entriesCount > this.loadFactor * this.capacity) this.#resize();
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

    clear() {
        for(let i = 0; i < this.capacity; i++) {
            this.buckets[i] = new LinkedList();
        }
        this.#entriesCount = 0;
    }

    keys() {
        return this.#reducer("key");
    }

    values() {
        return this.#reducer("value");
    }

    entries() {
        return this.#reducer("key", "value");
    }

    #reducer(...properties) {
        const result = this.buckets.reduce( (acc, bucket) => {
            //On each bucket of buckets
            let tmp = bucket.head;
            const propsOfBucket = [];

            while(tmp != null) {
                //If only one property is inquired.
                if(properties.length === 1) {
                    propsOfBucket.push(tmp[properties]);
                } else {
                    //If multiple properties are inquired;
                    let propsOfNode = [];
                    for(let property of properties) {
                        propsOfNode.push(tmp[property]);
                    }
                    propsOfBucket.push(propsOfNode);
                }

                tmp = tmp.nextNode;
            }

            /* Accumulate arr with valuesOfThisBucket,
               then return it for the next iteration. */
            return acc.concat(propsOfBucket);
        }, []);

        return result;
    }
    
    #resize() {
        //save old entries for rehashing
        const entries = this.entries();
        
        this.capacity = this.capacity * 2;
        //Empty the bucket & fill buckets with linked list
        this.buckets = [];
        for(let i = 0; i < this.capacity; i++) {
            this.buckets[i] = new LinkedList();
        }

        //Reset count of entries to 0
        this.#entriesCount = 0;

        //Rebuild hash table
        for(let entry of entries) {
            const key = entry[0];
            const value = entry[1];
            this.set(key, value);
        }
    }
}

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
console.log("Capacity: ", test.capacity);

test.set('moon', 'silver');


test.set('banana', 'PP')
test.set('grape', 'AA')
test.set('jacket', 'OFOS')
test.set('kite', 'SDDA')

console.log("Length: ", test.length());
console.log("Capacity: ", test.capacity);

console.log(test.remove("lion"));

console.log(test.keys());