## <span class="jumptarget"> Product Images </span>

Images associated with a product.

### <span class="jumptarget"> Product Image Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int |
| product_id | int | The ID of the product to which the image belongs. |
| image_file | string | When specifying a product image, the `image_file` should be specified as either: a path to an image already uploaded via FTP to the import directory (with the path relative to the import directory); or a URL to an image accessible on the internet. |
| is_thumbnail | boolean | If true, the image is used as the product's thumbnail. |
| sort_order | int | The order in which the image will be displayed on the product page. Lower integers will give the image a higher priority. If the image is given a lower priority, then when updating, all images with a `sort_order` the same or greater than the image's new `sort_order` value will have their `sort_order` reordered. |
| description | text | The description for the image |
| date_created | date |
