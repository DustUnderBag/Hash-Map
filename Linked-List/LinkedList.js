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

    append(value) {
       if(this.#head == null) {
        this.prepend(value);
        return;
       }
       
       this.tail.nextNode = new Node(value, null);
    }
    
    prepend(value) {
        this.#head = new Node(value, this.#head);
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

    contains(value) {
        if(this.size === 0) return false;

        let tmp = this.#head;
        /*
        Traverser cannot go past last node, and stops if it 
        finds the matching value.
        */
        while( tmp.nextNode != null && tmp.value !== value) {
            tmp = tmp.nextNode;
        }

        console.log("Checking: ", tmp.value);
        return tmp.value === value;
        /*
        Case 1: Reaches last node, can't find target value
          - returns false;
        Case 2: Reaches last node, finds target value.
          - returns true;
        Case 3: Hasn't reached last node, finds target value.
          - returns true;
        */
    }

    find(value) {
        if(list.size === 0) return null;

        let tmp = this.#head;
        let index = 0;

        while(tmp.nextNode !== null ) {
            if(tmp.value === value) return index;

            tmp = tmp.nextNode;
            index++;
        }

        return (tmp.value === value) ? index : null;
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

    insertAt(value, index) {
        if(index <= 0) {
            this.prepend(value);
            return;
        }

        if(index > list.size - 1) {
            list.append(value);
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
        previous.nextNode =  new Node(value, current);
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
        let str = `( ${tmp.value} )`
        while(tmp.nextNode !== null) {
            tmp = tmp.nextNode;
            str += ` -> ( ${tmp.value} )`;
        }
        str += ` -> null`;
        return str;
    }
}