# <span class="jumptarget"> Shipments </span>

Tracks a package consignment from an order, shipped from the seller to the buyer.

## <span class="jumptarget"> Shipment Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int |
| order_id | int |
| customer_id | int |
| order_address_id | int | ID of the order address with which this shipment is associated |
| date_created | date |
| tracking_number | string | Tracking number of the shipment |
| shipping_method | string |
<<<<<<< HEAD
| shipping_provider | string | Enum of the shipping-carrier integration |
| tracking_carrier | string | Enum of the delivery service fulfilling the shipment |
=======
| shipping_provider | string | Enum of the delivery service fulfilling the shipment |
| tracking_carrier | string | Enum of the shipping-carrier integration |
>>>>>>> master
| comments | text | Comments the shipper wishes to add |
| billing_address | object |
| shipping_address | object |
| items | object_array | The items in the shipment. This is an object; see the items table. A sample value might be: [{"order_product_id":15,"quantity":2}]