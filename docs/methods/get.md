---
sidebar_position: 2
---

# Get

Get Method

### Table Of Get Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name to get the data from)
- key (the key name you want to get your data from it)
```js
get(table, key)
```

### Example Usage
```js
await db.get('my_table', 'foo');
// -> Gets foo key name value (which is bar) in the table 'my_table'
```

### Returned Data
Returns the stored data in provided key name
```js
bar
```