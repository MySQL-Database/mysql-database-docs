---
sidebar_position: 6
---

# Add

Add Method

### Table Of Add Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name to add the data to)
- key (the key name you want to add your number to it)
- number (the number you want to be added to the key name)
```js
add(table, key, number)
```

### Example Usage
```js
await db.add("my_table", "price", 10);
// -> add 10 to price in 'my_table' table
```

### Returned Data
Returns the final stored data after added to it
```js
10
```