---
sidebar_position: 1
---

# [Leetcoding] CheatSheet

## Big O

### Array

| Method type | Big O       |
| ----------- | ----------- |
| push        | O(1)        |
| pop         | O(1)        |
| shift       | O(n)        |
| unshift     | O(n)        |
| concat      | O(n)        |
| slice       | O(n)        |
| splice      | O(n)        |
| sort        | O(n\*log n) |
| map         | O(n)        |

### Object

| Method type    | Big O |
| -------------- | ----- |
| Insertion      | O(1)  |
| Removal        | O(1)  |
| Searching      | O(n)  |
| Access         | O(1)  |
|                |       |
| Object.keys    | O(n)  |
| Object.values  | O(n)  |
| Object.entries | O(n)  |
| hasOwnProperty | O(1)  |

### Set

```JS
const mySet = new Set();

mySet.add(1);


mySet.has(5)
mySet.delete(5)
mySet.clear()
mySet.size


//Array to Set
var arr = [55, 44, 65];
var set = new Set(arr);

//set to Array
1. const array = Array.from(mySet);
2. const array = [...mySet];

```

### Map

```js
// 建立 Map 時直接代入內容
let myMap = new Map([
  [1, "a"],
  [2, "b"],
]);

map.set(key, value);

map.has(key); //boolean
map.size();
map.get(key); //value
map.delete(key);
map.clear();

//convert Object to Map
const map1 = new Map(Object.entries(obj));

//convert Map to Object
const objAgain = Object.fromEntries(map1);

//convert map keys to an array
const mapKeys = Array.from(map.keys());

//convert map keys to an object
const mapKeys = Array.from(map.values());
```
