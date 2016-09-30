|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

### <span class="jumptarget"> List Configurable Fields </span>

Gets the collection of configurable fields associated with a product.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/configurable_fields`
*   Basic Auth
>`GET /api/v2/products/{product_id}/configurable_fields`

#### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to `configurable_fields`.

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 configurable_fields are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/configurable_fields?page={number} |
| limit | int | /api/v2/products/{product_id}/configurable_fields?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 1,
    "product_id": 30,
    "name": "Manufacturing Country",
    "type": "T",
    "allowed_file_types": "",
    "max_size": 0,
    "select_options": "",
    "is_required": true,
    "sort_order": 1
  }
]
```

### <span class="jumptarget"> Get a Configurable Field </span>

Gets a configurable field associated with a product.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/configurable_fields/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/configurable_fields/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 1,
  "product_id": 30,
  "name": "Manufacturing Country",
  "type": "T",
  "allowed_file_types": "",
  "max_size": 0,
  "select_options": "",
  "is_required": true,
  "sort_order": 1
}
```

### <span class="jumptarget"> Get a Count of Configurable Fields </span>

Gets a count of the number of configurable fields in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/products/configurable_fields/count`
*   Basic Auth
>`GET /api/v2/products/configurable_fields/count`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 0
}
```

### <span class="jumptarget"> Delete a Configurable Field </span>

Deletes a configurable field associated with a product.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/configurable_fields/{id}`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/configurable_fields/{id}`

### <span class="jumptarget"> Delete Multiple Configurable Fields </span>

Deletes multiple configurable fields associated with a product.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/configurable_fields`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/configurable_fields`

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 configurable_fields are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/configurable_fields?page={number} |
| limit | int | /api/v2/products/{product_id}/configurable_fields?limit={count} |
