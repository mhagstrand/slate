|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_orders
||store_v2_orders_read_only

### <span class="jumptarget"> List Order Coupons </span>

Gets the coupon codes applied to an order. (Default sorting is by coupon id, from lowest to highest; however, only one coupon can be applied to each order.)

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/coupons`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/coupons`

#### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to `order_coupons`.

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 order_coupons are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/orders/{order_id}/coupons?page={number} |
| Limit | int | /api/v2/orders/{order_id}/coupons?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 1,
    "coupon_id": 1,
    "order_id": 115,
    "code": "557D2DEA0CCAFA1",
    "amount": "5.0000",
    "type": 1,
    "discount": "4.6600"
  }
]
```

### <span class="jumptarget"> Get an Order Coupon </span>

Gets a coupon code associated with an order.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/coupons/{id}`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/coupons/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 1,
  "coupon_id": 1,
  "order_id": 115,
  "code": "557D2DEA0CCAFA1",
  "amount": "5.0000",
  "type": 1,
  "discount": "4.6600"
}
```
