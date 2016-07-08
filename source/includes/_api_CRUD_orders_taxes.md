|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_orders
||store_v2_orders_read_only

## <span class="jumptarget"> List Order Taxes </span>

Gets the list of taxes applied to an order.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/taxes`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/taxes`

### <span class="jumptarget"> Filters

There are no filter parameters specific to order tax.

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 order_taxes are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| `Page` | int | `/api/v2/orders/{order_id}/taxes?page={number}` |
| `Limit` | int | `/api/v2/orders/{order_id}/taxes?limit={count}` |

## <span class="jumptarget"> Get an Order Tax </span>

Gets an order tax item.

*   OAuth
>`GET /stores/{store_hash}/v2/orders/{order_id}/taxes/{id}`
*   Basic Auth
>`GET /api/v2/orders/{order_id}/taxes/{id}`
