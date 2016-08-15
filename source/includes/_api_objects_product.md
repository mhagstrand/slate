# <span class="jumptarget"> Products </span>

A saleable item in the catalog.

## <span class="jumptarget"> Product Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- | --- |
| id | int | The unique numerical ID of the product. Increments sequentially. |
| keyword_filter | string |
| name | string | The product name. |
| type | enum | The product type. One of:<br><br> `physical` – a physical stock unit.<br> `digital` – a digital download. |
| sku | string | User-defined product code/stock keeping unit (SKU). |
| description | text | Product description, which can include HTML formatting. |
| search_keywords | text | A comma-separated list of keywords that can be used to locate the product when searching the store. |
| availability_description | string | Availability text, displayed on the checkout page under the product title, telling the customer how long it will normally take to ship this product. E.g.: "Usually ships in 24 hours". |
| price | decimal | The product's price. Should include, or exclude, tax based on the store settings. |
| cost_price | decimal | The product's cost price. Stored for reference only; not used or displayed anywhere on the store. |
| retail_price | decimal | The product's retail cost. If entered, this retail price will be shown on the product page. |
| sale_price | decimal | Sale price. If entered, this will be used instead of value in the price field when calculating the product's cost. |
| calculated_price | decimal |  |
| sort_order | int | Priority to give this product when included in product lists on category pages and in search results. Lower integers will place the product closer to the top of the results. |
| is_visible | boolean | Flag to determine whether or not the product should be displayed to customers browsing. If `true`, the product will be displayed. If `false`, the product will be hidden from view. |
| is_featured | boolean | Flag to determine whether the product should be included in the "featured products" panel for shoppers viewing the store. |
| related_products | string | Defaults to `-1`, which causes the store to automatically generate a list of related products. To manually specify the list of related products, include their IDs, separated by commas. For example: `3, 6, 7, 21`. |
| inventory_level | int | Current inventory level of the product. Simple inventory tracking must be enabled (see the `inventory_tracking` field) for this to take effect. |
| inventory_warning_level | int | Inventory Warning level for the product. When the product's inventory level drops below this warning level, the store owner will be sent a notification. Simple inventory tracking must be enabled (see the `inventory_tracking` field) for this to take effect. |
| warranty | text | Warranty information displayed on the product page. Can include HTML formatting. |
| weight | decimal | Weight of the product, which can be used when calculating shipping costs. |
| width | decimal | Width of the product, which can be used when calculating shipping costs. |
| height | decimal | Height of the product, which can be used when calculating shipping costs. |
| depth | decimal | Depth of the product, which can be used when calculating shipping costs. |
| fixed_cost_shipping_price | decimal | A fixed shipping cost for the product. If defined, this value will be used instead of normal shipping-cost calculation during checkout. |
| is_free_shipping | boolean | Flag used to indicate whether or not the product has free shipping. If `true`, the shipping cost for the product will be zero. |
| inventory_tracking | enum | The type of inventory tracking for the product. One of:<br><br> `none` – inventory levels will not be tracked.<br> `simple` – inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields.<br> `sku` – inventory levels will be tracked based on individual product options, which maintain their own warning levels and inventory levels. |
| rating_total | int | The total rating for the product. |
| rating_count | int | The total number of ratings the product has had. |
| total_sold | int |
| date_created | date | The date of which the product was created. |
| brand_id | int | The product's brand |
| view_count | int | The number of times the product has been viewed. |
| page_title | string | Custom title for the product's page. If not defined, the product name will be used as the page title. |
| meta_keywords | text | Custom meta keywords for the product page, if not defined the store default keywords will be used. |
| meta_description | text | Custom meta description for the product page. If not defined, the store's default meta description will be used. |
| layout_file | string | The layout template file used to render this product category. |
| is_price_hidden | boolean | The default `false` value indicates that this product's price should be shown on the product page. If set to `true`, the price will be hidden hidden. (NOTE: To successfully set `is_price_hidden` to `true`, the `availability` value must be `disabled`.) |
| price_hidden_label | string | By default, an empty string. If `is_price_hidden` is `true`, the value of `price_hidden_label` will be displayed instead of the price. (NOTE:&#160;To successfully set a non-empty string value for `price_hidden_label`, the `availability` value must be `disabled`.) |
| categories | array | An array of IDs for the categories this product belongs to. When updating a product, if an array of categories is supplied, then all product categories will be overwritten. Does not accept more than 1,000 ID values. |
| date_modified | date | The date that the product was last modified. |
| event_date_field_name | string | Name of the field to be displayed on the product page when selecting the event/delivery date. |
| event_date_type | enum | One of the following values:<br><br> `none` – Disables the event/delivery date requirement and field.<br> `after` – The selected date must fall either on, or after, the date specified in the `event_date_start` field.<br> `before` – The selected date must fall either before, or on, the date specified in the `event_date_end` field.<br> `range` – The selected date must fall between the `event_date_start` and `event_date_end` dates. |
| event_date_start | date | When the product requires the customer to select an event/delivery date, this date is used as the "after" date. |
| event_date_end | date | When the product requires the customer to select an event/delivery date, this date is used as the "before" date. |
| myob_asset_account | string | MYOB Asset Account. |
| myob_income_account | string | MYOB Income Account. |
| myob_expense_account | string | MYOB Expense/COS Account. |
| peachtree_gl_account | string | Peachtree General Ledger Account. |
| condition | enum | The product's condition. Will be shown on the product page if the value of the `is_condition_shown` field is true. Possible values: `New`, `Used`, `Refurbished`. |
| is_condition_shown | boolean | Flag used to determine whether the product's condition will be shown to the customer on the product page. |
| preorder_release_date | date | Pre-order release date. See `availability` field for details on setting a product's availability to accept pre-orders. |
| is_preorder_only | boolean | If set to `false`, the product will not change its `availability` from `preorder` to `available` on the release date. Otherwise, on the release date the product's availability/status will change to `available`. |
| preorder_message | string | Custom expected-date message to display on the product page. If undefined, the message defaults to the storewide setting. Can contain the `%%DATE%%` placeholder, which will be replaced with the release date. |
| order_quantity_minimum | int | The minimum quantity an order must contain in order to purchase this product. |
| order_quantity_maximum | int | The maximum quantity an order can contain when purchasing the product. |
| open_graph_type | enum | Type of product. Acceptable values are: `product`, `album`, `book`, `drink`, `food`, `game`, `movie`, `song`, `tv_show` |
| open_graph_title | string | Title of the product. If not specified, the product's name will be used instead. |
| open_graph_description | text | Description to use for the product. If not specified, the `meta_description` will be used instead. |
| is_open_graph_thumbnail | boolean | If set to `true`, the product thumbnail image will be used as the open graph image. |
| upc | string | The product UPC code, which is used in feeds for shopping comparison sites. |
| date_last_imported | date | The date on which the product was last imported using the bulk importer. |
| option_set_id | int | The ID of the [option set](/v2#product-option-sets) applied to the product. (NOTE: To remove the option set from the product, set the value to `null` on update.) |
| tax_class_id | int | The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.) |
| option_set_display | enum | The position on the product page where options from the option set will be displayed. |
| bin_picking_number | string | The BIN picking number for the product. |
| custom_url | string |
| primary_image | object | An image object, corresponding to the image that is set as the product's thumbnail. This object includes that image's `id`, plus four URL values identifying where to pull the image at different sizes:<br> <br>`standard_url` is the image used in the product page's image box.<br> `tiny_url` is the thumbnail image displayed below the product page's image box.<br> `thumbnail_url` is used for product list-box images on category pages and in side panels.<br> `zoom_url` is either the original image size provided to BigCommerce, or the merchant-selected `Product Zoom Image`/`Zoomed image` size – whichever is smaller. (You can always access the product's original image via the [Product Images resource](/api/v2/products/#product-images).) |
| availability | enum | Availability of the product. Possible values:<br><br> `available` – the product can be purchased on the storefront.<br> `disabled` - the product is listed on the storefront, but cannot be purchased.<br> `preorder` – the product is listed for pre-orders. |
| brand | resource |
| downloads | resource |
| images | resource | See the [Product Images resource](/api/v2/products/#product-images) for information. |
| discount_rules | resource | See the [Bulk Pricing/Discount](/api/v2#bulk-pricing) resource for information. |
| configurable_fields | resource | See the [Configurable Fields](/api/v2#configurable-fields) resource for information. |
| custom_fields | resource | See the [Custom Fields](/api/v2#custom-fields) resource for information. |
| videos | resource | See the [Videos resource](/api/v2/products/#videos) for information. |
| skus | resource | Stock Keeping Units for the product. See the [Product SKUs](/api/v2#product-skus) resource for the definition of a sku object. |
| rules | resource | Rules that apply only to this product, based on the product's [option set](/v2#product-option-sets). See [Product Rules](/api/v2#product-rules) resource for information. |
| option_set | resource | See the [Product Option Sets](/v2#product-option-sets) resource for information. |
| options | resource | Options from the [option set](/v2#product-option-sets) applied to the product. See the [Product Options](/api/v2#product-options) resource for information. |
| tax_class | resource |
| avalara_product_tax_code | resource | Accepts AvaTax system codes, which identify products and services that fall into special sales-tax categories. Allows merchants who subscribe to Avalara Premium to achieve increased accuracy in sales-tax calculations.<br><br> Stores without Avalara Premium will ignore the code when calculating sales tax. Do not pass more than one code. The codes are case-sensitive.<br><br> For further information and the full list of codes, please see [this Avalara reference page](https://help.avalara.com/000_AvaTax_Calc/000AvaTaxCalc_User_Guide/040_Managing_Tax_Profiles/050_Tax_Codes/001_What_is_a_Tax_Code) > "AvaTax System tax codes" section. |

## <span class="jumptarget"> Webhook Events </span>

### <span class="jumptarget"> Product Created </span>

```
store/product/created
```
Occurs when a product is created from the control panel, via bulk import, or via the API.

### <span class="jumptarget"> Product Updated </span>

```
store/product/updated
```
Occurs when a product is updated from the control panel or via the API.

### <span class="jumptarget"> Product Deleted </span>

```
store/product/deleted
```
Occurs when a product is deleted from the control panel or via the API.
