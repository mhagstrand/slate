## <span class="jumptarget"> Customer Groups </span>

Groupings of customers who share the same level of access and discounts at a store.

### <span class="jumptarget"> Customer Group – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int | |
| name | string | Name of the group |
| is_default | boolean | Determines whether new customers are assigned to this group by default. |
| category_access | object | Determines the categories to which customers in this group have access to view and order products.<br><br> `type` is an enum specifying the method of category access applied to customers in this group, with the following possible values:<br> `all`: customers can access all categories;<br> `specific`: customers can access a specific list of categories;<br> `none`: customers are prevented from viewing any of the categories in this group.<br><br> `categories` is an array of category IDs and should be supplied only if `type` is `specific`. |
| discount_rules | object_array | A collection of discount rules that are automatically applied to customers who are members of the group. All discount rules have the following properties:<br><br> `type` is an enum specifying the type of discount rule, with the following possible values:<br> `all`: a store-wide rule (applies to everything);<br> `product`: a rule applying to a specific product;<br> `category`: a rule applying to a specific category.<br><br> `method` is an enum that specifies a price-modifying strategy, with the following possible values:<br> `price`: modify the price by the given amount;<br> `percent`: modify the price by the given percentage;<br> `fixed`: modify the price by a fixed discount.<br><br> `amount` is a decimal number that specifies the value applied to the price modifier.<br><br> Product and category rules also require a `product_id` or `category_id` field, respectively. |
