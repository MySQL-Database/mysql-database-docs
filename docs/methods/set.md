---
sidebar_position: 1
---

# Set

Set Method

### Table Of Set Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name to store the data to)
- key (the key name you want to store your value in it)
- value (the value you want to store in the key name)
```js
set(table, key, value)
```

### Example Usage
```js
await db.set('my_table', 'foo', 'bar');
// -> Stores 'bar' in 'foo' key name in the table 'my_table'
```

### Returned Data
Returns final stored data
```js
bar
```