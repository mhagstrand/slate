|||
|---|---|
| **Manages** | Product Review Object|
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

### <span class="jumptarget"> List Product Reviews </span>

Gets the reviews associated with a product. (Default sorting is by review id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/products/{id}/reviews`
*   Basic Auth
>`GET /api/v2/products/{id}/reviews`

#### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to product reviews. 

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 product_reviews are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/reviews?page={number} |
| limit | int | /api/v2/products/{product_id}/reviews?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 190,
    "product_id": 5310,
    "author": "John Doe",
    "date_created": "Wed, 12 Dec 2012 06:00:00 +0000",
    "title": "My experience with the widget",
    "review": "This widget worked for me, but might not work for everyone.",
    "rating": 4,
    "status": 1
  },
  {
    "id": 191,
    "product_id": 5310,
    "author": "Jane Doe",
    "date_created": "Tue, 12 Nov 2013 06:00:00 +0000",
    "title": "Great product, slow shipping",
    "review": "Took two weeks to arrive",
    "rating": 3,
    "status": 1
  },
  {
    "id": 192,
    "product_id": 5310,
    "author": "Jimmy Doe",
    "date_created": "Fri, 14 Dec 2012 06:00:00 +0000",
    "title": "Worked for me!",
    "review": "I thought this product was pretty good",
    "rating": 5,
    "status": 1
  }
]
```

### <span class="jumptarget"> Get a Product Review </span>

Gets a product review.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/reviews/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/reviews/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 190,
  "product_id": 5310,
  "author": "John Doe",
  "date_created": "Wed, 12 Dec 2012 06:00:00 +0000",
  "title": "My experience with the widget",
  "review": "This widget worked for me, but might not work for everyone.",
  "rating": 4,
  "status": 1
}
```

### <span class="jumptarget"> Create a Product Review </span>

Creates a new product review. 

#### <span class="jumptarget"> Notes </span>

The `review` property is the review's text. The `rating` property must be a whole number between 1–5. If the optional `date_created` property is not specified, it defaults to the current date/time. If the optional "status" property is not specified, it defaults to 0 [`Pending`]. Other allowable values are 1 [`Approved`] or 2 [`Disapproved`].)

*   OAuth
>`POST /stores/{store_hash}/v2/products/{product_id}/reviews`
*   Basic Auth
>`POST /api/v2/products/{product_id}/reviews`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the product review are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id

#### <span class="jumptarget"> Requirements </span>

The following properties of the product review are required. The request won’t be fulfilled unless these properties are valid.

*   author
*   title
*   review
*   rating

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 8,
  "product_id": 32,
  "author": "Jimmy Doe",
  "date_created": "Tue, 05 Mar 2013 06:00:00 +0000",
  "title": "Worked for me!",
  "review": "I thought this product was pretty good",
  "rating": 5,
  "status": 0
}
```

### <span class="jumptarget"> Update a Product Review </span>

Updates an existing product review. Your request may update any of the properties that are writeable for the Create (POST) operation.

*   OAuth
>`PUT /stores/{store_hash}/v2/products/{product_id}/reviews/{id}`
*   Basic Auth
>`PUT /api/v2/products/{product_id}/reviews/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the product review are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 8,
  "product_id": 32,
  "author": "Jimmy Doe",
  "date_created": "Tue, 05 Mar 2013 06:00:00 +0000",
  "title": "Worked for me!",
  "review": "I thought this product was pretty good",
  "rating": 5,
  "status": 1
}
```

### <span class="jumptarget"> Delete a Product Review </span>

Deletes a specified product review. (If successful, this will typically return a `204 No Content`.)

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/reviews/{id}`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/reviews/{id}`

### <span class="jumptarget"> Delete All Product Reviews </span>

Deletes all reviews for the specified product. (If successful, this will typically return a `204 No Content`.)

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/reviews`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/reviews`
