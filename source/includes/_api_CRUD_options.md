|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

### <span class="jumptarget"> List Options </span>

Gets the collection of options. (Default sorting is by option id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/options`
*   Basic Auth
>`GET /api/v2/options`

#### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific options in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| name | string | /api/v2/options?name={value} |
| display_name | string | /api/v2/options?display_name={value} |
| type | string | /api/v2/options?type={value} |

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 options are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/options?page={number} |
| Limit | int | /api/v2/options?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 3,
    "name": "Colors",
    "display_name": "Color",
    "type": "CS",
    "values": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/options/3/values.json",
      "resource": "/options/3/values"
    }
  },
  {
    "id": 4,
    "name": "Screen Sizes",
    "display_name": "Screen Sizes",
    "type": "RT",
    "values": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/options/4/values.json",
      "resource": "/options/4/values"
    }
  }
]
```

### <span class="jumptarget"> Get an Option </span>

Gets an option.

*   OAuth
>`GET /stores/{store_hash}/v2/options/{id}`
*   Basic Auth
>`GET /api/v2/options/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 3,
  "name": "Colors",
  "display_name": "Color",
  "type": "CS",
  "values": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/options/3/values.json",
    "resource": "/options/3/values"
  }
}
```

### <span class="jumptarget"> Get a Count of Options </span>

Gets a count of the number of options in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/options/count`
*   Basic Auth
>`GET /api/v2/options/count`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 4
}
```

### <span class="jumptarget"> Create an Option </span>

Creates a new option.

*   OAuth
>`POST /stores/{store_hash}/v2/options`
*   Basic Auth
>`POST /api/v2/options`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the option are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   values

#### <span class="jumptarget"> Requirements </span>

The following properties of the option are required. The request won’t be fulfilled unless these properties are valid.

*   name
*   type

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "name": "Color",
  "display_name": "Color",
  "type": "CS"
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 10,
  "name": "Color",
  "display_name": "Color",
  "type": "CS",
  "values": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/options/10/values.json",
    "resource": "/options/10/values"
  }
}
```

### <span class="jumptarget"> Update an Option </span>

Updates an existing option.

*   OAuth
>`PUT /stores/{store_hash}/v2/options/{id}`
*   Basic Auth
>`PUT /api/v2/options/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the option are read-only. If one or more of these properties are included in the request, it will be rejected.

*   `id`
*   `values`

#### <span class="jumptarget"> Requirements </span>

The following properties of the option are required. The request won’t be fulfilled unless these properties are valid.

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "name": "Xmen toys",
  "display_name": "xmen extreme toys",
  "type": "T"
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 18,
  "name": "Xmen toys",
  "display_name": "xmen extreme toys",
  "type": "T",
  "values": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/options/18/values.json",
    "resource": "/options/18/values"
  }
}
```

### <span class="jumptarget"> Delete an Option </span>

Deletes an option.

*   OAuth
>`DELETE /stores/{store_hash}/v2/options/{id}`
*   Basic Auth
>`DELETE /api/v2/options/{id}`

### <span class="jumptarget"> Delete All Options </span>

Deletes all options from the store.

*   OAuth
>`DELETE /stores/{store_hash}/v2/options`
*   Basic Auth
>`DELETE /api/v2/options`
