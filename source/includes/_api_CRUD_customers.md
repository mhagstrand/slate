|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_customers |
||store_v2_customers_read_only|

### <span class="jumptarget"> List Customers </span>

Gets the collection of customers. (Default sorting is by customer id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/customers`
*   Basic Auth
>`GET /api/v2/customers`

#### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific customers in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| first_name | string | /api/v2/customers?first_name={value} |
| last_name | string | /api/v2/customers?last_name={value} |
| company | string | /api/v2/customers?company={value} |
| email | string | /api/v2/customers?email={value} |
| phone | string | /api/v2/customers?phone={value} |
| store_credit | string | /api/v2/customers?store_credit={value} |
| customer_group_id | string | /api/v2/customers?customer_group_id={value} |
| min_id | int | /api/v2/customers?min_id={value} |
| max_id | int | /api/v2/customers?max_id={value} |
| min_date_created | dateTime or date | /api/v2/customers?min_date_created={value} |
| max_date_created | dateTime or date | /api/v2/customers?max_date_created={value} |
| min_date_modified | dateTime or date | /api/v2/customers?min_date_modified={value} |
| max_date_modified | dateTime or date | /api/v2/customers?max_date_modified={value} |
| tax_exempt_category | date | /api/v2/customers?tax_exempt_category={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 customers are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/customers?page={number} |
| Limit | int | /api/v2/customers?limit={count} |


```json
[
  {
    "id": 1,
    "company": "",
    "first_name": "Random ",
    "last_name": "Joe Bob",
    "email": "random.joebob@example.com",
    "phone": "252-101-2010",
    "date_created": "Tue, 13 Nov 2012 21:16:41 +0000",
    "date_modified": "Tue, 13 Nov 2012 21:16:41 +0000",
    "store_credit": "0.0000",
    "registration_ip_address": "50.58.18.2",
    "customer_group_id": 0,
    "notes": "",
    "tax_exempt_category": "",
    "accepts_marketing": false,
    "addresses": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/customers/1/addresses.json",
      "resource": "/customers/1/addresses"
    }
  },
  {
    "id": 2,
    "company": "",
    "first_name": "Test",
    "last_name": "Customer",
    "email": "foo@randomcustomer.com",
    "phone": "",
    "date_created": "Wed, 14 Nov 2012 04:47:28 +0000",
    "date_modified": "Wed, 14 Nov 2012 04:47:28 +0000",
    "store_credit": "0.0000",
    "registration_ip_address": "99.191.105.74",
    "customer_group_id": 0,
    "notes": "",
    "tax_exempt_category": "",
    "accepts_marketing": false,
    "addresses": {
      "url": "https://store-bwvr466.mybigcommerce.com/api/v2/customers/2/addresses.json",
      "resource": "/customers/2/addresses"
    }
  }
]
```


### <span class="jumptarget"> Get a Customer </span>

Gets a customer.

*   OAuth
>`GET /stores/{store_hash}/v2/customers/{id}`
*   Basic Auth
>`GET /api/v2/customers/{id}`

```json
{
  "id": 1,
  "company": "",
  "first_name": "Random ",
  "last_name": "Joe Bob",
  "email": "random.joebob@example.com",
  "phone": "252-101-2010",
  "date_created": "Tue, 13 Nov 2012 21:16:41 +0000",
  "date_modified": "Tue, 13 Nov 2012 21:16:41 +0000",
  "store_credit": "0.0000",
  "registration_ip_address": "50.58.18.2",
  "customer_group_id": 0,
  "notes": "",
  "tax_exempt_category": "",
  "accepts_marketing": false,
  "addresses": {
    "url": "https://store-bwvr466.mybigcommerce.com/api/v2/customers/1/addresses.json",
    "resource": "/customers/1/addresses"
  }
}
```


### <span class="jumptarget"> Get a Count of Customers </span>

Gets a count of customers.

*   OAuth
>`GET /stores/{store_hash}/v2/customers/count`
*   Basic Auth
>`GET /api/v2/customers/count`

```json
{
  "count": 3
}
```

### <span class="jumptarget"> Create a Customer </span>

Creates a new customer.

*   OAuth
>`POST /stores/{store_hash}/v2/customers`
*   Basic Auth
>`POST /api/v2/customers`


#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the customer are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   date_created
*   date_modified
*   accepts_marketing
*   addresses

#### <span class="jumptarget"> Requirements </span>

The following properties of the customer are required. The request won’t be fulfilled unless these properties are valid.

*   first_name
*   last_name
*   email

#### <span class="jumptarget"> Notes </span>

The `_authentication` object exposes functionality associated with the customer’s ability to log in to the store. All properties of the `_authentication` object are optional.

When the `_authentication` object is not supplied with an update request, then the existing customer password remains the same.

#### <span class="jumptarget"> Updating Passwords </span>

To manually update a customer password in the same way as the Control Panel, supply a value for the password field:

```curl
{
    "_authentication": {
        "password": "12w69Y217PYR96J"
    }
}
```

#### <span class="jumptarget"> Confirming Passwords </span>

An additional optional `password_confirmation` field can also be sent, providing password confirmation as a service:

```curl
{
    "_authentication": {
       "password": "12w69Y217PYR96J",
       "password_confirmation": "12w69Y217PYR96J"
    }
}
```

#### <span class="jumptarget"> Forcing Password Resets </span>

To force a customer to reset their password upon their next login attempt, give the `force_reset` field a value of true, as shown here:

```curl
{
    "_authentication": {
        "force_reset": true
    }
}
```

### <span class="jumptarget"> Update a Customer </span>

Updates an existing customer.

*   OAuth
>`PUT /stores/{store_hash}/v2/customers/{id}`
*   Basic Auth
>`PUT /api/v2/customers/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the customer are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   date_created
*   date_modified
*   accepts_marketing
*   addresses

#### <span class="jumptarget"> Requirements </span>

The following properties of the customer are required. The request won’t be fulfilled unless these properties are valid.

#### <span class="jumptarget"> Notes </span>

The `_authentication` object exposes functionality associated with the customer’s ability to log in to the store. All properties of the `_authentication` object are optional.

When the `_authentication` object is not supplied with an update request, then the existing customer password remains the same.

#### <span class="jumptarget"> Updating Passwords </span>

To manually update a customer password in the same way as the Control Panel, supply a value for the `password` field:

```curl
{
    "_authentication": {
        "password": "12w69Y217PYR96J"
    }
}
```

#### <span class="jumptarget"> Confirming Passwords </span>

An additional optional `password_confirmation` field can also be sent, providing password confirmation as a service:

```curl
{
    "_authentication": {
       "password": "12w69Y217PYR96J"
       "password_confirmation": "12w69Y217PYR96J"
    }
}
```

#### <span class="jumptarget"> Forcing Password Resets </span>

To force a customer to reset their password upon their next login attempt, give the `force_reset` field a value of true, as shown here:

```curl
{
    "_authentication": {
        "force_reset": true
    }
}
```

### <span class="jumptarget"> Delete a Customer </span>

Deletes a customer.

*   OAuth
>`DELETE /stores/{store_hash}/v2/customers/{id}`
*   Basic Auth
>`DELETE /api/v2/customers/{id}`


### <span class="jumptarget"> Delete All Customers </span>

Deletes all customer objects from the store.

*   OAuth
>`DELETE /stores/{store_hash}/v2/customers`
*   Basic Auth
>`DELETE /api/v2/customers`
