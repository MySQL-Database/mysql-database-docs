---
sidebar_position: 11
---

# Rename

Rename Method

### Table Of Rename Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (the name of the table to rename)
- new_table_name (the new table name)
```js
rename(table, new_table_name)
```

### Example Usage
```js
await db.rename("my_table", "new_name");
// -> renames table name
```

### Returned Data
Returns true if the table has been renamed successfully
```js
true
```