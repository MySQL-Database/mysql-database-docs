---
sidebar_position: 10
---

# Sub

Sub Method

### Table Of Sub Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name to subtract the data from)
- key (the key name you want to subtract your number from it)
- number (the number you want to be subtracted from the key name)
```js
sub(table, key, number)
```

### Example Usage
```js
await db.sub("my_table", "price", 5);
// -> subtracts 5 from price - the remaining is 5 from price in 'my_table' table
```

### Returned Data
Returns the final stored data after subtracting from it
```js
5
```