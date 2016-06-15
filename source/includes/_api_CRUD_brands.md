## <span class="jumptarget"> Operations </span>

*   [List Brands](#list-brands)
*   [Get a Brand](#get-a-brand)
*   [Get a Count of Brands](#get-a-count-of-brands)
*   [Create a Brand](#create-a-brand)
*   [Update a Brand](#update-a-brand)
*   [Delete a Brand](#delete-a-brand)
*   [Delete All Brands](#delete-all-brands)

## <span class="jumptarget"> List Brands </span>

Gets the collection of brands. (Default sorting is by brand id, from lowest to highest.)

*   [OAuth](#list-brands-oauth)
>`GET /stores/{store_hash}/v2/brands`
*   [Basic Auth](#list-brands-basic)
>`GET /api/v2/brands`

### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific brands in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| name | string | /api/v2/brands?name={value} |
| min_id | int | /api/v2/brands?min_id={value} |
| max_id | int | /api/v2/brands?max_id={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, Bigcommerce returns up to 50 brands by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/brands?page={number} |
| Limit | int | /api/v2/brands?limit={count} |

```
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


## <span class="jumptarget"> Get a Brand </span>

Gets a brand.

*   [OAuth](#get-a-brand-oauth)
>`GET /stores/{store_hash}/v2/brands/{id}`
*   [Basic Auth](#get-a-brand-basic)
>`GET /api/v2/brands/{id}`

```
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


## <span class="jumptarget"> Get a Count of Brands </span>

Returns the total number of brands in the store.

*   [OAuth](#get-a-count-of-brands-oauth)
>`GET /stores/{store_hash}/v2/brands/count`
*   [Basic Auth](#get-a-count-of-brands-basic)
>`GET /api/v2/brands/count`

```
{
  "count": 25
}
```


## <span class="jumptarget"> Create a Brand </span>

Creates a new brand.


*   [OAuth](#create-a-brand-oauth)
>`POST /stores/{store_hash}/v2/brands`
*   [Basic Auth](#create-a-brand-basic)
>`POST /api/v2/brands`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the brand are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id

### <span class="jumptarget"> Requirements </span>

The following properties of the brand are required. The request won’t be fulfilled unless these properties are valid.

*   name

### <span class="jumptarget"> Notes </span>

To maximize system performance, Bigcommerce caps the number of brands that can be added to a store at 30,000. If your POST causes the store to exceed the maximum of 30,000 brands, Bigcommerce will return a 403 error.

```
{
  "name": "Xmen",
  "page_title": "X men brand"
}
```


```
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


## <span class="jumptarget"> Update a Brand </span>

Updates an existing brand.

*   [OAuth](#update-a-brand-oauth)
>`PUT /stores/{store_hash}/v2/brands/{id}`
*   [Basic Auth](#update-a-brand-basic)
>`PUT /api/v2/brands/{id}`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the brand are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id

### <span class="jumptarget"> Requirements </span>

The following properties of the brand are required. The request won’t be fulfilled unless these properties are valid.

```
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


## <span class="jumptarget"> Delete a Brand </span>

Deletes a brand.

*   [OAuth](#delete-a-brand-oauth)
">`DELETE /stores/{store_hash}/v2/brands/{id}`
*   [Basic Auth](#delete-a-brand-basic)
>`DELETE /api/v2/brands/{id}`

## <span class="jumptarget"> Delete All Brands </span>

Deletes all brands belonging to a product.

*   [OAuth](#delete-all-brands-oauth)
>`DELETE /stores/{store_hash}/v2/brands`
*   [Basic Auth](#delete-all-brands-basic)
>`DELETE /api/v2/brands`
