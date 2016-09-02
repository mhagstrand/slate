|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_marketing
||store_v2_marketing_read_only

### <span class="jumptarget"> List Coupons </span>

Gets the collection of coupons. (Default sorting is by coupon/discount id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/coupons`
*   Basic Auth
>`GET /api/v2/coupons`

#### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific coupons in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| id | string | /api/v2/coupons?id={value} |
| code | string | /api/v2/coupons?code={value} |
| name | string | /api/v2/coupons?name={value} |
| type | string | /api/v2/coupons?type={value} |
| min_id | int | /api/v2/coupons?min_id={value} |
| max_id | int | /api/v2/coupons?max_id={value} |

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 coupons are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/coupons?page={number} |
| Limit | int | /api/v2/coupons?limit={count} |

```json
[
  {
    "id": 1,
    "name": "5% off order total",
    "type": "per_item_discount",
    "amount": "5.0000",
    "min_purchase": "0.0000",
    "expires": "",
    "enabled": true,
    "code": "4F75AF0C3802D39",
    "applies_to": {
      "entity": "categories",
      "ids": [
        0
      ]
    },
    "num_uses": 0,
    "max_uses": 0,
    "max_uses_per_customer": 0,
    "restricted_to": {
      "countries": [
        "AU"
      ]
    },
    "shipping_methods": null
  },
  {
    "id": 2,
    "name": "10% off order total",
    "type": "per_item_discount",
    "amount": "10.0000",
    "min_purchase": "0.0000",
    "expires": "",
    "enabled": true,
    "code": "CBD1455FDA13815",
    "applies_to": {
      "entity": "categories",
      "ids": [
        0
      ]
    },
    "num_uses": 0,
    "max_uses": 0,
    "max_uses_per_customer": 0,
    "restricted_to": {
      "states": {
        "AU": [
          "Australian Capital Territory"
        ]
      }
    },
    "shipping_methods": null
  },
  {
    "id": 3,
    "name": "Free shipping",
    "type": "free_shipping",
    "amount": "0.0000",
    "min_purchase": "0.0000",
    "expires": "",
    "enabled": true,
    "code": "7E97D5F3F75FA2D",
    "applies_to": {
      "entity": "categories",
      "ids": [
        0
      ]
    },
    "num_uses": 0,
    "max_uses": 0,
    "max_uses_per_customer": 0,
    "restricted_to": {
      "zips": {
        "AU": [
          "2000",
          "20??"
        ]
      }
    },
    "shipping_methods": null
  },
  {
    "id": 4,
    "name": "$5 off shipping",
    "type": "shipping_discount",
    "amount": "5.0000",
    "min_purchase": "0.0000",
    "expires": "",
    "enabled": true,
    "code": "DC0C1CC8807DAC8",
    "applies_to": {
      "entity": "categories",
      "ids": [
        0
      ]
    },
    "num_uses": 0,
    "max_uses": 0,
    "max_uses_per_customer": 0,
    "restricted_to": null,
    "shipping_methods": null
  },
  {
    "id": 5,
    "name": "only for shipping_flatrate",
    "type": "0",
    "amount": "0.0000",
    "min_purchase": "100.0000",
    "expires": "Thu, 31 Jan 2013 00:00:00 +0000",
    "enabled": false,
    "code": "shippingFlatrate-2",
    "applies_to": {
      "entity": "products",
      "ids": [
        32
      ]
    },
    "num_uses": 0,
    "max_uses": 10,
    "max_uses_per_customer": 0,
    "restricted_to": null,
    "shipping_methods": [
      "shipping_flatrate"
    ]
  }
]
```

### <span class="jumptarget"> Get a Coupon </span>

Gets a coupon.

*   OAuth
>`GET /stores/{store_hash}/v2/coupons/{id}`
*   Basic Auth
">`GET /api/v2/coupons/{id}`

```json
{
  "id": 1,
  "name": "5% off order total",
  "type": "per_item_discount",
  "amount": "5.0000",
  "min_purchase": "0.0000",
  "expires": "",
  "enabled": true,
  "code": "4F75AF0C3802D39",
  "applies_to": {
    "entity": "categories",
    "ids": [
      0
    ]
  },
  "num_uses": 0,
  "max_uses": 0,
  "max_uses_per_customer": 0,
  "restricted_to": null,
  "shipping_methods": null
}
```

### <span class="jumptarget"> Get a Count of Coupons </span>

Gets a count of the number of coupons in the store.

*   OAuth
>`GET /stores/{store_hash}/v2/coupons/count`
*   Basic Auth
>`GET /api/v2/coupons/count`

```json
{
  "count": 65
}
```

### <span class="jumptarget"> Create a Coupon </span>

Creates a new coupon.

*   OAuth
>`POST /stores/{store_hash}/v2/coupons`
*   Basic Auth
>`POST /api/v2/coupons`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the coupon are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   num_uses

#### <span class="jumptarget"> Requirements </span>

The following properties of the coupon are required. The request won’t be fulfilled unless these properties are valid.

*   name
*   code
*   type
*   amount
*   applies_to

#### <span class="jumptarget"> Notes </span>

The coupon type can be one of the following:

*   per_item_discount
*   per_total_discount
*   shipping_discount
*   free_shipping
*   percentage_discount

```curl
{
  "name": "5% off order total",
  "type": "per_item_discount",
  "code": "4F75AF0C3802D39",
  "enabled": true,
  "amount": "5",
  "applies_to": {
    "entity": "categories",
    "ids": [
      0
    ]
  }
}
```

```json
{
  "id": 1,
  "name": "5% off order total",
  "type": "per_item_discount",
  "amount": "5.0000",
  "min_purchase": "0.0000",
  "expires": "",
  "enabled": true,
  "code": "4F75AF0C3802D39",
  "applies_to": {
    "entity": "categories",
    "ids": [
      0
    ]
  },
  "num_uses": 0,
  "max_uses": 0,
  "max_uses_per_customer": 0,
  "restricted_to": null,
  "shipping_methods": null
}
```

### <span class="jumptarget"> Update a Coupon </span>

Updates an existing coupon.

*   OAuth
>`PUT /stores/{store_hash}/v2/coupons/{id}`
*   Basic Auth
>`PUT /api/v2/coupons/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the coupon are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   num_uses

#### <span class="jumptarget"> Requirements </span>

The following properties of the coupon are required. The request won’t be fulfilled unless these properties are valid.

```json
{
  "id": 1,
  "name": "5% off order total",
  "type": "per_item_discount",
  "amount": "5.0000",
  "min_purchase": "0.0000",
  "expires": "",
  "enabled": true,
  "code": "4F75AF0C3802D39",
  "applies_to": {
    "entity": "categories",
    "ids": [
      0
    ]
  },
  "num_uses": 0,
  "max_uses": 0,
  "max_uses_per_customer": 0,
  "restricted_to": null,
  "shipping_methods": null
}
```
### <span class="jumptarget"> Delete a Coupon </span>

Deletes a coupon.

*   OAuth
>`DELETE /stores/{store_hash}/v2/coupons/{id}`
*   Basic Auth
>`DELETE /api/v2/coupons/{id}`

### <span class="jumptarget"> Delete All Coupons </span>

Deletes all coupons in the store.

*   OAuth
>`DELETE /stores/{store_hash}/v2/coupons`
*   Basic Auth
>`DELETE /api/v2/coupons`
