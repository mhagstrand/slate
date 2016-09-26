|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_orders
||store_v2_orders_read_only

### List Order Statuses </span>

Gets the list of order statuses.

*   OAuth
>`GET /stores/{store_hash}/v2/order_statuses`
*   Basic Auth
>`GET /api/v2/order_statuses`

#### Filters </span>

There are no filter parameters specific to `order_statuses`.

#### Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 order_statuses are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/order_statuses?page={number} |
| limit | int | /api/v2/order_statuses?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 0,
    "name": "Incomplete",
    "order": 0
  },
  {
    "id": "1",
    "name": "Pending",
    "order": "1"
  },
  {
    "id": "2",
    "name": "Shipped",
    "order": "8"
  },
  {
    "id": "3",
    "name": "Partially Shipped",
    "order": "6"
  },
  {
    "id": "4",
    "name": "Refunded",
    "order": "11"
  },
  {
    "id": "5",
    "name": "Cancelled",
    "order": "9"
  },
  {
    "id": "6",
    "name": "Declined",
    "order": "10"
  },
  {
    "id": "7",
    "name": "Awaiting Payment",
    "order": "2"
  },
  {
    "id": "8",
    "name": "Awaiting Pickup",
    "order": "5"
  },
  {
    "id": "9",
    "name": "Awaiting Shipment",
    "order": "4"
  },
  {
    "id": "10",
    "name": "Completed",
    "order": "7"
  },
  {
    "id": "11",
    "name": "Awaiting Fulfillment",
    "order": "3"
  },
  {
    "id": "12",
    "name": "Manual Verification Required",
    "order": "13"
  },
  {
    "id": "13",
    "name": "Disputed",
    "order": "12"
  }
]
```

### Get an Order Status </span>

Gets a single order status.

*   OAuth
>`GET /stores/{store_hash}/v2/order_statuses/{id}`
*   Basic Auth
>`GET /api/v2/order_statuses/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": "12",
  "name": "Manual Verification Required",
  "order": "12"
}
```
