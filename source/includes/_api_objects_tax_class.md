# <span class="jumptarget"> Tax Class Reference </span>

The Tax Class object, and endpoints, manage tax calculations applied to sales. Tax classes are used to apply different tax rates for specific types of products and orders.

## <span class="jumptarget"> Tax Class Object – Properties </span>

The `tax_class` object contains the ID and name of the tax class used to calculate tax for stores that use _manually created_ tax classes. 

<aside class="warning">
<span class="aside-warning-hd">Automatic Taxes – Limitation</span><br><br>
Where a store is configured to use automatic taxes, data inside the `tax_class` object will be ignored during tax calculations.
</aside>

| Name | Type | Description |
| --- | --- | --- |
| id | int | The unique numerical ID of the tax class. A read-only value which is automatically assigned and increments sequentially. |
| name | string | The name of the tax class. 
