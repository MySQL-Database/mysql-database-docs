---
sidebar_position: 15
---

# Create

Create Method

### Table Of Create Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)
- [Notes](#notes)

### Parameters
- table (the table name to create)
```js
create(table)
```

### Example Usage
```js
await db.create("table_name");
// -> Create empty table with "table_name" name without inserting any data to it
```

### Returned Data
Returns true if the table has been created successfully
```js
true
```

### Notes
This will <span class="optional">NOT</span> overwrite an existing table<br/>
This will only create the table if its <span class="optional">NOT EXISTED</span>