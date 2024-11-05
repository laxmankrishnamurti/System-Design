# Cursors

With the help of cursors we can control the amount of data to be fetched from the database.

## **Cursor methods**

```bash
# count total matched quantity
$ queryString.count()

# get limited data
$ queryString.limit(n -> 10) # return first 10 matched result

# skip data from oth index
$ queryString.skip(n -> 10) # skip first 10 data

# sort data into asscending or descending order
$ queryString.sort({price: -1}) # Descending ( big -> small)
$ queryString.sort({price: 1}) # Ascending ( small -> big)
```

<code>**Cursor may impact on performance on larger data-set, indexing can be used to optimize query. But also remember indexing required extra memory space.**</code>
