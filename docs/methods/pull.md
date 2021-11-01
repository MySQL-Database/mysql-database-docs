---
sidebar_position: 7
---

# Pull

Pull Method

### Table Of Pull Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name that you want to pull from)
- array (the key name of the array you want to pull your value from it)
- value (the value you want to pull from the array stored in the key name)
- all_option (all option to pull all values that equals to the provided value) <span class="optional">(OPTIONAL)</span>
```js
pull(table, array, value, all_option)
```

### Example Usage
```js
await db.pull("my_table", "fruits", "banana");
// -> pulls FIRST 'banana' from 'fruits' in 'my_table'
await db.pull("my_table", "fruits", "banana", "all");
// -> pulls ALL 'banana' from 'fruits' in 'my_table'
```

### Returned Data
Returns final stored array
```js
[]
```