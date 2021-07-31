---
sidebar_position: 5
---

# Base Get

Base Get Method

### Table Of Base Get Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name to get the data from)
- key (the key name you want to get your data from it)
```js
base_get(table, key)
```

### Example Usage
```js
await db.base_get('my_table', 'foo');
// -> Gets foo key name value (which is bar) in the table 'my_table' for encrypted rows using base_set method
```

### Returned Data
Returns the stored data in provided key name
```js
bar
```