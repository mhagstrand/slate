# <span class="jumptarget"> Payments Reference </span>

The Payment Methods object, and List Payment Methods endpoint, help stores receive money from transactions.

## <span class="jumptarget"> Payment Method Object – Properties </span>

Enabled payment types or methods in a store.


| Name | Type | Description |
| --- | --- | --- |
| code | string | Unique platform-wide code identifying the payment method. |
| name | string | Descriptive name of the payment method. |
| test_mode | boolean | Determines whether the payment gateway is in test mode. Always false for offline payment methods. |
