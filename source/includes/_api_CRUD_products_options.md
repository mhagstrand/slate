|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

## <span class="jumptarget"> List Product Options </span>

Gets the options associated with a product.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/options`
*   Basic Auth
>`GET /api/v2/products/{product_id}/options`

### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to product options. 

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 product_options are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/options?page={number} |
| limit | int | /api/v2/products/{product_id}/options?limit={count} |

```json
[
  {
    "id": 13,
    "option_id": 8,
    "display_name": "iPod Capacities",
    "sort_order": 0,
    "is_required": true
  },
  {
    "id": 14,
    "option_id": 9,
    "display_name": "Accessories",
    "sort_order": 1,
    "is_required": false
  }
]
```

## <span class="jumptarget"> Get a Product Option </span>

Gets an option associated with a product.

*   OAuth
">`GET /stores/{store_hash}/v2/products/{product_id}/options/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/options/{id}`

```json
{
  "id": 14,
  "option_id": 9,
  "display_name": "Accessories",
  "sort_order": 1,
  "is_required": false
}
```