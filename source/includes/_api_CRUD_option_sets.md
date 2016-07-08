|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

## <span class="jumptarget"> List Option Sets  </span>

Gets the collection of option sets. (Default sorting is by option-set id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/option_sets`
*   Basic Auth
>`GET /api/v2/option_sets`

### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific option_sets in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| name | string | /api/v2/option_sets?name={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 option_sets are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/option_sets?page={number} |
| Limit | int | /api/v2/option_sets?limit={count} |

```json
[
  {
    "id": 1,
    "name": "MacBook",
    "options": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/optionsets/1/options.json",
      "resource": "/optionsets/1/options"
    }
  },
  {
    "id": 2,
    "name": "PixelSkin Case",
    "options": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/optionsets/2/options.json",
      "resource": "/optionsets/2/options"
    }
  }
]
```

## <span class="jumptarget"> Get an Option Set </span>

Gets an option set.

*   OAuth
>`GET /stores/{store_hash}/v2/option_sets/{id}`
*   Basic Auth
>`GET /api/v2/option_sets/{id}`

```json
{
  "id": 10,
  "name": "T-Shirt Facets",
  "options": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/optionsets/10/options.json",
    "resource": "/optionsets/13/options"
  }
}
```

## <span class="jumptarget"> Get a Count of Option Sets </span>

Gets a count of the number of option sets in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/option_sets/count`
*   Basic Auth
>`GET /api/v2/option_sets/count`

```json
{
  "count": 4
}
```

## <span class="jumptarget"> Create an Option Set </span>

Creates a new Option set.

*   OAuth
>`POST /stores/{store_hash}/v2/option_sets`
*   Basic Auth
>`POST /api/v2/option_sets`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the option set are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   options

### <span class="jumptarget"> Requirements </span>

The following properties of the option set are required. The request won’t be fulfilled unless these properties are valid.

*   name

```curl
{
  "name": "T-Shirts"
}
```

```json
{
  "id": 10,
  "name": "T-Shirts",
  "options": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/optionsets/10/options.json",
    "resource": "/optionsets/10/options"
  }
}
```

## <span class="jumptarget"> Update an Option Set </span>

Updates an existing option set.

*   OAuth
>`PUT /stores/{store_hash}/v2/option_sets/{id}`
*   Basic Auth
>`PUT /api/v2/option_sets/{id}`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the option set are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   options

### <span class="jumptarget"> Requirements </span>

The following properties of the option set are required. The request won’t be fulfilled unless these properties are valid.

*   name

```curl
{
  "name": "T-shirt Facets"
}
```

```json
{
  "id": 10,
  "name": "T-shirt Facets",
  "options": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/optionsets/10/options.json",
    "resource": "/optionsets/13/options"
  }
}
```

## <span class="jumptarget"> Delete an Option Set </span>

Deletes an option set.

*   OAuth
>`DELETE /stores/{store_hash}/v2/option_sets/{id}`
*   Basic Auth
>`DELETE /api/v2/option_sets/{id}`

## <span class="jumptarget"> Delete All Option Sets </span>

Deletes all option sets in the store.

*   OAuth
>`DELETE /stores/{store_hash}/v2/option_sets`
*   Basic Auth
>`DELETE /api/v2/option_sets`
