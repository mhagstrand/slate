|||
|---|---|
| Manages | Product Image Object |
| OAuth Scopes | store_v2_products|
||store_v2_products_read_only|

### <span class="jumptarget"> List Product Images </span>

Gets the images associated with a product. (Default sorting is by image id, from lowest to highest.)

*   OAuth
>GET /stores/{store_hash}/v2/products/{product_id}/images
*   Basic Auth
>GET /api/v2/products/{product_id}/images

#### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to product images.

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 product_images are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/images?page={number} |
| limit | int | /api/v2/products/{product_id}/images?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 247,
    "product_id": 32,
    "image_file": "sample_images/in_123__14581.jpg",
    "zoom_url": "https://cdn.url.path/bcapp/et7xe3pz/products/32/images/247/in_123__14581.1393831046.1280.1280.jpg?c=1",
    "thumbnail_url": "https://cdn.url.path/bcapp/et7xe3pz/products/32/images/247/in_123__14581.1393831046.386.513.jpg?c=1",
    "standard_url": "https://cdn.url.path/bcapp/et7xe3pz/products/32/images/247/in_123__14581.1393831046.220.290.jpg?c=1",
    "tiny_url": "https://cdn.url.path/bcapp/et7xe3pz/products/32/images/247/in_123__14581.1393831046.44.58.jpg?c=1",
    "is_thumbnail": true,
    "sort_order": 0,
    "description": null,
    "date_created": "Mon, 24 Sep 2012 01:14:30 +0000"
  },
  {
    "id": 248,
    "product_id": 32,
    "image_file": "sample_images/in_122__93910.jpg",
    "zoom_url": "https://cdn.url.path/bcapp/et7xe3pz/products/32/images/248/in_122__93910.1393831046.1280.1280.jpg?c=1",
    "thumbnail_url": "https://cdn.url.path/bcapp/et7xe3pz/products/32/images/248/in_122__93910.1393831046.386.513.jpg?c=1",
    "standard_url": "https://cdn.url.path/bcapp/et7xe3pz/products/32/images/248/in_122__93910.1393831046.220.290.jpg?c=1",
    "tiny_url": "https://cdn.url.path/bcapp/et7xe3pz/products/32/images/248/in_122__93910.1393831046.44.58.jpg?c=1",
    "is_thumbnail": false,
    "sort_order": 1,
    "description": null,
    "date_created": "Mon, 24 Sep 2012 01:17:14 +0000"
  }
]
```

### <span class="jumptarget"> Get a Product Image </span>

Gets a product image.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/images/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/images/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 248,
  "product_id": 32,
  "image_file": "sample_images/in_122__93910.jpg",
  "zoom_url": "https://cdn.bcapp.dev/bcapp/et7xe3pz/products/32/images/248/in_122__93910.1393831046.1280.1280.jpg?c=1",
  "thumbnail_url": "https://cdn.bcapp.dev/bcapp/et7xe3pz/products/32/images/248/in_122__93910.1393831046.386.513.jpg?c=1",
  "standard_url": "https://cdn.bcapp.dev/bcapp/et7xe3pz/products/32/images/248/in_122__93910.1393831046.220.290.jpg?c=1",
  "tiny_url": "https://cdn.bcapp.dev/bcapp/et7xe3pz/products/32/images/248/in_122__93910.1393831046.44.58.jpg?c=1",
  "is_thumbnail": false,
  "sort_order": 1,
  "description": null,
  "date_created": "Mon, 24 Sep 2012 01:17:14 +0000"
}
```

### <span class="jumptarget"> Get a Count of Product Images </span>

Gets a count of the number of product images in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/products/images/count`
*   Basic Auth
>`GET /api/v2/products/images/count`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 105
}
```

### <span class="jumptarget"> Create a Product Image </span>

Creates a new product image.

*   OAuth
>`POST /stores/{store_hash}/v2/products/{product_id}/images`
*   Basic Auth
>`POST /api/v2/products/{product_id}/images`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the product image are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   date_created
*   product_id

#### <span class="jumptarget"> Requirements </span>

The following properties of the product image are required. The request won’t be fulfilled unless these properties are valid.

*   image_file

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 116,
  "product_id": 29,
  "image_file": "p/022/astonishing-x-men-1-100k__36562.jpg",
  "is_thumbnail": false,
  "sort_order": 0,
  "description": "",
  "date_created": "Fri, 21 Dec 2012 18:54:04 +0000"
}
```

### <span class="jumptarget"> Update a Product Image </span>

Updates an existing product image.

*   OAuth
>`PUT /stores/{store_hash}/v2/products/{product_id}/images/{id}`
*   Basic Auth
>`PUT /api/v2/products/{product_id}/images/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the product image are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id
*   date_created

#### <span class="jumptarget"> Requirements </span>

The following properties of the product image are required. The request won’t be fulfilled unless these properties are valid.

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 118,
  "product_id": 30,
  "image_file": "k/392/ud2vk0n1l0zcfr7gtlqi__43888.png",
  "is_thumbnail": false,
  "sort_order": 1,
  "description": "",
  "date_created": "Fri, 21 Dec 2012 19:01:03 +0000"
}
```

### <span class="jumptarget"> Delete a Product Image </span>

Deletes a product image.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/images/{id}`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/images/{id}`

### <span class="jumptarget"> Delete Multiple Product Images </span>

Deletes multiple product images.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/images`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/images`

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 `product_images` are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/products/{product_id}/images?page={number} |
| Limit | int | /api/v2/products/{product_id}/images?limit={count} |
