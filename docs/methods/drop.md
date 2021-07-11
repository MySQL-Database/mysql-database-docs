---
sidebar_position: 16
---

# Drop

Drop Method

### Table Of Drop Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (the table name to drop/delete)
```js
drop(table)
```

### Example Usage
```js
await db.drop("table_name");
// -> deletes the table 'table_name'
```

### Returned Data
Returns true if the table has been deleted successfully
```js
true
```