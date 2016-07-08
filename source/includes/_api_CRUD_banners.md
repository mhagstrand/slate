|   |   |
| ----- | ----- |
| **Manages** | Banner Object |
| **OAuth Scopes** |  store_v2_marketing |
| |store_v2_marketing_read_only |

## <span class="jumptarget"> List Banners </span>

Gets the banners available. (Default sorting is by banner id, from lowest to highest.)

*   OAuth
>`GET /stores/{store_hash}/v2/banners`
*   Basic Auth
>`GET /api/v2/banners`

### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific banners in the collection.

| Parameter | Type | Example                          |
| --------- | ---- | -------------------------------- |
| min_id  | int  | /api/v2/banners?min_id={value} |
| max_id  | int  | /api/v2/banners?max_id={value} |

### <span class="jumptarget"> Pagination </span>
Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn't provided, up to 50 banners are returned by default.

| Parameter | Type | Example                         |
| --------- | ---- | ------------------------------- |
| page    | int  | /api/v2/banners?page={number} |
| limit   | int  | /api/v2/banners?limit={count} |

### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```
    {
      "banners": {
        "banner": [
          {
            "id": "1",
            "name": "Grand Closing Sale",
            "page": "home_page",
            "content": "Thanks for shopping with us.",
            "date_to": "1393218000",
            "item_id": "0",
            "visible": "0",
            "location": "top",
            "date_from": "1391576400",
            "date_type": "custom",
            "date_created": "1392073898"
          },
          {
            "id": "2",
            "name": "New Year Nerd Bling",
            "page": "category_page",
            "content": "Discount on Apparel for Orders of $20 or more to Celebrate 2014. Use code NRDBLING14 at Checkout.",
            "date_to": "1394427600",
            "item_id": "30",
            "visible": "0",
            "location": "top",
            "date_from": "1392008400",
            "date_type": "custom",
            "date_created": "1392073935"
          },
          {
            "id": "3",
            "name": "Test",
            "page": "home_page",
            "content": "The latest in popular board games. Game night fun for the whole family.",
            "date_to": "0",
            "item_id": "0",
            "visible": "0",
            "location": "top",
            "date_from": "0",
            "date_type": "always",
            "date_created": "1429485000"
          },
          {
            "id": "4",
            "name": "Hi, Jason",
            "page": "home_page",
            "content": "Swanky",
            "date_to": "0",
            "item_id": "0",
            "visible": "0",
            "location": "top",
            "date_from": "0",
            "date_type": "always",
            "date_created": "1441858037"
          }
        ]
      }
    }
```
  
## <span class="jumptarget"> Get a Banner </span>

Retrieves a specified banner.

*   OAuth
>`GET /stores/{store_hash}/v2/banners/{id}`
*   Basic Auth
>`GET /api/v2/banners/{id}`

### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```
    {
      "banner": {
        "id": "4",
        "name": "Hi, Jason",
        "page": "home_page",
        "content": "Swanky",
        "date_to": "0",
        "item_id": "0",
        "visible": "0",
        "location": "top",
        "date_from": "0",
        "date_type": "always",
        "date_created": "1441858037"
      }
    }
```
  
## <span class="jumptarget"> Create a Banner </span>

Creates a new banner.

*   OAuth
> `POST /stores/{store_hash}/v2/banners`
*   Basic Auth
> `POST /api/v2/banners`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the banner are read-only. If one or more of these properties are included in the request, it will be rejected.

### <span class="jumptarget"> Requirements </span>

The following properties of the banner are required. The request won't be fulfilled unless these properties are valid.

* name
* content
* page
* location
* date_type

### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```
    {
      "banner": {
        "id": "5",
        "name": "test",
        "page": "home_page",
        "content": "this is a test",
        "date_to": "0",
        "item_id": "0",
        "visible": "0",
        "location": "top",
        "date_from": "0",
        "date_type": "always",
        "date_created": "1449168936"
      }
    }
```
  
## <span class="jumptarget"> Update a Banner </span>

Updates an existing banner. Your request may update any of the properties that are writeable for the Create (POST) operation.

*   OAuth
> `PUT /stores/{store_hash}/v2/banners/{id}`
*   Basic Auth
> `PUT /api/v2/banners/{id}`

### <span class="jumptarget"> Read-only Properties </span>

The following properties of the banner are read-only. If one or more of these properties are included in the request, it will be rejected.

### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```
    {
      "banner": {
        "id": "4",
        "name": "Hi, Jason",
        "page": "home_page",
        "content": "Swanky",
        "date_to": "0",
        "item_id": "0",
        "visible": "0",
        "location": "top",
        "date_from": "0",
        "date_type": "always",
        "date_created": "1441858037"
      }
    }
```
  
## <span class="jumptarget"> Delete a Banner </span>

Deletes a specified banner. (If successful, this will typically return a "204 No Content".)

*   OAuth
> `DELETE /stores/{store_hash}/v2/banners/{id}`
*   Basic Auth
> `DELETE /api/v2/banners/{id}`

## <span class="jumptarget"> Delete All Banners </span>

Deletes all banners associated with the store. (If successful, this will typically return a "204 No Content".)

*   OAuth
> `DELETE /stores/{store_hash}/v2/banners/`
*   Basic Auth
> `DELETE /api/v2/banners/`
