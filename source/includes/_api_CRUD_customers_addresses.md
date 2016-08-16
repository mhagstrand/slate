|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_customers
||store_v2_customers_read_only

## <span class="jumptarget"> List Customer Addresses </span>

Gets the addresses belonging to a customer. (Default sorting is by address id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/customers/{customer_id}/addresses`<
*   Basic Auth
>`GET /api/v2/customers/{customer_id}/addresses`

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 customer_addresses are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/customers/{customer_id}/addresses?page={number} |
| Limit | int | /api/v2/customers/{customer_id}/addresses?limit={count} |

### <span class="jumptarget"> Read-only Properties </span>

The following property is read-only. If included in the request, it will be rejected.

*   form_fields

### <span class="jumptarget"> Notes </span>

Allowable values for the `address_type` property are `residential` or `commercial`.

In the example Response below, within the `form_fields` array, the first custom field is a checkbox field that could return any number of answers. The second custom field is a date field.


### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 1,
    "customer_id": 10,
    "first_name": "Trisha",
    "last_name": "McLaughlin",
    "company": "",
    "street_1": "12345 W Anderson Ln",
    "street_2": "",
    "city": "Austin",
    "state": "Texas",
    "zip": "78757",
    "country": "United States",
    "country_iso2": "US",
    "phone": ""
  }
]
```

## <span class="jumptarget"> Get a Customer Address </span>

Gets a customer address.

*   OAuth
>`GET /stores/{store_hash}/v2/customers/{customer_id}/addresses/{id}`
*   Basic Auth
>`GET /api/v2/customers/{customer_id}/addresses/{id}`

### <span class="jumptarget"> Read-only Properties </span>

The following property is read-only. If included in the request, it will be rejected.

*   form_fields

### <span class="jumptarget"> Notes </span>

Allowable values for the `address_type` property are `residential` or `commercial`.

In the example Response below, within the `form_fields` array, the first custom field is a checkbox field that could return any number of answers. The second custom field is a date field.


### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 1,
  "customer_id": 10,
  "first_name": "Trisha",
  "last_name": "McLaughlin",
  "company": "",
  "street_1": "12345 W Anderson Ln",
  "street_2": "",
  "city": "Austin",
  "state": "Texas",
  "zip": "78757",
  "country": "United States",
  "country_iso2": "US",
  "phone": ""
}
```

## <span class="jumptarget"> Get a Count of Customer Addresses </span>

Gets a count of customer addresses.

*   OAuth
>`GET /stores/{store_hash}/v2/customers/{customer_id}/addresses/count`
*   Basic Auth
>`GET /api/v2/customers/{customer_id}/addresses/count`

### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 4
}
```

## <span class="jumptarget"> Create a Customer Address </span>

Creates a new customer address. (Note: The "state" property cannot be null. As a workaround for addresses that include no state/province string, pass a space as the "state" value.)

*   OAuth
>`POST /stores/{store_hash}/v2/customers/{customer_id}/addresses`
*   Basic Auth
>`POST /api/v2/customers/{customer_id}/addresses`


### <span class="jumptarget"> Read-only Properties </span>

The following properties of the customer address are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   country_iso2

### <span class="jumptarget"> Requirements </span>

The following properties of the customer address are required. The request won’t be fulfilled unless these properties are valid.

*   first_name
*   last_name
*   phone
*   street_1
*   city
*   state
*   zip
*   country

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "first_name": "Trisha",
  "last_name": "McLaughlin",
  "company": "",
  "street_1": "12345 W Anderson Ln",
  "street_2": "",
  "city": "Austin",
  "state": "Texas",
  "zip": "78757",
  "country": "United States",
  "phone": "512-123-4567"
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 1,
  "customer_id": 1,
  "first_name": "Trisha",
  "last_name": "McLaughlin",
  "company": "",
  "street_1": "12345 W Anderson Ln",
  "street_2": "",
  "city": "Austin",
  "state": "Texas",
  "zip": "78757",
  "country": "United States",
  "country_iso2": "US",
  "phone": ""
}
```

## <span class="jumptarget"> Update a Customer Address </span>

Updates an existing customer address.

*   OAuth
>`PUT /stores/{store_hash}/v2/customers/{customer_id}/addresses/{id}`
*   Basic Auth
`PUT /api/v2/customers/{customer_id}/addresses/{id}`

### <span class="jumptarget"> Read-only Properties

The following properties of the customer address are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   country_iso2

### <span class="jumptarget"> Requirements </span>

The following properties of the customer address are required. The request won’t be fulfilled unless these properties are valid.

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "first_name": "Trisha",
  "last_name": "McLaughlin",
  "company": "",
  "street_1": "12345 W Anderson Ln",
  "street_2": "",
  "city": "Austin",
  "state": "Texas",
  "zip": "78757",
  "country": "United States",
  "phone": ""
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 1,
  "customer_id": 1,
  "first_name": "Trisha",
  "last_name": "McLaughlin",
  "company": "",
  "street_1": "12345 W Anderson Ln",
  "street_2": "",
  "city": "Austin",
  "state": "Texas",
  "zip": "78757",
  "country": "United States",
  "country_iso2": "US",
  "phone": ""
}
```
## <span class="jumptarget"> Delete a Customer Address </span>

Deletes a customer address.

*   OAuth
>`DELETE /stores/{store_hash}/v2/customers/{customer_id}/addresses/{id}`
*   Basic Auth
>`DELETE /api/v2/customers/{customer_id}/addresses/{id}`

## <span class="jumptarget"> Delete Multiple Customer Addresses </span>

Deletes multiple customer addresses.

*   OAuth
>`DELETE /stores/{store_hash}/v2/customers/{customer_id}/addresses`
*   Basic Auth
>`DELETE /api/v2/customers/{customer_id}/addresses`

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 customer_addresses are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/customers/{customer_id}/addresses?page={number} |
| Limit | int | /api/v2/customers/{customer_id}/addresses?limit={count} |
