export class Node {
    constructor(key = null, value = null, nextNode = null) {
        this.key = key;
        if(value) this.value = value;
        this.nextNode = nextNode;
    }
}
