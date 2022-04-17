---
sidebar_position: 5
---

# JSON Notation

The library fully supported for json notation

which means you can use <span class="optional">dots .</span> in methods key parameter to access/manage specific object/array

### Examples
```js
let data = await db.get("my_table", "user");
console.log(data); // {"name": "TARIQ"}

data = await db.get("my_table", "user.name");
console.log(data); // TARIQ
```

This also works for the other methods as well such as: get, delete, set, push, pull, add, sub, etc...