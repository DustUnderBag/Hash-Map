# Hash-Map
An implementation of Hash Map in Javascript

## Features: 
Classes: 
* `HashMap` class / factory, containing buckets of linked lists.
* `HashSet` class / factory, containing only `key` with no `values`;

Methods:
* `hash(key)` takes a key and produces a hash code with it.
* `set(key, value)` takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten, and we can say that we update the key’s value.
* `get(key)` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
* `has(key)` takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
* `remove(key)` takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
* `length()` returns the number of stored keys in the hash map.
* `clear()` removes all entries in the hash map.
* `keys()` returns an array containing all the keys inside the hash map.
* `values()` returns an array containing all the values.
* `entries()` returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

### Extra credit 
* Create a `HashSet` class or factory function that behaves the same as a `HashMap` but only contains keys with no values.

## Cloning this project locally
1. Clone this repository in any location.
2. In terminal, navigate to this repository.

## How to run the script
1. Navigate to root of this project.
2. Run:  
   `node main.js`
3. To automatically restart script upon changes:  
   `nodemon main.js`  
   Install nodemon in the system if it's not installed:  
   `npm i -g nodemon`. 