# <span class="jumptarget"> Products Reference </span>

Products APIs include Brands, Buk Pricing Rules, Categories, Configurable Fields, Custom Fields, Google Product Search Mappings, Options, Option Sets, Option Set Options, Option Values, Products, Product Images, Product[-specific] Options, Product Reviews, Product Rules, Product Videos, and SKUs.

## <span class="jumptarget"> Brands </span>

Brand facets for identifying and categorizing products according to their manufacturer or company metonym.

### <span class="jumptarget"> Brand Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int |
| name | string | The name of the brand. Must be unique. |
| page_title | string | The title shown in the browser while viewing the brand |
| meta_keywords | text | Comma separated list of meta keywords to include in the HTML |
| meta_description | text | A meta description to include |
| image_file | string | A valid image |
| search_keywords | string | A comma separated list of keywords that can be used to locate this brand |
