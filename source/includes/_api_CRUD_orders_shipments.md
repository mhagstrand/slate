|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_orders
||store_v2_orders_read_only

## <span class="jumptarget"> List Shipments </span>

Gets the shipments associated with an order.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/shipments`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/shipments`

### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to `shipments`.

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 shipments are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/orders/{order_id}/shipments?page={number} |
| limit | int | /api/v2/orders/{order_id}/shipments?limit={count} |

```json
[
  {
    "id": 1,
    "order_id": 115,
    "customer_id": 0,
    "order_address_id": 16,
    "date_created": "Wed, 19 Dec 2012 17:17:10 +0000",
    "tracking_number": "111222333444",
    "shipping_method": "None",
    "shipping_carrier": "ups",
    "comments": "A sample shipment for order 115",
    "billing_address": {
      "first_name": "Louise",
      "last_name": "Dean",
      "company": "Skiptube",
      "street_1": "147 Meadow Vale Way",
      "street_2": "",
      "city": "Fullerton",
      "state": "Rhode Island",
      "zip": "74674",
      "country": "United States",
      "country_iso2": "US",
      "phone": "7-(086)085-9448",
      "email": ""
    },
    "shipping_address": {
      "first_name": "Louise",
      "last_name": "Dean",
      "company": "Skiptube",
      "street_1": "147 Meadow Vale Way",
      "street_2": "",
      "city": "Fullerton",
      "state": "Rhode Island",
      "zip": "74674",
      "country": "United States",
      "country_iso2": "US",
      "phone": "7-(086)085-9448",
      "email": ""
    },
    "items": [
      {
        "order_product_id": 16,
        "product_id": 0,
        "quantity": 1
      }
    ]
  }
]
```

## <span class="jumptarget"> Get a Shipment </span>

Gets a shipment associated with an order.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/shipments/{id}`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/shipments/{id}`

```json
{
  "id": 12,
  "order_id": 114,
  "customer_id": 0,
  "order_address_id": 15,
  "date_created": "Wed, 19 Dec 2012 18:18:23 +0000",
  "tracking_number": "123-123-123",
  "shipping_method": "None",
  "shipping_carrier": "usps",
  "comments": null,
  "billing_address": {
    "first_name": "Julie",
    "last_name": "Bishop",
    "company": "Yamia",
    "street_1": "988 Comanche Circle",
    "street_2": "",
    "city": "Cypress",
    "state": "Wyoming",
    "zip": "77426-2265",
    "country": "United States",
    "country_iso2": "US",
    "phone": "5-(248)906-2014",
    "email": ""
  },
  "shipping_address": {
    "first_name": "Julie",
    "last_name": "Bishop",
    "company": "Yamia",
    "street_1": "988 Comanche Circle",
    "street_2": "",
    "city": "Cypress",
    "state": "Wyoming",
    "zip": "77426-2265",
    "country": "United States",
    "country_iso2": "US",
    "phone": "5-(248)906-2014",
    "email": ""
  },
  "items": [
    {
      "order_product_id": 15,
      "product_id": 0,
      "quantity": 1
    }
  ]
}
```

## <span class="jumptarget"> Get a Count of Shipments </span>

