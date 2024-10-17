# Normalization

Normalization is a process in which we divice a single table into multiple tables to reduce data redundency.

<pre>
Columns(Within a single table) ===> name  age   email    dob   accountNumber  ifscCode    d_id  d_name    d_description
</pre>

Normalization (Dividing the table into two different tables)

<pre>
1st table ===>  name  age  email    dob   accountNumber  ifscCode    d_id
</pre>

<pre>
2nd table ===> d_id   d_name  d_description  
</pre>

# Denormalization

Denormalization is a process in which we combine the data and organize in a single table.

### Benefits

- Faster read operation
- Easy management
- High data availability
- Reduce the number of network calls to fetch data from multiple places

### Limitations

- Redundent data ===> Wastage of memory
- Data inconsistency
- Complex
- Slow write operation
