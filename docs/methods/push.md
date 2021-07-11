---
sidebar_position: 3
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
```js
push(table, array, value)
```

### Example Usage
```js
await db.push('my_table', 'fruits', 'banana');
// -> pushs 'banana' to 'fruits' array in 'my_table' table
```

### Returned Data
Returns final stored array
```js
['banana']
```