|||
|---|---|
| Manages |
| OAuth Scopes | `store_v2_information`
||`store_v2_information_read_only`

## <span class="jumptarget"> Tax Class Operations </span>

*   [List Tax Classes](#list-tax-classes)
*   [Get a Tax Class](#get-a-tax-class)

## <span class="jumptarget"> List Tax Classes </span>

Gets the tax classes set up for a store. (Default sorting is by tax-class id, from lowest to highest.)

*   [OAuth](#list-tax-classes-oauth)
>`GET /stores/{store_hash}/v2/tax_classes`
*   [Basic Auth](#list-tax-classes-basic)
>`GET /api/v2/tax_classes`

### <span class="jumptarget"> Filters </span>

There are no filter parameters specific to `tax_classes`.

### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 tax_classes are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| page | int | /api/v2/tax_classes?page={number} |
| limit | int | /api/v2/tax_classes?limit={count} |

## <span class="jumptarget"> Get a Tax Class </span>

Gets a tax class.

*   [OAuth](#get-a-tax-class-oauth)
>`GET /stores/{store_hash}/v2/tax_classes/{id}`
*   [Basic Auth](#get-a-tax-class-basic)
>`GET /api/v2/tax_classes/{id}`
