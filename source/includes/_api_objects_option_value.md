# <span class="jumptarget"> Product Option Values </span>

Values that can be selected for an option.

## <span class="jumptarget"> Product Option Value Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int | A unique, read-only value that identifies this option value. |
| option_id | int | A read-only value identifying the option to which this option value is assigned. |
| label | string | The name of the label. Cannot be the same as the label of another value already assigned to the option. |
| sort_order | int |
| value | text | Acceptable values generally depend on the option type, as defined in the option:<br><br> `RB`: string to be displayed to the customer.<br> `RT`: string to be displayed to the customer.<br> `S`: string to be displayed to the customer.<br> `P`: product ID;<br> `PI`: product ID.<br> `CS`: one of the following color values – a hexadecimal color code to create a color option (e.g., `#0f0000`);<br> a CSS 2.1 color name (e.g., `blue`);<br> up to three hexadecimal color codes and/or color names, separated by pipe symbols (e.g., <code>#FF0000&#124;lime&#124;#0000FF</code>);<br>  a URI to an image to create a texture (e.g., `http://store.com/images/myimg.png`);<br> or the name of an image file in the store's WebDAV `import` folder  (e.g., `myimg.png`). |
| is_default | boolean | Whether or not this value is selected by default. For each option, only one option value can be selected by default. |
