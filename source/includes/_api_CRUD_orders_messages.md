|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_orders
||store_v2_orders_read_only

### <span class="jumptarget"> List Order Messages </span>

Gets the messages associated with an order.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/messages`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/messages`

#### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific `order_message` in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| min_id | int | /api/v2/orders/{order_id}/messages?min_id={value} |
| max_id | int | /api/v2/orders/{order_id}/messages?max_id={value} |
| status | string | /api/v2/orders/{order_id}/messages?status={value} |
| customer_id | string | /api/v2/orders/{order_id}/messages?customer_id={value} |
| is_flagged | string | /api/v2/orders/{order_id}/messages?is_flagged={value} |
| min_date_created | dateTime or date | /api/v2/orders/{order_id}/messages?min_date_created={value} |
| max_date_created | dateTime or date | /api/v2/orders/{order_id}/messages?max_date_created={value} |

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 `order_message`s are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/orders/{order_id}/messages?page={number} |
| limit | int | /api/v2/orders/{order_id}/messages?limit={count} |

### <span class="jumptarget"> Get Order Message </span>

Gets a message associated with an order.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/messages/{id}`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/messages/{id}`
