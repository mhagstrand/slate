# <span class="jumptarget"> Template Syntax </span>

Each of the layout, panel, and snippet files in a theme uses variables (also called placeholders) to show external content or content fetched from the database (such as the name of a product).

Template variables are enclosed within `%%` markers. There are various different types of variables available for use in templates: global variables, string variables, panel references, snippet references, and file includes.

### <span class="jumptarget"> Global Variables </span>

Global variables are used to render dynamic content into a template. Global variables are referenced using the following syntax:

<pre>%%GLOBAL_[placeholder_name]%%</pre>

For example:

<pre>%%GLOBAL_ProductName%%</pre>

The availability of specific variables differs on the layout template that’s being edited (for example, the variable for the description of a product is available on the product details page, but not on the category view/product listing page).

### <span class="jumptarget"> Panel References </span>

Panels are the different blocks used by Bigcommerce to build a page. Panels are referenced both inside layout files and inside other panel files.

Panels are referenced in templates as follows, where [panel_name] is the name of a file in the Theme’s Panels directory:

<pre>%%Panel.[panel_name]%%</pre>

For example:

<pre>%%Panel.HomeFeaturedProducts%%</pre>

This panel reference will load in the content from the `Panels/HomeFeaturedProducts.html` panel file.

### <span class="jumptarget"> Snippet References </span>

Snippets are templates containing HTML that can be used multiple times on one page either by being used in different parts of the template or being part of a loop that for example builds a list of products on the page (each product in the list being a repeated version of the same snippet)

Snippets are referenced in templates as follows:

<pre>%%SNIPPET_[snippet_name]%%</pre>

In most cases, this will correspond to a similarly named file in the Theme’s Snippets directory. For example:

<pre>%%SNIPPET_HomeFeaturedProducts%%</pre>

This snippet reference will contain a repeated copy of `Snippets/HomeFeaturedProductsItem.html`, one for each featured product to be shown in the list.

### <span class="jumptarget"> Reference your own theme assets explicitly </span>

As these practices have recently changed, this documentation will provide examples comparing the syntax you may have used before with the updated syntax.

You can use WebDav to upload your own custom theme assets (javascripts, stylesheets, images, fonts, etc). Reference these assets which aren’t present in the base theme using the `ASSET` syntax in your html.

<pre>%%ASSET_[path_to_asset]%%</pre>

This syntax will output an absolute URL like `http://cdn-host/templates/__custom/path_to_asset?t=timestamp`, which loads the custom asset from our CDN server, and includes a cache busting querystring.

For example:

<pre>%%ASSET_Styles/myownstyle.css%%</pre>

will be output as:

<pre>http://cdn-host/templates/__custom/Styles/myonwstyle.css?t=123</pre>

#### <span class="jumptarget"> Syntax Examples </span>

##### <span class="jumptarget"> Assets in CSS files </span>

| Previous Syntax | Updated Syntax(CDN) |
|-----------------|---------------------|
|url(/template/images/foo.jpg) | url(%%ASSET_images/foo.jpg%%)
|url(/templates/__custom/images/foo.jpg) | url(%%ASSET_images/foo.jpg%%)
|url(/template/foo/bar/font.woff) | url(%%ASSET_foo/bar/font.woff%%)
|url(../images/foo.jpg) | url(%%ASSET_images/foo.jpg%%)
|url(icons/foo.ico) | url(%%ASSET_Styles/icons/foo.ico%%)
|url(//mystore.com/template/images/foo.jpg) | url(%%ASSET_images/foo.jpg%%)

##### <span class="jumptarget"> Assets in HTML files </span>

| Previous Syntax | Updated Syntax(CDN) |
|---------------|----------------|
|<pre><img src="../images/foo.jpg" />|<pre><img src="%%ASSET_images/foo.jpg%%" />|
|<img src="//mystore.com/template/images/foo.jpg"> |<img src="%%ASSET_images/foo.jpg%%" />
|<link href="/template/Styles/foo.css" /> |<link href="%%ASSET_Styles/foo.css%%" />
|<script src="/template/js/foo.js%%"></script> | <script src="%%ASSET_js/foo.js%%"></script>

##### <span class="jumptarget"> Assets outside of the template directory </span>

The `ASSET` variable can only be used with files and folders inside of the template directory. In order to take advantage of the benefits provided when using a CDN, we strongly recommend moving your assets to the template directory. However, if you need to keep assets outside of the template directory, the best practice is to use **protocol-relative** absolute or fully qualified URLs.

<pre><img src="//mystore.com/content/images/foo.jpg" />
url(//mystore.com/content/images/foo.jpg")
<link href="//mystore.com/content/foo.css" rel="stylesheet" type="text/css" /></pre>

### <span class="jumptarget"> File Includes </span>

It’s also possible to include another file within a template. This can be accomplished using file include variables. This is extremely useful if external files such as banners, site-network headers or other content need to be included.

File includes can either be local (relative to the `template/Includes/` directory), contain absolute file system paths, or be remote includes by specifying the full URL to a file to be included.

Includes are referenced in the template files as follows:

<pre>%%Include.[file_path]%%</pre>

For example:

<pre>
%%Include.http://www.example.com/remote_file.html%%</pre>
