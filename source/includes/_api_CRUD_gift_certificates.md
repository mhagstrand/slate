### <span class="jumptarget"> List Gift Certificates </span>

Retrieves the gift certificates available. (Default sorting is by gift-certificate id, from lowest to highest.)

*   OAuth
`GET /stores/{store_hash}/v2/gift_certificates`  
*   Basic Auth
`GET /api/v2/gift_certificates`

#### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific gift_certificates in the collection.

| Parameter    | Type   | Example                                        |
| ------------ | ------ | ---------------------------------------------- |
| min_id     | int    | /api/v2/gift_certificates?min_id={value}     |
| max_id     | int    | /api/v2/gift_certificates?max_id={value}     |
| code       | string | /api/v2/gift_certificates?code={value}       |
| to_name    | string | /api/v2/gift_certificates?to_name={value}    |
| to_email   | string | /api/v2/gift_certificates?to_email={value}   |
| from_name  | string | /api/v2/gift_certificates?from_name={value}  |
| from_email | string | /api/v2/gift_certificates?from_email={value} |

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn't provided, up to 50 gift_certificates are returned by default.

| Parameter | Type | Example                                   |
| --------- | ---- | ----------------------------------------- |
| page    | int  | /api/v2/gift_certificates?page={number} |
| limit   | int  | /api/v2/gift_certificates?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
    {
      "giftcertificates": {
        "giftcertificate": [
          {
            "id": "24",
            "code": "10R-5E2-BO4-RWT",
            "amount": "1000.0000",
            "status": "active",
            "balance": "500.0000",
            "to_name": "Alyss",
            "order_id": "1281",
            "template": "false",
            "to_email": "test@test.com",
            "from_name": "Noland",
            "from_email": "test1@test.com",
            "customer_id": "0",
            "expiry_date": "0",
            "purchase_date": "1454432829"
          },
          {
            "id": "25",
            "code": "10R-6E3-AO4-RST",
            "amount": "700.0000",
            "status": "active",
            "balance": "700.0000",
            "to_name": "Alyss",
            "order_id": "0",
            "template": "false",
            "to_email": "test@test.com",
            "from_name": "Noland",
            "from_email": "test1@test.com",
            "customer_id": "0",
            "expiry_date": "0",
            "purchase_date": "1454433240"
          },
          {
            "id": "27",
            "code": "15R-6E3-AO4-RST",
            "amount": "50.0000",
            "status": "active",
            "balance": "50.0000",
            "to_name": "Lyss",
            "order_id": "0",
            "template": "false",
            "to_email": "test5@test.com",
            "from_name": "Somethingelse",
            "from_email": "test15@test.com",
            "customer_id": "0",
            "expiry_date": "0",
            "purchase_date": "1454433621"
          }
        ]
      }
    }
```
  
### <span class="jumptarget"> Get a Gift Certificate </span>

Retrieves a specified gift certificate.

*   OAuth
`GET /stores/{store_hash}/v2/gift_certificates/{id}`
*   Basic Auth
`GET /api/v2/gift_certificates/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
    {
      "giftcertificate": {
        "id": "24",
        "code": "10R-5E2-BO4-RWT",
        "amount": "500.0000",
        "status": "active",
        "balance": "500.0000",
        "to_name": "Jane",
        "order_id": "1281",
        "template": "false",
        "to_email": "test@test.com",
        "from_name": "Tarzan",
        "from_email": "test1@test.com",
        "customer_id": "0",
        "expiry_date": "0",
        "purchase_date": "1454432829"
      }
    }
```

### <span class="jumptarget"> Create a Gift Certificate </span>

Creates a new gift certificate.

*   OAuth
`POST /stores/{store_hash}/v2/gift_certificates`
*   Basic Auth
`POST /api/v2/gift_certificates`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the gift certificate are read-only. If one or more of these properties are included in the request, it will be rejected:

* id
* order_id
* template


#### <span class="jumptarget"> Requirements </span>

The following properties of the gift certificate are required. The request won't be fulfilled unless these properties are valid.

* to_name
* to_email
* from_name
* from_email
* amount

#### <span class="jumptarget"> Notes </span>

When a gift certificate is created through the API, no email notification is triggered to the specified recipient.

The gift certificate's status can be one of the following:

* pending
* active
* disabled
* expired

The gift certificate's template can be one of the following:

* Birthday
* Boy
* Celebration
* Christmas
* General
* Girl
* {blank}

#### <span class="jumptarget"> Request </span>

Example request object:

```json
    {
      "code": "10R-6E3-AO4-RST",
      "amount": "700.0000",
      "status": "active",
      "to_name": "Jane",
      "to_email": "test@test.com",
      "from_name": "Tarzan",
      "from_email": "test1@test.com"
    }
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
    {
      "giftcertificate": {
        "id": "25",
        "code": "10R-6E3-AO4-RST",
        "amount": "700.0000",
        "status": "active",
        "balance": "700.0000",
        "to_name": "Jane",
        "order_id": "0",
        "template": "false",
        "to_email": "test@test.com",
        "from_name": "Tarzan",
        "from_email": "test1@test.com",
        "customer_id": "0",
        "expiry_date": "0",
        "purchase_date": "1454433240"
      }
    }
```

### <span class="jumptarget"> Update a Gift Certificate </span>

Updates an existing gift certificate.

*   OAuth
`PUT /stores/{store_hash}/v2/gift_certificates/{ID}`
*   Basic Auth
`PUT /api/v2/gift_certificates/{ID}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the gift certificate are read-only. If one or more of these properties are included in the request, it will be rejected:

* id
* order_id
* template


#### <span class="jumptarget"> Request </span>

Example request object:

```json
    {
      "amount": "1000.0000"
    }
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
    {
      "giftcertificate": {
        "id": "24",
        "code": "10R-5E2-BO4-RWT",
        "amount": "1000.0000",
        "status": "active",
        "balance": "500.0000",
        "to_name": "Jane",
        "order_id": "1281",
        "template": "false",
        "to_email": "test@test.com",
        "from_name": "Tarzan",
        "from_email": "test1@test.com",
        "customer_id": "0",
        "expiry_date": "0",
        "purchase_date": "1454432829"
      }
    }
```

### <span class="jumptarget"> Delete a Gift Certificate </span>

Deletes a specified gift certificate. (If successful, this will typically return a "204 No Content".)

*   OAuth
`DELETE /stores/{store_hash}/v2/gift_certificates/{id}`
*   Basic Auth
`DELETE /api/v2/gift_certificates/{id}`

### <span class="jumptarget"> Delete All Gift Certificates </span>

Deletes all gift certificates associated with the store. (If successful, this will typically return a "204 No Content".)

*   OAuth
`DELETE /stores/{store_hash}/v2/gift_certificates`
*   Basic Auth
`DELETE /api/v2/gift_certificates` 
