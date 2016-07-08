|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

## <span class="jumptarget"> List Custom Fields </span>

Gets custom fields associated with a product.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/custom_fields`
*   Basic Auth
>`GET /api/v2/products/{product_id}/custom_fields`

### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to `custom_fields`.

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 custom_fields are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/custom_fields?page={number} |
| limit | int | /api/v2/products/{product_id}/custom_fields?limit={count} |

```json
[
  {
    "id": 1,
    "product_id": 30,
    "name": "Toy manufactured in",
    "text": "USA"
  },
  {
    "id": 2,
    "product_id": 45,
    "name": "Release Date",
    "text": "2013-12-25"
  }
]
```

## <span class="jumptarget"> Get a Custom Field </span>

Gets a custom field associated with a product.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/custom_fields/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/custom_fields/{id}`

```json
{
  "id": 2,
  "product_id": 30,
  "name": "Toy manufactured in",
  "text": "USA"
}
```

## <span class="jumptarget"> Get a Count of Custom Fields </span>

Gets a count of the number of custom fields in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/products/custom_fields/count`
*   Basic Auth
>`GET /api/v2/products/custom_fields/count`

```json
{
  "count": 0
}
```

## <span class="jumptarget"> Create a Custom Field </span>

Creates a new custom field associated with a product

*   OAuth
>`POST /stores/{store_hash}/v2/products/{product_id}/custom_fields`
*   Basic Auth
>`POST /api/v2/products/{product_id}/custom_fields`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the custom field are read-only. If one or more of these properties are included in the request, it will be rejected.

*   product_id

### <span class="jumptarget"> Requirements </span>

The following properties of the custom field are required. The request won’t be fulfilled unless these properties are valid.

*   name
*   text

```curl
{
  "name": "Release Date",
  "text": "2013-12-25"
}
```

```json
{
  "id": 5,
  "product_id": 45,
  "name": "Release Date",
  "text": "2013-12-25"
}
```

## <span class="jumptarget"> Update a Custom Field </span>

Updates an existing custom field associated with a product.

*   OAuth
>`PUT /stores/{store_hash}/v2/products/{product_id}/custom_fields/{id}`
*   Basic Auth
>`PUT /api/v2/products/{product_id}/custom_fields/{id}`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the custom field are read-only. If one or more of these properties are included in the request, it will be rejected.

*   product_id

### <span class="jumptarget"> Requirements </span>

The following properties of the custom field are required. The request won’t be fulfilled unless these properties are valid.

*   name
*   text

```curl
{
  "name": "Release Date",
  "text": "2013-12-31"
}
```

```json
{
  "id": 5,
  "product_id": 45,
  "name": "Release Date",
  "text": "2013-12-31"
}
```

## <span class="jumptarget"> Delete a Custom Field </span>

Deletes a custom field associated with a product.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/custom_fields/{id}`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/custom_fields/{id}`

## <span class="jumptarget"> Delete Multiple Custom Fields </span>

Deletes multiple custom fields associated with a product.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/custom_fields`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/custom_fields`

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 custom_fields are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/custom_fields?page={number} |
| limit | int | /api/v2/products/{product_id}/custom_fields?limit={count} |
