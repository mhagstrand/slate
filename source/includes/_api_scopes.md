## <span class="jumptarget"> <a name="scopes"></a> OAuth Scopes </span>

The following table identifies the name used for each OAuth scope in the My Apps and control panel GUIs, along with the corresponding resources and the strings that get passed to your app during apps' [installation or scope updates](#app-installation-and-update-sequence).

All OAuth scopes except `default` have `read_only` scopes that allow only `GET` and `HEAD` requests.

| Scope GUI Name | Scope Strings | Resources |
| --- | --- | --- |
| Content | **store_v2_content** |[blog/posts](/api/v2/#blog-posts)|
||**store_v2_content_read_only** |[blog/tags](/api/v2/#blog-tags)|
|||[redirects](/api/v2/#redirects)|
| Customers | **store_v2_customers**|[customers](/api/v2/#customers)|
||**store_v2_customers_read_only** | [customers/{id}/addresses](/api/v2/#customer-addresses)|
|||[customer_groups](/api/v2/#customer-groups) |
|Customer Login |**store_v2_customers_login** | [Grants access to [Customer Login API](#customer-login-api))] |
| Default | **default** | [countries](/api/v2/#countries)|
|||[countries/{id}/states](/api/v2/#states)|
|||[hooks](/api/v2/#webhooks-reference)
|||[time](/api/v2/#get-a-timestamp) |
| Information | **store_v2_information**|[payments/methods](/api/v2/#payment-methods)
||**store_v2_information_read_only** | [shipping/methods](/api/v2/#shipping-methods-reference)
|||[store](/api/v2/#store-information-reference)
|||[tax_classes](/api/v2/#tax-class-reference) |
| Marketing | **store_v2_marketing**|[coupons](/api/v2/#coupons) |
||**store_v2_marketing_read_only** | |
| | | [gift_certificates](/api/v2/#gift-certificates)|
| Orders | **store_v2_orders**| [orders](/api/v2/#orders) |
||**store_v2_orders_read_only** | [orders/{id}/coupons](/api/v2/#order-coupons)|
|||[orders/{id}/messages](/api/v2/#order-messages) |
|||[orders/{id}/products](/api/v2/#products) |
|||[orders/{id}/shipping_addresses](/api/v2/#order-shipping-addresses) |
|||[orders/{id}/order_statuses](/api/v2/#order-statuses) |
|||[orders/{id}/taxes](/api/v2/#order-taxes) |
|||[orders/{id}/shipments](/api/v2/#shipments) |
| Products | **store_v2_products**|[brands](/api/v2/#brands) |
||**store_v2_products_read_only** | [products/{id}/discount_rules](/api/v2/#bulk-pricing) |
|||[categories](/api/v2/#categories) |
|||[products/{id}/configurable_fields](/api/v2/#configurable-fields) |
|||[products/{id}/custom_fields](/api/v2/#custom-fields) |
|||[products/{id}/googleproductsearch](/api/v2/#google-product-search-mappings) |
|||[options](/api/v2/#options) |
|||[option_sets](/api/v2/#option-sets) |
|||[option_sets/{id}/options](/api/v2/#option-set-options) |
|||[options/{id}/values](/api/v2/#option-values) |
|||[products](/api/v2/#products) |
|||[products/{id}/images](/api/v2/#product-images) |
|||[products/{id}/options](/api/v2/#product-options) |
|||[products/{id}/reviews](/api/v2/#product-reviews) |
|||[products/{id}/rules](/api/v2/#product-rules) |
|||[products/{id}/videos](/api/v2/#videos) |
|||[products/{id}/skus](/api/v2/#skus) |
