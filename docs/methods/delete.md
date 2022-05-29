---
sidebar_position: 12
---

# Delete

Delete Method

### Table Of Delete Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name to delete the data from)
- key (the key name you want to delete)
```js
delete(table, key)
```

### Example Usage
```js
await db.delete("my_table", "foo");
// -> delete foo key in 'my_table' table
```

### Returned Data
Returns true if deleted the whole row<br/>
Returns the stored data if deleted specific data using [JSON Notation](/docs/json-notation)
```js
true
```