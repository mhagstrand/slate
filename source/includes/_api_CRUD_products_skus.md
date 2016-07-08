|||
|---|---
| **Manages** |
| **OAuth Scopes** | store_v2_products
||store_v2_products_read_only

## <span class="jumptarget"> List Product SKUs </span>

Gets the collection of SKUs associated with a product.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/skus`
*   Basic Auth
>`GET /api/v2/products/{product_id}/skus`

### <span class="jumptarget"> Notes </span>

BigCommerce has updated the SKU schema to include additional price, weight, image, and purchasable properties. We will eventually remove the ability to manage these properties via SKU rules. (Merchants are already constrained from creating SKU-only rules in the BigCommerce control panel.)

### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific skus in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| min_id | int | /api/v2/products/{product_id}/skus?min_id={value} |
| max_id | int | /api/v2/products/{product_id}/skus?max_id={value} |
| sku | string | /api/v2/products/{product_id}/skus?sku={value} |
| upc | string | /api/v2/products/{product_id}/skus?upc={value} |
| inventory_level | string | /api/v2/products/{product_id}/skus?inventory_level={value} |
| inventory_warning_level | string | /api/v2/products/{product_id}/skus?inventory_warning_level={value} |
| bin_picking_number | string | /api/v2/products/{product_id}/skus?bin_picking_number={value} |
| min_inventory_level | int | /api/v2/products/{product_id}/skus?min_inventory_level={value} |
| max_inventory_level | int | /api/v2/products/{product_id}/skus?max_inventory_level={value} |
| is_low_inventory | boolean | /api/v2/products/{product_id}/skus?is_low_inventory={value} |
| product_hash | int | /api/v2/products/{product_id}/skus?product_hash={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 skus are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/skus?page={number} |
| limit | int | /api/v2/products/{product_id}/skus?limit={count} |

```json
[
  {
    "id": 1,
    "product_id": 5,
    "sku": "MB-1",
    "price": null,
    "adjusted_price": "1.5000",
    "cost_price": "0.0000",
    "upc": "",
    "inventory_level": 0,
    "inventory_warning_level": 0,
    "bin_picking_number": "",
    "weight": null,
    "adjusted_weight": "0.00",
    "is_purchasing_disabled": false,
    "purchasing_disabled_message": "",
    "image_file": "",
    "options": [
      {
        "product_option_id": 15,
        "option_value_id": 17
      },
      {
        "product_option_id": 16,
        "option_value_id": 28
      }
    ]
  },
  {
    "id": 2,
    "product_id": 5,
    "sku": "MB-2",
    "price": null,
    "adjusted_price": "2.0000",
    "cost_price": "0.0000",
    "upc": "",
    "inventory_level": 0,
    "inventory_warning_level": 0,
    "bin_picking_number": "",
    "weight": null,
    "adjusted_weight": "0.00",
    "is_purchasing_disabled": true,
    "purchasing_disabled_message": "We're sorry, this is unavailable.",
    "image_file": "",
    "options": [
      {
        "product_option_id": 15,
        "option_value_id": 18
      },
      {
        "product_option_id": 16,
        "option_value_id": 26
      }
    ]
  }
]
```

## <span class="jumptarget"> Get a Product SKU </span>

Gets a single product SKU.

*   OAuth
>`GET /stores/{store_hash}/v2/products/{product_id}/skus/{id}`
*   Basic Auth
>`GET /api/v2/products/{product_id}/skus/{id}`

```json
{
  "id": 5,
  "product_id": 7,
  "sku": "MBA-1atest",
    "price": null,
    "adjusted_price": "1.5000",
  "cost_price": "0.0000",
  "upc": "",
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "bin_picking_number": "",
    "weight": null,
    "adjusted_weight": "0.00",
    "is_purchasing_disabled": false,
    "purchasing_disabled_message": "",
    "image_file": "https://thinglust.com/eyecandy.png",
  "options": [
    {
      "product_option_id": 20,
      "option_value_id": 51
    }
  ]
}
```

## <span class="jumptarget"> Get a Count of Product SKUs </span>

Gets a count of the number of product SKUs in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/products/skus/count`
*   Basic Auth
>`GET /api/v2/products/skus/count`

