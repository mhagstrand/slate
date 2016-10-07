# <span class="jumptarget"> Store Information Reference </span>

The Store Information object, and Get Store Information endpoint, manage store profile settings.

## <span class="jumptarget"> Store Information Object – Properties </span>

A Store Information object represents an individual store's profile and metadata.

| Name | Type | Description |
| --- | --- | --- |
| id | string | Unique store identifier. |
| domain | string | Primary domain name. |
| secure_URL | string | The store's current HTTPS URL. |
| name | string | The store's name. |
| address | string | Display address. |
| phone | string | Display phone number. |
| admin_email | string | Email address of the store administrator. |
| order_email | string | Email address for orders and fulfillment. |
| timezone | object | An object that defines the store's time zone, following conventions of the PHP `date` function. (For&#160;details, please see: <a href="http://php.net/manual/en/function.date.php" target="_blank">http://php.net/manual/en/function.date.php</a>.) This object contains the following elements:<br> `name`: a string identifying the time zone, in the format: <NOBR>`<Continent-name>/<City-name>`.</nobr><br> `raw_offset`: a negative or positive number, identifying the offset from UTC/GMT, in seconds, during winter/standard time.<br> `dst_offset`: -/+ (number) offset from UTC/GMT, in seconds, during summer/daylight saving time.<br> `dst_correction`: a boolean indicating whether this time zone observes daylight saving time.<br> `date_format` is a nested object, which contains the following internal elements:<br> * `display`: string that defines dates' display format, in the pattern: <NOBR>`M jS Y`;</nobr> <br> * `export`: string that defines the CSV export format for orders, customers, and products, in the pattern: <NOBR>`M jS Y`;</nobr> <br> * `extended_display`: string that defines dates' extended-display format, in the pattern: <NOBR>`M jS Y @ g:i A`.</nobr> |
| language | string | Default language code. |
| currency | string | Default currency code. |
| currency_symbol | string | Default symbol for values in the currency. |
| decimal_separator | string | Default decimal separator for values in the currency. |
| thousands_separator | string | Default thousands separator for values in the currency. |
| decimal_places | string | Default decimal places for values in the currency. |
| currency_symbol_location | string | Default position of the currency symbol (left or right). |
| weight_units | string | Default weight units (metric or imperial). |
| dimension_units | string | Default dimension units (metric or imperial). |
| dimension_decimal_places | string | The number of decimal places. |
| dimension_decimal_token | string | The symbol that separates the whole numbers from the decimal points. |
| dimension_thousands_token | string | The symbol used to denote thousands. |
| plan_name | string | Name of the BigCommerce plan to which this store is subscribed. |
| plan_level | string | Level of the BigCommerce plan to which this store is subscribed. |
| logo | object |
| is_price_entered_with_tax | boolean | A Boolean value that indicates whether or not prices are entered with tax. |
| active_comparison_modules | array |  |
| features | object | Array of flags for features that affect app compatibility or functionality. Child `stencil_enabled` element is a Boolean that indicates whether a store is using a Stencil theme. |


## <span class="jumptarget"> Store Information – Webhook Events </span>

### <span class="jumptarget"> Store Cancelled </span>

```
store/app/uninstall
```
Occurs when a client store is cancelled and uninstalled from the platform.
