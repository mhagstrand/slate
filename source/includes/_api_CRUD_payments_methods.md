|||
| ----- | ----- |
| **Manages** |
| **OAuth Scopes** | store_v2_information
||store_v2_information_read_only

## <span class="jumptarget"> List Payment Methods </span>

Gets the list of enabled payment methods. (Default sorting is by payment method, alphabetically from A to Z.)

*   Oauth
>`GET /stores/{store_hash}/v2/payments/methods`
*   Basic Auth
>`GET /api/v2/payments/methods`

### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to payment methods.

### <span class="jumptarget"> Pagination </span>

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