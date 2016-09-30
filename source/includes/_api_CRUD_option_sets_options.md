|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

### <span class="jumptarget"> List Option Set Options </span>

Gets the options associated with an option set. (Default sorting is by option id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/option_sets/{option_set_id}/options`
*   Basic Auth
>`GET /api/v2/option_sets/{option_set_id}/options`

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 option_set_options are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/option_sets/{option_set_id}/options?page={number} |
| Limit | int | /api/v2/option_sets/{option_set_id}/options?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 43,
    "option_id": 18,
    "option_set_id": 14,
    "display_name": "Size",
    "sort_order": 0,
    "is_required": true,
    "option": {
      "url": "https://example.com/api/v2/options/18.json",
      "resource": "/options/18"
    },
    "values": [
      {
        "label": "XS",
        "sort_order": 0,
        "value": "XS",
        "option_value_id": 68
      },
      {
        "label": "S",
        "sort_order": 1,
        "value": "S",
        "option_value_id": 69
      },
      {
        "label": "M",
        "sort_order": 2,
        "value": "M",
        "option_value_id": 70
      },
      {
        "label": "L",
        "sort_order": 3,
        "value": "L",
        "option_value_id": 71
      },
      {
        "label": "XL",
        "sort_order": 4,
        "value": "XL",
        "option_value_id": 72
      }
    ]
  },
  {
    "id": 44,
    "option_id": 3,
    "option_set_id": 14,
    "display_name": "Color",
    "sort_order": 1,
    "is_required": true,
    "option": {
      "url": "https://example.com/api/v2/options/3.json",
      "resource": "/options/3"
    },
    "values": [
      {
        "label": "Silver",
        "sort_order": 1,
        "value": "#cccccc",
        "option_value_id": 7
      },
      {
        "label": "Black",
        "sort_order": 2,
        "value": "#000000",
        "option_value_id": 8
      },
      {
        "label": "Purple",
        "sort_order": 3,
        "value": "#700170",
        "option_value_id": 9
      }
    ]
  }
]
```

### <span class="jumptarget"> Get an Option Set Option </span>

Gets an option set option.

*   OAuth
>`GET /stores/{store_hash}/v2/option_sets/{option_set_id}/options/{id}`
*   Basic Auth
>`GET /api/v2/option_sets/{option_set_id}/options/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 4,
  "option_id": 5,
  "option_set_id": 2,
  "display_name": "Clock Speeds (CPU)",
  "sort_order": 0,
  "is_required": true,
  "option": {
    "url": "https://example.com/api/v2/options/5.json",
    "resource": "/options/5"
  }
}
```

### <span class="jumptarget"> Create an Option Set Option </span>

Creates a new option associated with an option set.

*   OAuth
>`POST /stores/{store_hash}/v2/option_sets/{option_set_id}/options`
*   Basic Auth
>`POST /api/v2/option_sets/{option_set_id}/options`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the option set option are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   option_set_id
*   values
*   option

#### <span class="jumptarget"> Requirements </span>

The following properties of the option set option are required. The request won’t be fulfilled unless these properties are valid.

*   option_id

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "option_id": 10,
  "display_name": "Choose a color",
  "sort_order": 1,
  "is_required": true
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 2,
  "option_id": 10,
  "option_set_id": 1,
  "display_name": "Choose a color",
  "sort_order": 1,
  "is_required": true,
  "option": {
    "url": "https://example.com/api/v2/options/10.json",
    "resource": "/options/10"
  }
}
```

### <span class="jumptarget"> Update an Option Set Option </span>

Updates an existing option set option.

*   OAuth
>`PUT /stores/{store_hash}/v2/option_sets/{option_set_id}/options/{id}`
*   Basic Auth
>`PUT /api/v2/option_sets/{option_set_id}/options/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the option set option are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   option_id
*   option_set_id
*   values
*   option

#### <span class="jumptarget"> Requirements </span>

The following properties of the option set option are required. The request won’t be fulfilled unless these properties are valid.

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "display_name": "Pick a color...",
  "sort_order": 2,
  "is_required": false
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 2,
  "option_id": 10,
  "option_set_id": 2,
  "display_name": "Pick a color...",
  "sort_order": 2,
  "is_required": false,
  "option": {
    "url": "https://example.com/api/v2/options/10.json",
    "resource": "/options/10"
  }
}
```

### <span class="jumptarget"> Delete an Option Set Option </span>

Deletes an option belonging to an option set.

*   OAuth
>`DELETE /stores/{store_hash}/v2/option_sets/{option_set_id}/options/{id}`
*   Basic Auth
>`DELETE /api/v2/option_sets/{option_set_id}/options/{id}`

### <span class="jumptarget"> Delete Multiple Option Set Options </span>

Deletes multiple options associated with an option set.

*   OAuth
>`DELETE /stores/{store_hash}/v2/option_sets/{option_set_id}/options`
*   Basic Auth
>`DELETE /api/v2/option_sets/{option_set_id}/options`

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 option_set_options are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/option_sets/{option_set_id}/options?page={number} |
| Limit | int | /api/v2/option_sets/{option_set_id}/options?limit={count} |
