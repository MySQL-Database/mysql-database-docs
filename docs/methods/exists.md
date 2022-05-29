---
sidebar_position: 25
---

# Exists

Exists Method

### Table Of Exists Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name)
- key (the key name to check if it exists)
```js
exists(table, key)
```

### Example Usage
```js
await db.exists('my_table', 'foo');
// -> Checks if a specific data exists
```

### Returned Data
Returns boolean whether the data exists or not
```js
true
```