---
sidebar_position: 14
---

# Auto Increment

Auto Increment Method

### Table Of Auto Increment Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table to modify the auto increment of it)
- number (the number to set the auto increment to)
```js
auto_increment(table, number)
```

### Example Usage
```js
await db.auto_increment("my_table", 5);
// -> sets 'my_table' table auto increment to 5
```

### Returned Data
Returns the auto increment that has been set successfully 
```js
5
```