|||
|---|---|
| Manages |
| OAuth Scopes | store_v2_products
||store_v2_products_read_only

### <span class="jumptarget"> List Bulk Pricing Rules </span>

Gets the collection of product bulk pricing rules.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/discount_rules`
*   Basic Auth
>`GET /api/v2/products/{product_id}/discount_rules`

#### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to `discount_rules`.

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 bulk_pricing_rules are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/discount_rules?page={number} |
| limit | int | /api/v2/products/{product_id}/discount_rules?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": "1",
    "product_id": 30,
    "min": 100,
    "max": 500,
    "type": "price",
    "type_value": 2
  }
]
```

### <span class="jumptarget"> Get a Product Bulk Pricing Rule </span>

Gets a product bulk pricing rule.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/discount_rules/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/discount_rules/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": "1",
  "product_id": 30,
  "min": 100,
  "max": 500,
  "type": "price",
  "type_value": 2
}
```

### <span class="jumptarget"> Get a Count of Bulk Pricing Rules </span>

Gets a count of the number of bulk pricing rules in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/products/discount_rules/count`
*   Basic Auth
>`GET /api/v2/products/discount_rules/count`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 9
}
```

### <span class="jumptarget"> Create a Product Bulk Pricing Rule </span>

Creates a new product bulk pricing rule.

*   OAuth
>`POST /stores/{store_hash}/v2/products/{product_id}/discount_rules`
*   Basic Auth
>`POST /api/v2/products/{product_id}/discount_rules`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the discount rule are read-only. If one or more of these properties are included in the request, it will be rejected.

*   product_id

#### <span class="jumptarget"> Requirements </span>

The following properties of the discount rule are required. The request won’t be fulfilled unless these properties are valid.

*   type
*   type_value

#### <span class="jumptarget"> Notes </span>

To specify that a `min` or `max` value is unbounded, these properties must be explicitly set with a value of `0`. If neither `min` nor `max` properties are included in the request, the existing value will remain unchanged.

The range of the `min` and `max` values must not overlap an existing rule associated with the same product.

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "min": 100,
  "max": 500,
  "type": "price",
  "type_value": 2
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": "1",
  "product_id": 30,
  "min": 100,
  "max": 500,
  "type": "price",
  "type_value": 2
}
```

### <span class="jumptarget"> Update a Product Bulk Pricing Rule </span>

Updates an existing product bulk pricing rule.

*   OAuth
>`PUT /stores/{store_hash}/v2/products/{product_id}/discount_rules/{id}`
*   Basic Auth
>`PUT /api/v2/products/{product_id}/discount_rules/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the discount rule are read-only. If one or more of these properties are included in the request, it will be rejected.

*   product_id

#### <span class="jumptarget"> Requirements </span>

The following properties of the discount rule are required. The request won’t be fulfilled unless these properties are valid.

*   type
*   type_value

#### <span class="jumptarget"> Notes </span>

To specify that a `min` or `max` value is unbounded, these properties must be explicitly set with a value of `0`. If neither `min` nor `max` properties are included in the request, the existing value will remain unchanged.

The range of the `min` and `max` values must not overlap an existing rule associated with the same product.

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "min": 200,
  "max": 300,
  "type": "fixed",
  "type_value": 10
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": "1",
  "product_id": 30,
  "min": 200,
  "max": 300,
  "type": "fixed",
  "type_value": 10
}
```

### <span class="jumptarget"> Delete a Product Bulk Pricing Rule </span>

Deletes a product bulk pricing rule.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/discount_rules/{id}`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/discount_rules/{id}`

### <span class="jumptarget"> Delete Multiple Product Bulk Pricing Rules </span>

Deletes bulk pricing rules associated with a product.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/discount_rules`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/discount_rules`

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 `bulk_pricing_rules` are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/discount_rules?page={number} |
| limit | int | /api/v2/products/{product_id}/discount_rules?limit={count} |
