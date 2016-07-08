# <span class="jumptarget"> Curl Quickstart Guide </span>

## <span class="jumptarget"> Introduction</span>

This page provides some sample cURL commands for quick start purposes. These use Basic Authentication. Before you can issue them, you must generate Basic Authentication credentials following the steps discussed in the [Overview](/api#basic-auth). Once you have your Basic Authentication credentials, you can issue cURL commands as shown below.

```
    curl --request GET \
    -H "Authorization: Basic _username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/time
```

If the request is made using **Authorization** header, you need to encode the credentials using base64. Or a simple way to do the same thing as above is:

```
    curl --request GET \
    -u "_username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/orders.json
```

## <span class="jumptarget"> Orders</span>

### <span class="jumptarget"> Get a list of orders from the store</span>

```
    curl --request GET \
    -u "_username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/orders.json
```

By default, the api request returns only 50 orders. If you want to return all the orders from the store, you have to use filters. Look at the example below.

### <span class="jumptarget"> Get all orders from the store</span>

Use the **limit** and **page** filter parameters to get a data beyond what the default query returns. Note that, per page, 200 orders is the max returned.

```
    curl --request GET \
    -u "_username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/orders.json?limit=200&page=1
```

### <span class="jumptarget"> Update an order</span>

Order takes many fields on the update requests. Refer to the documentation [here](/api/orders#update-an-order). Here, we update an order using just the mandatory fields.

```
    curl --request PUT \
    -u "_username_:_API_key_" \
    -H "Content-Type: application/json" \
    --data-binary '{"status_id":1}' \
    https://store.mybigcommerce.com/api/v2/orders/101
```


### <span class="jumptarget"> Get orders created since a date</span>

You can use the **'If-Modified-Since'** header to request orders that have been created after a date.

```    
    curl -I --request GET \
    -u "_username_:_API_key_" \
    -H "Content-Type: application/json" \
    -H "If-Modified-Since: Tue, 4 Dec 2012 00:00:00 GMT" \
    https://store.mybigcommerce.com/api/v2/orders.json
```

### <span class="jumptarget"> Get coupons associated with an order</span>

An order can contain coupons applied to it. This might provide discounts to the customer. You can look at all the available coupons in an order as follows:

```
    curl --request GET \
    -u "_username_:_API_key_"\
    https://store.mybigcommerce.com/api/v2/orders/115/coupons.json
```

### <span class="jumptarget"> Create a shipment for an order</span>

One can create a shipment for an order via the orders/shipment endpoint. As an example, third-party shipping services can query orders from a store when they are created and create shipments for those.

```
    curl --request POST \
    -u "_username_:_API_key_" \
    -H "Content-Type: application/json" \
    -d '{"order_address_id":15,"tracking_number":"123-123-123","items":[{"order_product_id":15,"quantity":1}]}' \
    https://store.mybigcommerce.com/api/v2/orders/114/shipments.json
```

## <span class="jumptarget"> Products</span>

### <span class="jumptarget"> Get a list of products from the store</span>

```
    curl --request GET \
    -u "_username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/products.json
```

By default, the API request returns only 50 products. If you want to return all the products from the store, you have to use filters. Look at the example below.

### <span class="jumptarget"> Get all products from the store</span>

Use the `limit` and `page` filter parameters to get a data beyond what the default query returns. Note that 200 products is the max returned per page.

```
    curl --request GET \
    -u "_username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/products.json?limit=200&page=1
```

### <span class="jumptarget"> Create a product</span>

Products have many fields. You can check out [this docs page](/api/products#create-a-product) for information on the product fields allowed as part of a `POST` request.

Let us say, we want to create a product using just the mandatory fields needed for a POST request. Note that price needs to specified as a string, while the weight is a decimal. Note that if the **is_visible** flag, though not mandatory is not set to **true**, the product by default would not be visible -

```
    curl --request POST \
    -H "Content-Type: application/json" \
    -u "_username_:_API_key_" \
    -d '{"name":"startrek","price":19.99,"categories":[2],"type":"physical","availability":"available", "weight":0}' \
    https://store.mybigcommerce.com/api/v2/products.json
```

### <span class="jumptarget"> Update a product</span>

To update the product created above, you can use the following:

```
    curl --request PUT \
    -H "Content-Type: application/json" \
    -u "_username_:_API_key_" \
    -d '{"name":"startrek","sku":"STREK-DVD","categories":[2,3],"inventory_tracking":"simple","inventory_level":"500", "inventory_warning":100}' \
    https://store.mybigcommerce.com/api/v2/products/id.json
```

### <span class="jumptarget"> Search a product by SKU</span>

If we want to search by a product SKU, we can use the following code. Remember that when a product has optionset/variations defined, and if the individual options have SKUs defined, then the product SKU is overriden by the option SKUs. Currently, there are two ways to search for SKUs - `GET /products?sku="something"` or `GET /products/skus?sku="something"`. The first call only returns product level SKU and not option level SKUs.

```
    curl --request GET \
    -u "_username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/products/skus.json?sku="abcd"
```

## <span class="jumptarget"> Coupons</span>

### <span class="jumptarget"> Get a list of coupons from the store</span>

```
    curl --request GET \
    -u "_username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/coupons.json
```

Coupons can be filtered through **code**, **type**, **name**, **min_id** and **max_id**. Without these filters, the call returns all the coupons in the store. For instance, if we want to return a list of coupons that are of type **percentage_discount**, we can request the results using the following.

```
    curl --request GET \
    -u "_username_:_API_key_" \
    https://store.mybigcommerce.com/api/v2/coupons.json?type=percentage_discount
```

Refer to the [Coupons resource](/api/v2#coupons) for the filtering field.

### <span class="jumptarget"> Create a coupon</span>

Coupons can be created by a **POST** request on the coupons endpoint. For example, if we want to create a coupon to take 50% off an order, then our coupon will have **percentage_discount** as the type. The **applies_to** field is optional and can be used to restrict the coupon to a set of products or categories. In the example shown below, the coupon is being restricted to a set of products.

```
    curl --request POST \
    -H "Content-Type: application/json" \
    -u "_username_:_API_key_" \
    -d '{"code":"50OFF", "type":"percentage_discount", "name":"testcoupon1", "amount":50.00, "enabled":"true", "applies_to":"{\"entity\":\"products\",\"ids\":[32]}"}' \
    https://store.mybigcommerce.com/api/v2/coupons.json
```

### <span class="jumptarget"> Update a coupon</span>

Updating a coupon is almost similar to above, except that we work off an ID via a **PUT** request. For example, if we want to change the above coupon to a 30% discount instead of 50%, and say, the coupon ID is 15, we can update the coupon using the following.

```
    curl --request PUT \
    -H "Content-Type: application/json" \
    -u "_username_:_API_key_" \
    -d '{"code":"30OFF", "type":"percentage_discount"' \
    https://store.mybigcommerce.com/api/v2/coupons/15.json
```

## <span class="jumptarget"> Option Sets</span>

### <span class="jumptarget"> Connect options to option sets</span>

This is currently a four step process.

1.  Create the option.
2.  Add some values to the option.
3.  Create the option set.
4.  Create option set options using the options you just created.

Use the following command to create an option.

```
    curl --request POST \
    -H "Content-Type: application/json" \
    -u "_username_:_API_key_" \
    -d '{"name":"homer simpson", "type":"T"}' \
    https://store.mybigcommerce.com/api/v2/options.json
```

BigCommerce returns the following, which includes an option ID.

```{"id":33,"name":"homer simpson","display_name":"homer simpson","type":"T","values":{"url":"https://store.mybigcommerce.com-bwvr466.mybigcommerce.com/api/v2/options/33/values.json","resource":"/options/33/values"}}```

Next, create a new option set.

```
    curl --request POST \
    -u "admin:key" \
    -d '{"name": "Simpson family"}' \
    -H "Content-Type: application/json" \
    https://store.mybigcommerce.com/api/v2/optionsets.json
```

The API returns the following, which includes an option set ID.

```{"id":27,"name":"Simpson family","options":{"url":"https://store.mybigcommerce.com-bwvr466.mybigcommerce.com/api/v2/optionsets/27/options.json","resource":"/optionsets/27/options"}}```

The final step is to connect the option with the option set.

```
    curl --request POST \
    -u "_username_:_API_key_" \
    -d '{"option_id": "33", "display_name":"Simpson family"}' \
    -H "Content-Type: application/json" \
    https://store.mybigcommerce.com/api/v2/optionsets/27/options.json
```

Which results in the following.

```
{"id":44,"option_id":33,"option_set_id":27,"display_name":"Simpson family","sort_order":0,"is_required":false,"option":{"url":"https://store.mybigcommerce.com-bwvr466.mybigcommerce.com/api/v2/options/33.json","resource":"/options/33"}}
```
