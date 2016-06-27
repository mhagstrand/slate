|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

## <span class="jumptarget"> List Option Values </span>

Gets the values belonging to an option. (Default sorting is by option-value id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/options/{option_id}/values`
*   Basic Auth
>`GET /api/v2/options/{option_id}/values`

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 option_values are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/options/{option_id}/values?page={number} |
| Limit | int | /api/v2/options/{option_id}/values?limit={count} |

```json
[
  {
    "id": 1,
    "option_id": 3,
    "label": "Silver",
    "sort_order": 2,
    "value": "#cccccc",
    "is_default": true
  },
  {
    "id": 2,
    "option_id": 3,
    "label": "Black",
    "sort_order": 1,
    "value": "#000000",
    "is_default": false
  }
]
```

## <span class="jumptarget"> Get an Option Value </span>

Gets an option value.

*   OAuth
>`GET /stores/{store_hash}/v2/options/{option_id}/values/{id}`
*   Basic Auth
>`GET /api/v2/options/{option_id}/values/{id}`

```json
{
  "id": 9,
  "option_id": 3,
  "label": "Purple",
  "sort_order": 3,
  "value": "#700170",
  "is_default": false
}
```

## <span class="jumptarget"> Create an Option Value </span>

Creates a new option value.

*   OAuth
>`POST /stores/{store_hash}/v2/options/{option_id}/values`
*   Basic Auth
>`POST /api/v2/options/{option_id}/values`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the option value are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   option_id

### <span class="jumptarget"> Requirements </span>

The following properties of the option value are required. The request won’t be fulfilled unless these properties are valid.

*   label
*   value

### <span class="jumptarget"> Notes </span>

To maximize system performance, BigCommerce caps the total number of values per option at 250. IF the option has 250 values and you try to create another one, Bigcommerce will return a 403 error.

When you POST an `is_default`property of `true`, all other option values on the parent option will have their `is_default` property set to `false`.

```curl
{
  "label": "white",
  "sort_order": 0,
  "value": "#FFFFFF",
  "is_default": true
}
```

```json
{
  "id": 68,
  "option_id": 3,
  "label": "white",
  "sort_order": 0,
  "value": "#FFFFFF",
  "is_default": true
}
```

## <span class="jumptarget"> Update an Option Value </span>

Updates an existing option value.

*   OAuth
>`PUT /stores/{store_hash}/v2/options/{option_id}/values/{id}`
*   Basic Auth
>`PUT /api/v2/options/{option_id}/values/{id}`

### <span class="jumptarget"> Read-only Properties

The following properties of the option value are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   option_id

### <span class="jumptarget"> Requirements </span>

The following properties of the option value are required. The request won’t be fulfilled unless these properties are valid.

### <span class="jumptarget"> Notes

When you PUT an `is_default` property of `true`, all other option values on the parent option will have their `is_default` property set to `false`.

```curl
{
  "label": "whitish",
  "sort_order": 1,
  "value": "#FFFFEF",
  "is_default": true
}
```

```json
{
  "id": 68,
  "option_id": 3,
  "label": "whitish",
  "sort_order": 1,
  "value": "#FFFFEF",
  "is_default": true
}
```

## <span class="jumptarget"> Delete an Option Value </span>

Deletes an option value.

*   OAuth
>`DELETE /stores/{store_hash}/v2/options/{option_id}/values/{id}`
*   Basic Auth
>`DELETE /api/v2/options/{option_id}/values/{id}`

## <span class="jumptarget"> Delete Multiple Option Values </span>

Deletes multiple values belonging to an option.

*   OAuth
>`DELETE /stores/{store_hash}/v2/options/{option_id}/values`
*   Basic Auth
>`DELETE /api/v2/options/{option_id}/values`

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 option_values are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/options/{option_id}/values?page={number} |
| Limit | int | /api/v2/options/{option_id}/values?limit={count} |
