|||
|---|---|
| **Manages** |
| **OAuth Scopes** | `default`

## <span class="jumptarget"> List Hooks </span>

Index of registered webhooks.

*   OAuth
>`GET /stores/{store_hash}/v2/hooks`

```json
[
  {
    "id": 101,
    "store_hash": "5ueh97",
    "client_id": "40c672b9177b5d3a8dbfad24321be15d",
    "scope": "store/order/*",
    "headers": {
      "X-Custom-Auth-Header": "{secret_auth_password}"
    },
    "destination": "https://app.example.com/orders",
    "created_at": "2013-01-17T11:27:50+11:00",
    "updated_at": "2013-01-17T11:27:50+11:00",
    "is_active": true
  },
  {
    "id": 102,
    "store_hash": "5ueh97",
    "client_id": "40c672b9177b5d3a8dbfad24321be15d",
    "scope": "store/product/created",
    "headers": {
      "X-Custom-Auth-Header": "{secret_auth_password}"
    },
    "destination": "https://app.example.com/products",
    "created_at": "2013-01-17T11:27:50+11:00",
    "updated_at": "2013-01-17T11:27:50+11:00",
    "is_active": true
  }
]
```

## <span class="jumptarget"> Get a Hook </span>

Gets a registered webhook.

*   OAuth
>`GET /stores/{store_hash}/v2/hooks/{id}`

```json
{
  "id": 101,
  "store_hash": "5ueh97",
  "client_id": "40c672b9177b5d3a8dbfad24321be15d",
  "scope": "store/order/*",
  "headers": {
    "X-Custom-Auth-Header": "{secret_auth_password}"
  },
  "destination": "https://app.example.com/orders",
  "created_at": "2013-01-17T11:27:50+11:00",
  "updated_at": "2013-01-17T11:27:50+11:00",
  "is_active": true
}
```

## <span class="jumptarget"> Create a Hook </span>

Register a new webhook.

*   OAuth
>`POST /stores/{store_hash}/v2/hooks`

### <span class="jumptarget"> Requirements </span>

The following properties of the webhooks are required. The request won’t be fulfilled unless these properties are valid.

*   scope
*   destination

### <span class="jumptarget"> Notes </span>

Scopes can be specified using wildcard syntax, or the full path to an event.

```curl
{
  "scope": "store/order/*",
  "headers": {
    "X-Custom-Auth-Header": "{secret_auth_password}"
  },
  "destination": "https://app.example.com/orders",
  "is_active": true
}
```

## <span class="jumptarget"> Update a Hook </span>

Edit the details of a registered webhook.

*   OAuth
>`PUT /stores/{store_hash}/v2/hooks/{id}`

```curl
{
  "destination": "https://app.example.com/orders_changed",
  "is_active": true
}
```

```json
{
  "id": 101,
  "store_hash": "5ueh97",
  "client_id": "40c672b9177b5d3a8dbfad24321be15d",
  "scope": "store/order/*",
  "headers": {
    "X-Custom-Auth-Header": "secret_hooks_auth_password"
  },
  "destination": "https://app.example.com/orders_changed",
  "created_at": "2013-01-17T11:27:50+11:00",
  "updated_at": "2013-01-18T11:27:50+11:00",
  "is_active": true
}
```

## <span class="jumptarget"> Delete a Hook </span>

Deletes a single webhook.

*   OAuth
>`DELETE /stores/{store_hash}/v2/hooks/{id}`
