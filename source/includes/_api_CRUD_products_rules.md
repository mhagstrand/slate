|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

### <span class="jumptarget"> List Product Rules </span>

Gets the collection of rules associated with a product. (Default sorting is by rule id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/rules`
*   Basic Auth
>`GET /api/v2/products/{product_id}/rules`

#### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to product rules.

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 product_rules are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/rules?page={number} |
| limit | int | /api/v2/products/{product_id}/rules?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 1,
    "product_id": 3,
    "sort_order": 0,
    "is_enabled": true,
    "is_stop": false,
    "price_adjuster": null,
    "weight_adjuster": null,
    "is_purchasing_disabled": false,
    "purchasing_disabled_message": "",
    "is_purchasing_hidden": false,
    "image_file": "attribute_rule_images/1_source.jpg",
    "conditions": [
      {
        "product_option_id": 4,
        "option_value_id": 7,
        "sku_id": null
      }
    ]
  },
  {
    "id": 2,
    "product_id": 3,
    "sort_order": 1,
    "is_enabled": true,
    "is_stop": false,
    "price_adjuster": null,
    "weight_adjuster": null,
    "is_purchasing_disabled": false,
    "purchasing_disabled_message": "",
    "is_purchasing_hidden": false,
    "image_file": "attribute_rule_images/2_source.jpg",
    "conditions": [
      {
        "product_option_id": 4,
        "option_value_id": 8,
        "sku_id": null
      }
    ]
  }
]
```

### <span class="jumptarget"> Get a Product Rule </span>

Gets a single product rule.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/rules/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/rules/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 2,
  "product_id": 3,
  "sort_order": 1,
  "is_enabled": true,
  "is_stop": false,
  "price_adjuster": null,
  "weight_adjuster": null,
  "is_purchasing_disabled": false,
  "purchasing_disabled_message": "",
  "is_purchasing_hidden": false,
  "image_file": "attribute_rule_images/2_source.jpg",
  "conditions": [
    {
      "product_option_id": 4,
      "option_value_id": 8,
      "sku_id": null
    }
  ]
}
```

### <span class="jumptarget"> Get a Count of Product Rules </span>

Gets a count of the number of product rules in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/products/rules/count`
*   Basic Auth
>`GET /api/v2/products/rules/count`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 3
}
```

### <span class="jumptarget"> Create a Product Rule </span>

Creates a new product rule.

*   OAuth
>`POST /stores/{store_hash}/v2/products/{product_id}/rules`
*   Basic Auth
>`POST /api/v2/products/{product_id}/rules`


#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the product rule are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id

#### <span class="jumptarget"> Requirements </span>

The following properties of the product rule are required. The request won’t be fulfilled unless these properties are valid.

*   conditions

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 10,
  "product_id": 3,
  "sort_order": 1,
  "is_enabled": true,
  "is_stop": false,
  "price_adjuster": null,
  "weight_adjuster": null,
  "is_purchasing_disabled": false,
  "purchasing_disabled_message": "",
  "is_purchasing_hidden": false,
  "image_file": "attribute_rule_images/2_source.jpg",
  "conditions": [
    {
      "product_option_id": 4,
      "option_value_id": 8,
      "sku_id": null
    }
  ]
}
```

### <span class="jumptarget"> Update a Product Rule </span>

Updates an existing product rule. 

#### <span class="jumptarget"> Notes </span>

If you include a conditions object array, its contents will be appended to any existing conditions. This operation does not overwrite existing conditions.

*   OAuth
>`PUT /stores/{store_hash}/v2/products/{product_id}/rules/{id}`
*   Basic Auth
>`PUT /api/v2/products/{product_id}/rules/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the product rule are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id

#### <span class="jumptarget"> Requirements </span>

There are no property requirements for updating a product rule.

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 2,
  "product_id": 3,
  "sort_order": 2,
  "is_enabled": true,
  "is_stop": false,
  "price_adjuster": null,
  "weight_adjuster": null,
  "is_purchasing_disabled": false,
  "purchasing_disabled_message": "",
  "is_purchasing_hidden": false,
  "image_file": "attribute_rule_images/2_source.jpg",
  "conditions": [
    {
      "product_option_id": 4,
      "option_value_id": 8,
      "sku_id": null
    }
  ]
}
```

### <span class="jumptarget"> Delete a Product Rule </span>

Deletes a product rule.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/rules/{id}`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/rules/{id}`

### <span class="jumptarget"> Delete Multiple Product Rules </span>

Deletes multiple product rules.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/rules`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/rules`

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 `product_rules` are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/rules?page={number} |
| limit | int | /api/v2/products/{product_id}/rules?limit={count} |