Gets a count of the number of orders that have shipped.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/shipments/count`
*   Basic Auth
>`GET /api/v2/orders/shipments/count`

```json
{
  "count": 6
}
```

## <span class="jumptarget"> Get a Count of Shipments per Order </span>

Gets a count of the number of shipments that have been made for a single order.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/shipments/count`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/shipments/count`

```json
{
  "count": 6
}
```

## <span class="jumptarget"> Create a Shipment </span>

Creates a new shipment for an order.

*   OAuth
>`POST /stores/{store_hash}/v2/orders/{order_id}/shipments`
*   Basic Auth
>`POST /api/v2/orders/{order_id}/shipments`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the shipment are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   order_id
*   date_created
*   customer_id
*   billing_address
*   shipping_address

### <span class="jumptarget"> Requirements </span>

The following properties of the shipment are required. The request won’t be fulfilled unless these properties are valid.

*   order_address_id
*   items

```curl
{
  "tracking_number": "EJ958083578US",
  "comments": "Ready to go...",
  "order_address_id": 1,
  "items": [
    {
      "order_product_id": 15,
      "quantity": 2
    }
  ]
}
```

```json
{
  "id": 18,
  "order_id": 113,
  "customer_id": 0,
  "order_address_id": 14,
  "date_created": "Wed, 19 Dec 2012 19:49:15 +0000",
  "tracking_number": "EJ958083578US",
  "shipping_method": "None",
  "shipping_carrier": "canada-post",
  "comments": "Ready to go...",
  "billing_address": {
    "first_name": "Henry",
    "last_name": "Boyd",
    "company": "Kare",
    "street_1": "009 Corben Pass",
    "street_2": "",
    "city": "Laguna Niguel",
    "state": "New Hampshire",
    "zip": "57762",
    "country": "United States",
    "country_iso2": "US",
    "phone": "0-(245)121-8702",
    "email": ""
  },
  "shipping_address": {
    "first_name": "Henry",
    "last_name": "Boyd",
    "company": "Kare",
    "street_1": "009 Corben Pass",
    "street_2": "",
    "city": "Laguna Niguel",
    "state": "New Hampshire",
    "zip": "57762",
    "country": "United States",
    "country_iso2": "US",
    "phone": "0-(245)121-8702",
    "email": ""
  },
  "items": [
    {
      "order_product_id": 14,
      "product_id": 0,
      "quantity": 1
    }
  ]
}
```

## <span class="jumptarget"> Update a Shipment </span>

Updates an existing shipment associated with an order.

*   OAuth
>`PUT /stores/{store_hash}/v2/orders/{order_id}/shipments/{id}`
*   Basic Auth
>`PUT /api/v2/orders/{order_id}/shipments/{id}`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the shipment are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   order_id
*   date_created
*   customer_id
*   items
*   billing_address
*   shipping_address

### <span class="jumptarget"> Requirements </span>

The following properties of the shipment are required. The request won’t be fulfilled unless these properties are valid.

```curl
{
  "tracking_number": "fedex1245",
  "comments": "Notes about the shipment",
  "order_address_id": 1
}
```

```json
{
  "id": 12,
  "order_id": 114,
  "customer_id": 0,
  "order_address_id": 16,
  "date_created": "Wed, 19 Dec 2012 18:18:23 +0000",
  "tracking_number": "fedex1245",
  "shipping_method": "None",
  "shipping_carrier": "fedex",
  "comments": "Notes about the shipment",
  "billing_address": {
    "first_name": "Julie",
    "last_name": "Bishop",
    "company": "Yamia",
    "street_1": "988 Comanche Circle",
    "street_2": "",
    "city": "Cypress",
    "state": "Wyoming",
    "zip": "77426-2265",
    "country": "United States",
    "country_iso2": "US",
    "phone": "5-(248)906-2014",
    "email": ""
  },
  "shipping_address": {
    "first_name": "Julie",
    "last_name": "Bishop",
    "company": "Yamia",
    "street_1": "988 Comanche Circle",
    "street_2": "",
    "city": "Cypress",
    "state": "Wyoming",
    "zip": "77426-2265",
    "country": "United States",
    "country_iso2": "US",
    "phone": "5-(248)906-2014",
    "email": ""
  },
  "items": [
    {
      "order_product_id": 15,
      "product_id": 0,
      "quantity": 1
    }
  ]
}
```

## <span class="jumptarget"> Delete a Shipment </span>

Deletes a shipment associated with an order.

*   OAuth
>`DELETE /stores/{store_hash}/v2/orders/{order_id}/shipments/{id}`
*   Basic Auth
>`DELETE /api/v2/orders/{order_id}/shipments/{id}`

## <span class="jumptarget"> Delete Multiple Shipments </span>

Deletes multiple shipments associated with an order.

*   OAuth
>`DELETE /stores/{store_hash}/v2/orders/{order_id}/shipments`
*   Basic Auth
>`DELETE /api/v2/orders/{order_id}/shipments`

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 shipments are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/orders/{order_id}/shipments?page={number} |
| limit | int | /api/v2/orders/{order_id}/shipments?limit={count} |