```json
{
  "count": 1235
}
```

## <span class="jumptarget"> Create a Product SKU </span>

Creates a new product SKU.

*   OAuth
>`POST /stores/{store_hash}/v2/products/{product_id}/skus`
*   Basic Auth
>`POST /api/v2/products/{product_id}/skus`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the sku are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id
*   adjusted_price
*   adjusted_weight

### <span class="jumptarget"> Requirements </span>

The following properties of the sku are required. The request won’t be fulfilled unless these properties are valid.

*   sku
*   options

### <span class="jumptarget"> Notes </span>

To maximize system performance, Bigcommerce caps the number of SKUs associated with a product at 500. If you attempt to add a SKU to a product that has 500 SKUs, Bigcommerce will return a 403 error.

BigCommerce has updated the SKU schema to include additional price, weight, image, and purchasable properties. We will eventually remove the ability to manage these properties via SKU rules. (Merchants are already constrained from creating SKU-only rules in the BigCommerce control panel.)

```json
{
  "id": 5,
  "product_id": 7,
  "sku": "MBA-1atest",
    "price": null,
    "adjusted_price": "1.5000",
  "cost_price": "0.0000",
  "upc": "",
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "bin_picking_number": "",
    "weight": null,
    "adjusted_weight": "0.00",
    "is_purchasing_disabled": false,
    "purchasing_disabled_message": "",
    "image_file": "",
  "options": [
    {
      "product_option_id": 20,
      "option_value_id": 51
    }
  ]
}
```

## <span class="jumptarget"> Update a Product SKU </span>

Updates an existing product SKU.

*   OAuth
>`PUT /stores/{store_hash}/v2/products/{product_id}/skus/{id}`
*   Basic Auth
>`PUT /api/v2/products/{product_id}/skus/{id}`


### <span class="jumptarget"> Read-only Properties </span>

The following properties of the sku are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   product_id
*   adjusted_price
*   adjusted_weight

### <span class="jumptarget"> Requirements </span>

There are no required properties for updating a product SKU.

```json
{
  "id": 5,
  "product_id": 7,
  "sku": "MBA-1atest",
    "price": "4.9900",
    "adjusted_price": "3.9900",
  "cost_price": "2.9900",
  "upc": "",
  "inventory_level": 0,
  "inventory_warning_level": 0,
  "bin_picking_number": "",
    "weight": null,
    "adjusted_weight": "0.00",
    "is_purchasing_disabled": true,
    "purchasing_disabled_message": "We're sorry, this is unavailable.",
    "image_file": "",
  "options": [
    {
      "product_option_id": 20,
      "option_value_id": 51
    }
  ]
}
```

## <span class="jumptarget"> Delete a Product SKU </span>

Deletes a product SKU.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/skus/{id}`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/skus/{id}`

## <span class="jumptarget"> Delete Multiple Product SKUs </span>

Deletes multiple product SKUs.

*   OAuth
>`DELETE /stores/{store_hash}/v2/products/{product_id}/skus`
*   Basic Auth
>`DELETE /api/v2/products/{product_id}/skus`

### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific SKUs in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| min_id | int | /api/v2/products/{product_id}/skus?min_id={value} |
| max_id | int | /api/v2/products/{product_id}/skus?max_id={value} |
| sku | string | /api/v2/products/{product_id}/skus?sku={value} |
| upc | string | /api/v2/products/{product_id}/skus?upc={value} |
| inventory_level | string | /api/v2/products/{product_id}/skus?inventory_level={value} |
| inventory_warning_level | string | /api/v2/products/{product_id}/skus?inventory_warning_level={value} |
| bin_picking_number | string | /api/v2/products/{product_id}/skus?bin_picking_number={value} |
| min_inventory_level | int | /api/v2/products/{product_id}/skus?min_inventory_level={value} |
| max_inventory_level | int | /api/v2/products/{product_id}/skus?max_inventory_level={value} |
| is_low_inventory | boolean | /api/v2/products/{product_id}/skus?is_low_inventory={value} |
| product_hash | int | /api/v2/products/{product_id}/skus?product_hash={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 skus are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/products/{product_id}/skus?page={number} |
| limit | int | /api/v2/products/{product_id}/skus?limit={count} |
