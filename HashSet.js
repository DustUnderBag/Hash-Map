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