---
sidebar_position: 15
---

# Stats

Stats Method

### Table Of Stats Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (the name of the table to get the stats of it)
```js
stats(table)
```

### Example Usage
```js
await db.stats("my_table");
// -> return table info
```

### Returned Data
Returns object of table stats
```js
{
	Name: 'new_table',
	Engine: 'InnoDB',
	Version: 10,
	Row_format: 'Dynamic',
	Rows: 2,
	Avg_row_length: 8192,
	Data_length: 16384,
	Max_data_length: 0,
	Index_length: 0,
	Data_free: 0,
	Auto_increment: 4,
	Create_time: 2021-06-18T03:38:22.000Z,
	Update_time: 2021-06-18T03:38:22.000Z,
	Check_time: null,
	Collation: 'utf8mb4_general_ci',
	Checksum: null,
	Create_options: '',
	Comment: '',
	Max_index_length: 0,
	Temporary: 'N'
}
```