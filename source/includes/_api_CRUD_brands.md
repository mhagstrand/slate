|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

### <span class="jumptarget"> List Brands </span>

Gets the collection of brands. (Default sorting is by brand id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/brands`
*   Basic Auth
>`GET /api/v2/brands`

#### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific brands in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| name | string | /api/v2/brands?name={value} |
| min_id | int | /api/v2/brands?min_id={value} |
| max_id | int | /api/v2/brands?max_id={value} |

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, BigCommerce returns up to 50 brands by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/brands?page={number} |
| Limit | int | /api/v2/brands?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 1,
    "name": "Apple",
    "page_title": "",
    "meta_keywords": "",
    "meta_description": "",
    "image_file": "",
    "search_keywords": ""
  },
  {
    "id": 2,
    "name": "Microsoft",
    "page_title": "",
    "meta_keywords": "",
    "meta_description": "",
    "image_file": "",
    "search_keywords": ""
  }
]
```


### <span class="jumptarget"> Get a Brand </span>

Gets a brand.

*   OAuth
>`GET /stores/{store_hash}/v2/brands/{id}`
*   Basic Auth
>`GET /api/v2/brands/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 1,
  "name": "Apple",
  "page_title": "",
  "meta_keywords": "",
  "meta_description": "",
  "image_file": "",
  "search_keywords": ""
}
```


### <span class="jumptarget"> Get a Count of Brands </span>

Returns the total number of brands in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/brands/count`
*   Basic Auth
>`GET /api/v2/brands/count`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 25
}
```

### <span class="jumptarget"> Create a Brand </span>

Creates a new brand.

*   OAuth
>`POST /stores/{store_hash}/v2/brands`
*   Basic Auth
>`POST /api/v2/brands`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the brand are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id

#### <span class="jumptarget"> Requirements </span>

The following properties of the brand are required. The request won’t be fulfilled unless these properties are valid.

*   name

#### <span class="jumptarget"> Notes </span>

To maximize system performance, BigCommerce caps the number of brands that can be added to a store at 30,000. If your POST causes the store to exceed the maximum of 30,000 brands, BigCommerce will return a 403 error.

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "name": "Xmen",
  "page_title": "X men brand"
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 10,
  "name": "Xmen",
  "page_title": "X men brand",
  "meta_keywords": null,
  "meta_description": null,
  "image_file": "",
  "search_keywords": ""
}
```

### <span class="jumptarget"> Update a Brand </span>

Updates an existing brand.

*   OAuth
>`PUT /stores/{store_hash}/v2/brands/{id}`
*   Basic Auth
>`PUT /api/v2/brands/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the brand are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id

#### <span class="jumptarget"> Requirements </span>

The following properties of the brand are required. The request won’t be fulfilled unless these properties are valid.

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 10,
  "name": "Xmen",
  "page_title": "X men brand",
  "meta_keywords": null,
  "meta_description": null,
  "image_file": "t/apirmzk0a__43675.jpg",
  "search_keywords": "xmen, awesomeness"
}
```

### <span class="jumptarget"> Delete a Brand </span>

Deletes a brand.

*   OAuth
">`DELETE /stores/{store_hash}/v2/brands/{id}`
*   Basic Auth
>`DELETE /api/v2/brands/{id}`

### <span class="jumptarget"> Delete All Brands </span>

Deletes all brands belonging to a product.

*   OAuth
>`DELETE /stores/{store_hash}/v2/brands`
*   Basic Auth
>`DELETE /api/v2/brands`
