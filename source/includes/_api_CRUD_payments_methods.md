|||
|---|---|
| Manages |
| OAuth Scopes | `store_v2_information`
||`store_v2_information_read_only`

## Payment Method Operations

*   [List Payment Methods](#list-payment-methods)

## List Payment Methods

Gets the list of enabled payment methods. (Default sorting is by payment method, alphabetically from A to Z.)

*   [OAuth](#list-payment-methods-oauth)
>`GET /stores/{store_hash}/v2/payments/methods`
*   [Basic Auth](#list-payment-methods-basic)
>`GET /api/v2/payments/methods`

### Filters

There are no filter parameters specific to payment methods.

### Pagination

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 payment_methods are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/payments/methods?page={number} |
| limit | int | /api/v2/payments/methods?limit={count} |

```json
[
  {
    "code": "bankdeposit",
    "name": "Bank Deposit",
    "test_mode": false
  },
  {
    "code": "cod",
    "name": "Cash on Delivery",
    "test_mode": false
  },
  {
    "code": "paypalexpress",
    "name": "PayPal Express Checkout",
    "test_mode": false
  },
  {
    "code": "stripe",
    "name": "Stripe",
    "test_mode": false
  }
]
```