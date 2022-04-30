---
sidebar_position: 6
---

# Push

Push Method

### Table Of Push Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name that you want to push to)
- array (the key name of the array you want to push your value to it)
- value (the value you want to push to the array stored in the key name)
- push_if_not_includes (pushes value to array only if array does not includes value) <span class="optional">(OPTIONAL)</span>
```js
push(table, array, value, push_if_not_includes)
```

### Example Usage
```js
await db.push('my_table', 'fruits', 'banana');
// -> pushs 'banana' to 'fruits' array in 'my_table' table
await db.push('my_table', 'fruits', 'banana', true);
// -> doesn't push again because 'banana' is already included in array
```

### Returned Data
Returns final stored array
```js
['banana']
```