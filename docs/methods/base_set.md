---
sidebar_position: 4
---

# Base Set

Base Set Method

### Table Of Base Set Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name to store the data to)
- key (the key name you want to store your value in it)
- value (the value you want to store in the key name)
```js
base_set(table, key, value)
```

### Example Usage
```js
await db.base_set('my_table', 'foo', 'bar');
// -> Stores 'bar' in 'foo' key name in the table 'my_table' but base encrypted
```

### Returned Data
Returns final stored data
```js
bar
```