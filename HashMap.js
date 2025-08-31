class HashMap {
    capacity = 16;
    loadFactor = 0.75;
    bucket = new Array(this.capacity);

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
        const hash = this.#hash(key);
        console.log("Hash: ", {hash, key, value});
        this.bucket[hash] = {key, value};
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

console.log(test);
