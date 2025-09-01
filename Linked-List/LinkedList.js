import { Node } from "./Node.js";

export class LinkedList {
    #head = null;

    get head() {
        return this.#head;
    }

    get tail() {
        //Empty list
        if(this.#head == null) return null;
        
        let tmp = this.#head;

        while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    get size() {
        if(this.#head == null) return 0;

        let count = 1;
        let tmp = this.#head;
        while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
            count++;
        }
        return count;
    }

    append(key, value) {
       if(this.#head == null) {
        this.prepend(value);
        return;
       }
       
       this.tail.nextNode = new Node(key, value, null);
    }
    
    prepend(key, value) {
        this.#head = new Node(key, value, this.#head);
    }

    pop() {
        if(this.size === 0) return;

        //If list has only ONE element
        if(this.#head.nextNode == null) {
            this.#head = null;
            return;
        }
        
        let tmp = this.#head;
        while(tmp.nextNode.nextNode != null) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = null;
    }

    contains(key) {
        if(this.size === 0) return false;

        let tmp = this.#head;
        /*
        Traverser cannot go past last node, and stops if it 
        finds the matching key.
        */
        while( tmp.nextNode != null && tmp.key !== key) {
            tmp = tmp.nextNode;
        }

        console.log("Checking: ", tmp.key);
        return tmp.key === key;
        /*
        Case 1: Reaches last node, can't find target key
          - returns false;
        Case 2: Reaches last node, finds target key.
          - returns true;
        Case 3: Hasn't reached last node, finds target key.
          - returns true;
        */
    }

    find(key) {
        if(list.size === 0) return null;

        let tmp = this.#head;
        let index = 0;

        while(tmp.nextNode !== null ) {
            if(tmp.key === key) return index;

            tmp = tmp.nextNode;
            index++;
        }

        return (tmp.key === key) ? index : null;
    }

    at(index) {
        if(this.#head == null) return null;
        if(index > this.size - 1 || index < 0) return null;

        let tmp = this.#head;
        let step = 0;

        while(tmp.nextNode != null && step < index) {
            tmp = tmp.nextNode;
            step++;
        }
        return tmp;
    }

    insertAt(key, value, index) {
        if(index <= 0) {
            this.prepend(key, value);
            return;
        }

        if(index > list.size - 1) {
            list.append(key, value);
            return;
        }

        let previous;
        let current = this.#head;
        let step = 0;
        while(current.nextNode != null && step < index) { 
            previous = current;
            current = current.nextNode;
            step++;
        }
        previous.nextNode =  new Node(key, value, current);
    }

    removeAt(index) {
        if(this.#head == null) return;

        if(index <= 0) { 
            this.#head = this.#head.nextNode;
            return;
        }

        if(index >= this.size - 1) {
            this.pop();
            return;
        }

        if(index <= 0) { 
            this.#head = this.#head.nextNode;
            return;
        }

        let previous;
        let current = this.#head;
        let step = 0;
        while(step < index) {
            previous = current;
            current = current.nextNode;
            step++;
        }
        previous.nextNode = current.nextNode;
    }

    toString() {
        if(this.#head == null) return "null";

        let tmp = this.#head;
        let str = `(key: ${tmp.key} , value: ${tmp.value})`
        while(tmp.nextNode !== null) {
            tmp = tmp.nextNode;
            str += ` -> (key: ${tmp.key} , value: ${tmp.value})`;
        }
        str += ` -> null`;
        return str;
    }
}