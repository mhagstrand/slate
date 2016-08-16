| | |
|---|---|
| **Manages** |  |
| **OAuth Scopes** | store_v2_customers |
||store_v2_customers_read_only

## <span class="jumptarget"> List Customer Groups </span>

Gets the collection of customer groups. (Default sorting is by customer-group id, from lowest to highest.)

*   OAuth
>GET /stores/{store_hash}/v2/customer_groups
*   Basic Auth
>GET /api/v2/customer_groups

### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific customer_groups in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| name | string | /api/v2/customer_groups?name={value} |
| is_default | boolean | /api/v2/customer_groups?is_default={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 customer_groups are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/customer_groups?page={number} |
| Limit | int | /api/v2/customer_groups?limit={count} |

```json
[
  {
    "id": 1,
    "name": "Retail Customers",
    "is_default": true,
    "category_access": {
      "type": "all"
    },
    "discount_rules": [

    ]
  },
  {
    "id": 2,
    "name": "Wholesale Customers",
    "is_default": false,
    "category_access": {
      "type": "all"
    },
    "discount_rules": [

    ]
  }
]
```

## <span class="jumptarget"> Get a Customer Group </span>

Gets a customer group.

*   OAuth
>GET /stores/{store_hash}/v2/customer_groups/{id}
*   Basic Auth
>GET /api/v2/customer_groups/{id}

```json
{
  "id": 3,
  "name": "Student Discounts",
  "is_default": true,
  "category_access": {
    "type": "all"
  },
  "discount_rules": [
    {
      "type": "percent",
      "method": true,
      "amount": "5.0000"
    }
  ]
}
```

## <span class="jumptarget"> Get a Count of Customer Groups </span>

Gets a count of customer groups.

*   OAuth
>GET /stores/{store_hash}/v2/customer_groups/count
*   Basic Auth
>GET /api/v2/customer_groups/count

```json
{
  "count": 3
}
```

## <span class="jumptarget"> Create a Customer Group </span>

Creates a new customer group.

*   OAuth
>POST /stores/{store_hash}/v2/customer_groups
*   Basic Auth
>POST /api/v2/customer_groups

### <span class="jumptarget"> Read-only Properties

The following properties of the customer group are read-only. If one or more of these properties are included in the request, it will be rejected.

### <span class="jumptarget"> Requirements

The following properties of the customer group are required. The request won’t be fulfilled unless these properties are valid.

*   name

### <span class="jumptarget"> Notes </span>

A minimal request requires only the customer group name:

```curl
{
    "name": "Wholesale Customers"
}
```

To assign all new customers to the group by default, set **is default** to true:

```curl
{
    "name": "Retail Customers",
    "is_default": true
}
```

To restrict customers in the group to only view and order products from a specific set of categories, provide a **category access** type:

```curl
{
    "name": "Bulk Purchasers",
    "category_access": {
        "type": "specific",
        "categories": [7, 12, 20]
    }
}
```

To provide a 5% store-wide discount for customers in the group, provide a **discount rule** of type **all**:

```curl
{
    "name": "Student Discounts",
    "discount_rules": 
    [{
        "type": "all",
        "method": "percent",
        "amount": 5.00
    }]
}
```

## <span class="jumptarget"> Update a Customer Group </span>

Updates an existing customer group.

*   OAuth
>PUT /stores/{store_hash}/v2/customer_groups/{id}
*   Basic Auth
>PUT /api/v2/customer_groups/{id}

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the customer group are read-only. If one or more of these properties are included in the request, it will be rejected.

### <span class="jumptarget"> Requirements </span>

The following properties of the customer group are required. The request won’t be fulfilled unless these properties are valid.

### <span class="jumptarget"> Notes </span>

Any combination of fields can be updated at once. Discount rules are treated in bulk. The entire set of rules is overwritten when a request is sent.

The following request will remove any existing rules, and apply the new ones:

```curl
{
        "discount_rules": [
            {
                "type": "all",
                "method": "percent",
                "amount": 2.50
            },
            {
                "type": "product",
                "product_id": 33,
                "method": "percent",
                "amount": 5.00
            },
            {
                "type": "category",
                "category_id": 7,
                "method": "price",
                "amount": 12.00
            }
        ]
}
```

## <span class="jumptarget"> Delete a Customer Group </span>

Deletes a customer group.

*   OAuth
>DELETE /stores/{store_hash}/v2/customer_groups/{id}
*   Basic Auth
>DELETE /api/v2/customer_groups/{id}

### <span class="jumptarget"> Notes

All existing customers are unassigned from the group when it is deleted.

## <span class="jumptarget"> Delete All Customer Groups </span>

Deletes all customer groups in the store.


*   OAuth
>DELETE /stores/{store_hash}/v2/customer_groups
*   Basic Auth
>DELETE /api/v2/customer_groups
