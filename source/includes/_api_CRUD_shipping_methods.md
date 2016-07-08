|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_information
||store_v2_information_read_only

## <span class="jumptarget"> List Shipping Methods </span>

Gets the list of shipping methods. (Default sorting is by shipping-method id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/shipping/methods`
*   Basic Auth
>`GET /api/v2/shipping/methods`

### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific shipping_methods in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| id | string | /api/v2/shipping/methods?id={value} |
| min_id | int | /api/v2/shipping/methods?min_id={value} |
| max_id | int | /api/v2/shipping/methods?max_id={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 shipping_methods are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/shipping/methods?page={number} |
| Limit | int | /api/v2/shipping/methods?limit={count} |

```json
[
  {
    "id": 1,
    "name": "Australia Post",
    "method_name": "shipping_auspost"
  }
]
```

## <span class="jumptarget"> Get a Shipping Method </span>

Gets a shipping method.

*   OAuth
>`GET /stores/{store_hash}/v2/shipping/methods/{id}`
*   Basic Auth
>`GET /api/v2/shipping/methods/{id}`

```json
{
  "id": 1,
  "name": "Australia Post",
  "method_name": "shipping_auspost"
}
```
