|||
|----|-----|
| **Manages** |
| **OAuth Scopes** | store_v2_content
||store_v2_content_read_only|

### <span class="jumptarget"> List Redirects </span>

Gets the collection of URL redirects.

*   OAuth
>`GET /stores/{store_hash}/v2/redirects`
*   Basic Auth
>`GET /api/v2/redirects`

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 redirects are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/redirects?page={number} |
| limit | int | /api/v2/redirects?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 1,
    "path": "/redirect_path1",
    "forward": {
      "type": "manual",
      "ref": "http://www.bigcommerce.com"
    },
    "url": "http://www.bigcommerce.com"
  },
  {
    "id": 2,
    "path": "/redirect_path2",
    "forward": {
      "type": "product",
      "ref": 35
    },
    "url": "http://store.example.com/product-no-35"
  }
]
```

### <span class="jumptarget"> Get a Redirect </span>

Gets a single URL redirect.

*   OAuth
>`GET /stores/{store_hash}/v2/redirects/{id}`
*   Basic Auth
>`GET /api/v2/redirects/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 1,
  "path": "/redirect_path1",
  "forward": {
    "type": "manual",
    "ref": "http://www.bigcommerce.com"
  },
  "url": "http://www.bigcommerce.com"
}
```

### <span class="jumptarget"> Get a Count of Redirects </span>

Gets a count of redirects.

*   OAuth
>`GET /stores/{store_hash}/v2/redirects/count`
*   Basic Auth
>`GET /api/v2/redirects/count`


#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "count": 0
}
```

### <span class="jumptarget"> Create a Redirect </span>

Creates a new URL redirect.

*   OAuth
>`POST /stores/{store_hash}/v2/redirects`
*   Basic Auth
>`POST /api/v2/redirects`

#### Read-only Properties

The following properties of the redirect are read-only. If one or more of these properties are included in the request, it will be rejected.

*   url

#### <span class="jumptarget"> Requirements </span>

The following properties of the redirect are required. The request won’t be fulfilled unless these properties are valid.

*   path
*   forward

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "path": "/mens_clothing",
  "forward": {
    "type": "category",
    "ref": 3
  }
}
```

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 3,
  "path": "/mens_clothing",
  "forward": {
    "type": "category",
    "ref": 3
  },
  "url": "http://store.example.com/mens"
}
```

### <span class="jumptarget"> Update a Redirect </span>

Updates an existing URL redirect.

*   OAuth
>`PUT /stores/{store_hash}/v2/redirects/{id}`
*   Basic Auth
>`PUT /api/v2/redirects/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the redirect are read-only. If one or more of these properties are included in the request, it will be rejected.

*   url

#### <span class="jumptarget"> Requirements </span>

The following properties of the redirect are required. The request won’t be fulfilled unless these properties are valid.

*   path
*   forward

<aside class="notice">
<span class="aside-notice-hd">NOTES:</span> 
The <code>path</code>, <code>forward.type</code>, and <code>forward.ref</code> fields of an existing redirect can be updated.
</aside>


### <span class="jumptarget"> Delete a Redirect </span>

Deletes a URL redirect.

*   OAuth
>`DELETE /stores/{store_hash}/v2/redirects/{id}`
*   Basic Auth
>`DELETE /api/v2/redirects/{id}`


### <span class="jumptarget"> Delete Multiple Redirects </span>

Deletes multiple URL redirects.

*   OAuth
>`DELETE /stores/{store_hash}/v2/redirects`
*   Basic Auth
>`DELETE /api/v2/redirects`


#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 `redirects` are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/redirects?page={number} |
| limit | int | /api/v2/redirects?limit={count} |
