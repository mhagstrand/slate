|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

## <span class="jumptarget"> List Product Videos </span>

Gets the videos associated with a product.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/videos`
*   Basic Auth
>`GET /api/v2/products/{product_id}/videos`

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 `product_videos` are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/videos?page={number} |
| limit | int | /api/v2/products/{product_id}/videos?limit={count} |

```json
[
  {
    "id": "UmhvxsOwhqk",
    "product_id": 30,
    "sort_order": 0,
    "name": "X-Men Evolution: Season 1, Episode 1"
  }
]
```

## <span class="jumptarget"> Get a Product Video </span>

Gets a product video.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/videos/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/videos/{id}`

## <span class="jumptarget"> Get a Count of Product Videos </span>

Gets a count of the number of product videos in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/products/videos/count`
*   Basic Auth
>`GET /api/v2/products/videos/count`

```json
{
  "count": 0
}
```

## <span class="jumptarget"> Create a Product Video </span>

Adds a link to a YouTube video to a product.

*   OAuth
>`POST /stores/{store_hash}/v2/products/{product_id}/videos`
*   Basic Auth
>`POST /api/v2/products/{product_id}/videos`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the product video are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id

### <span class="jumptarget"> Requirements </span>

The following properties of the product video are required. The request won’t be fulfilled unless these properties are valid.

*   url

### <span class="jumptarget"> Notes </span>

Only YouTube videos are supported. To create a new video, pass the full `url` in the request body.

```curl
{
  "url": "https://www.youtube.com/watch?v=4wZ3ZG_Wams"
}
```

## <span class="jumptarget"> Update Product Video Metadata </span>

Edit the metadata of a product video.

*   OAuth
>`PUT /stores/{store_hash}/v2/products/{product_id}/videos/{id}`
*   Basic Auth
>`PUT /api/v2/products/{product_id}/videos/{id}`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the product video are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id

### <span class="jumptarget"> Requirements </span>

There are no required properties when updating a product video. 

### <span class="jumptarget"> Notes </span>

The `name`, `sort_order` and `url` properties of the product video are editable.

Posting a new `url` will update the `id` of the video to reference the new video.

```curl
{
  "name": "New video title",
  "sort_order": 2
}
```

## <span class="jumptarget"> Delete a Product Video </span>

Delete a product video.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/videos/{id}`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/videos/{id}`

## <span class="jumptarget"> Delete All Product Videos </span>

Deletes all videos belonging to a product.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/videos`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/videos`
