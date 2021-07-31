---
sidebar_position: 20
---

# Clear

Clear Method

### Table Of Clear Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (the table name to clear)
```js
clear(table)
```

### Example Usage
```js
await db.clear("table_name");
// -> clears all 'table_name' table rows & data
```

### Returned Data
Returns true if the table has been cleared successfully
```js
true
```