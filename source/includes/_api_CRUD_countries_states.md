|||
|---|---|
| **Manages** |
| **OAuth Scopes** | `default`

## <span class="jumptarget"> List States </span>

Gets the list of states belonging to a country.

*   OAuth
>`GET /stores/{store_hash}/v2/countries/{country_id}/states`
*   Basic Auth
>`GET /api/v2/countries/{country_id}/states`

### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific states in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| state | string | /api/v2/countries/{country_id}/states?state={value} |
| state_abbreviation | string | /api/v2/countries/{country_id}/states?state_abbreviation={value} |

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 states are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/countries/{country_id}/states?page={number} |
| Limit | int | /api/v2/countries/{country_id}/states?limit={count} |

```json
[
  {
    "id": 1,
    "state": "Alabama",
    "state_abbreviation": "AL",
    "country_id": 226
  },
  {
    "id": 2,
    "state": "Alaska",
    "state_abbreviation": "AK",
    "country_id": 226
  }
]
```

## <span class="jumptarget"> Get a State </span>

Gets a state belonging to a country.

*   OAuth
>`GET /stores/{store_hash}/v2/countries/{country_id}/states/{id}`
*   Basic Auth
>`GET /api/v2/countries/{country_id}/states/{id}`

```json
{
  "id": 1,
  "state": "Alabama",
  "state_abbreviation": "AL",
  "country_id": 226
}
```

## <span class="jumptarget"> Get a Count of States </span>

Gets a count of the number of states within a specified country.

*   OAuth
>`GET /stores/{store_hash}/v2/countries/{country_id}/states/count`
*   Basic Auth
>`GET /api/v2/countries/{country_id}/states/count`

```json
{
  "count": 65
}
```
