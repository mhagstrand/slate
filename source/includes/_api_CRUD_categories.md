|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

## <span class="jumptarget"> List Categories </span>

Gets the list of categories. (Default sorting is by category id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/categories`
*   Basic Auth
>`GET /api/v2/categories`


### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific categories in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| parent_id | string | /api/v2/categories?parent_id={value} |
| name | string | /api/v2/categories?name={value} |
| is_visible | string | /api/v2/categories?is_visible={value} |
| min_id | int | /api/v2/categories?min_id={value} |
| max_id | int | /api/v2/categories?max_id={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 categories are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/categories?page={number} |
| Limit | int | /api/v2/categories?limit={count} |

### Response

Example JSON returned in the response:

```json
[
  {
    "id": 1,
    "parent_id": 0,
    "name": "Shop Mac",
    "description": "",
    "sort_order": 0,
    "page_title": "",
    "meta_keywords": "",
    "meta_description": "",
    "layout_file": "category.html",
    "parent_category_list": [
      1
    ],
    "image_file": "",
    "is_visible": true,
    "search_keywords": "",
    "url": "/shop-mac/"
  }
]
```

## <span class="jumptarget"> Get a Category </span>

Gets a single category.

*   OAuth
>`GET /stores/{store_hash}/v2/categories/{id}`
*   Basic Auth
>`GET /api/v2/categories/{id}`

### Response

Example JSON returned in the response:

```json
{
  "id": 10,
  "parent_id": 1,
  "name": "Xmen toys",
  "description": "",
  "sort_order": 2,
  "page_title": "",
  "meta_keywords": null,
  "meta_description": null,
  "layout_file": "category.html",
  "parent_category_list": [
    1,
    10
  ],
  "image_file": "d/apiy2uz6q__69888.jpg",
  "is_visible": true,
  "search_keywords": "",
  "url": "/xmen-toys/"
}
```


## <span class="jumptarget"> Get a Count of Categories </span>

Gets a count of the total number of categories in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/categories/count`
*   Basic Auth
>`GET /api/v2/categories/count`

### Response

Example JSON returned in the response:

```json
{
  "count": 10
}
```

## <span class="jumptarget"> Create a Category </span>

Creates a new category.

*   OAuth
>`POST /stores/{store_hash}/v2/categories`
*   Basic Auth
>`POST /api/v2/categories`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the category are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   parent_category_list

### <span class="jumptarget"> Requirements </span>

The following properties of the category are required. The request won’t be fulfilled unless these properties are valid.

*   name

### <span class="jumptarget"> Notes </span>

To maximize system performance, Bigcommerce caps the number of categories that can be added to a store at 16,000. If your `POST` causes the store to exceed the maximum of 16,000 categories, Bigcommerce will return a 403 error.

In addition, Bigcommerce caps the total number of parent categories at seven. If your `POST` includes the ID of a parent category in the `parent_id` field, Bigcommerce will check that parent category and its parent and so on to determine the total number of parent categories. If your `POST` would cause the total number of parent categories to exceed seven, Bigcommerce will return a 403 error.

### Request

Example request object:

```json
{
  "name": "Xmen toys"
}
```

### Response

Example JSON returned in the response:

```json
{
  "id": 10,
  "parent_id": 1,
  "name": "Xmen toys",
  "description": "",
  "sort_order": 2,
  "page_title": "",
  "meta_keywords": null,
  "meta_description": null,
  "layout_file": "category.html",
  "parent_category_list": [
    1,
    10
  ],
  "image_file": "d/apiy2uz6q__69888.jpg",
  "is_visible": true,
  "search_keywords": "",
  "url": "/xmen-toys/"
}
```

## <span class="jumptarget"> Update a Category </span>

Updates an existing category.

*   OAuth
>`PUT /stores/{store_hash}/v2/categories/{id}`
*   Basic Auth
>`PUT /api/v2/categories/{id}`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the category are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   parent_category_list

### <span class="jumptarget"> Requirements </span>

The following properties of the category are required. The request won’t be fulfilled unless these properties are valid.

### <span class="jumptarget"> Notes </span>

To maximize system performance, Bigcommerce caps the total number of parent categories at seven. If your `PUT` includes the ID of a parent category in the `parent_id` field, Bigcommerce will check the parent and any children of the current category to determine the total number of parent categories. If your `PUT` would cause the total number of parent categories to exceed the maximum of seven, Bigcommerce will return a 403 error.

### Response

Example JSON returned in the response:

```json
{
  "id": 10,
  "parent_id": 1,
  "name": "Xmen toys",
  "description": "",
  "sort_order": 2,
  "page_title": "",
  "meta_keywords": null,
  "meta_description": null,
  "layout_file": "category.html",
  "parent_category_list": [
    1,
    10
  ],
  "image_file": "d/apiy2uz6q__69888.jpg",
  "is_visible": true,
  "search_keywords": "",
  "url": "/xmen-toys/"
}
```

## <span class="jumptarget"> Delete a Category </span>

Deletes a category.

*   OAuth
>`DELETE /stores/{store_hash}/v2/categories/{id}`
*   Basic Auth
>`DELETE /api/v2/categories/{id}`

## <span class="jumptarget"> Delete All Categories </span>

Deletes all the categories in the store.

*   OAuth
>`DELETE /stores/{store_hash}/v2/categories`
*   Basic Auth
>`DELETE /api/v2/categories`

<aside class="warning">
<span class="aside-warning-hd">Delete Products before Categories</span>
<br><br>
The Delete All Categories operation will not succeed unless the store has zero products. If any products in the store belong to any categories, the entire operation will fail. Therefore, if you really want to delete all the categories of the store, you must first delete all of the products in the store.
</aside>