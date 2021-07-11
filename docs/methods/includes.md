---
sidebar_position: 5
---

# Includes

Includes Method

### Table Of Includes Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name that you want to check from)
- array (the key name of the array you want to check if your value includes it)
- value (the value you want to check if existed in the array stored in the key name)
```js
includes(table, array, value)
```

### Example Usage
```js
await db.includes("my_table", "fruits", "banana");
// -> Checks if the array includes provided value
```

### Returned Data
Returns boolean if the array includes the provided value
```js
false
```