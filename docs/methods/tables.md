---
sidebar_position: 13
---

# Tables

Tables Method

### Table Of Tables Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
No parameters existed for the method
```js
tables()
```

### Example Usage
```js
await db.tables();
// -> return array of all tables existed in the database
```

### Returned Data
Returns an array of all existed tables in the database
```js
['my_table']
```