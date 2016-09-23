|||
|----|-----|
| **Manages** ||
| **OAuth Scopes** | store_v2_content |
||store_v2_content_read_only|

### <span class="jumptarget"> List Blog Posts </span>

Gets the collection of blog posts. (Default sorting is by published_date, from most-recent to earliest.)

*   OAuth
 `GET /stores/{store_hash}/v2/blog/posts`
*   Basic Auth
 `GET /api/v2/blog/posts`

#### <span class="jumptarget"> Filters </span>

Filter parameters can be added to the URL query string to select specific blog_posts in the collection.

| Parameter | Type | Example |
| --- | --- | --- |
| is_published | string | /stores/{store_hash}/v2/blog/posts?is_published={value} |
| url | string | /stores/{store_hash}/v2/blog/posts?url={value} |
| tag | string | /stores/{store_hash}/v2/blog/posts?tag={value} |
| published_date | string | /stores/{store_hash}/v2/blog/posts?published_date={value} |

#### <span class="jumptarget"> Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 blog_posts are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /stores/{store_hash}/v2/blog/posts?page={number} |
| Limit | int | /stores/{store_hash}/v2/blog/posts?limit={count} |

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
[
  {
    "id": 2,
    "title": "Ten Great New Products",
    "url": "/blog/ten-great-new-products/",
    "preview_url": "/blog/ten-great-new-products/?preview=53829a3bb47f4",
    "body": "<p>Here's ten new products that make great gifts...</p>",
    "tags": [
      "New",
      "Products"
    ],
    "summary": "Here's ten new products that make great gifts...",
    "is_published": false,
    "published_date": {
        "date": "2013-05-09 08:35:45.000000",
        "timezone_type": 1,
        "timezone": "+00:00"
        },
    "published_date_iso8601": "2013-05-09T14:35:45+0000",
    "meta_description": null,
    "meta_keywords": "New,Products",
    "author": "",
    "thumbnail_path": ""
  },
  {
    "id": 1,
    "title": "Your first blog post!",
    "url": "/your-first-blog-post/",
    "preview_url": "/your-first-blog-post/",
    "body": "<p> <strong>Welcome to your blog!</strong><br> A blog is a great place to share details on your products, business and whatever else you think your shoppers might like to hear from you. You can include photos in your blog posts and even videos. For ideas and inspiration on how to structure your blog, take a look at the Bigcommerce <a href='http://blog.bigcommerce.com/' target='_blank'>ecommerce blog</a>.</p><p><strong>How can I delete this post?</strong><br>To delete this post and add your own, login to your <a href='/admin' target='_blank'>admin area</a>, click the Content tab at the top of the screen and choose Blog.</p><p><strong>Powered by Bigcommerce</strong><br>Your website, online store and blog are powered by Bigcommerce <a href='http://www.bigcommerce.com/' target='_blank'>ecommerce software</a>. It includes everything you need to run a beautiful online store including <a href='http://www.bigcommerce.com/templates/' target='_blank'>ecommerce website templates</a>, <a href='http://www.bigcommerce.com/features/hosting/' target='_blank'>ecommerce hosting</a>, an <a href='http://www.bigcommerce.com/features/setup/' target='_blank'>online shopping cart</a> and more.</p>",
    "tags": [
      "Blog",
      "SEO"
    ],
    "summary": " Welcome to your blog! A blog is a great place to share details on your products, business and whatever else you think your shoppers might like to hear from you. You can include photos in your blog posts and even videos. For ideas and inspiration on how to structure your blog, take a look [...]",
    "is_published": true,
    "published_date": {
        "date": "2013-05-09 08:35:45.000000",
        "timezone_type": 1,
        "timezone": "+00:00"
        },
    "published_date_iso8601": "2013-05-09T14:35:45+0000",
    "meta_description": "",
    "meta_keywords": "Blog,SEO",
    "author": "",
    "thumbnail_path": ""
  }
]
```

### <span class="jumptarget"> Get a Blog Post </span>

Gets a blog post.

*   OAuth
`GET /stores/{store_hash}/v2/blog/posts/{id}`
*   Basic Auth
`GET /api/v2/blog/posts/{id}`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```json
{
  "id": 1,
  "title": "Your first blog post!",
  "url": "/your-first-blog-post/",
  "preview_url": "/your-first-blog-post/",
  "body": "<p> <strong>Welcome to your blog!</strong><br> A blog is a great place to share details on your products, business and whatever else you think your shoppers might like to hear from you. You can include photos in your blog posts and even videos. For ideas and inspiration on how to structure your blog, take a look at the Bigcommerce <a href='http://blog.bigcommerce.com/' target='_blank'>ecommerce blog</a>.</p><p><strong>How can I delete this post?</strong><br>To delete this post and add your own, login to your <a href='/admin' target='_blank'>admin area</a>, click the Content tab at the top of the screen and choose Blog.</p><p><strong>Powered by Bigcommerce</strong><br>Your website, online store and blog are powered by Bigcommerce <a href='http://www.bigcommerce.com/' target='_blank'>ecommerce software</a>. It includes everything you need to run a beautiful online store including <a href='http://www.bigcommerce.com/templates/' target='_blank'>ecommerce website templates</a>, <a href='http://www.bigcommerce.com/features/hosting/' target='_blank'>ecommerce hosting</a>, an <a href='http://www.bigcommerce.com/features/setup/' target='_blank'>online shopping cart</a> and more.</p>",
  "tags": [
    "Blog",
    "SEO"
  ],
  "summary": " Welcome to your blog! A blog is a great place to share details on your products, business and whatever else you think your shoppers might like to hear from you. You can include photos in your blog posts and even videos. For ideas and inspiration on how to structure your blog, take a look [...]",
  "is_published": true,
    "published_date": {
        "date": "2013-05-09 08:35:45.000000",
        "timezone_type": 1,
        "timezone": "+00:00"
        },
    "published_date_iso8601": "2013-05-09T14:35:45+0000",
  "meta_description": "",
  "meta_keywords": "Blog,SEO",
  "author": "",
  "thumbnail_path": ""
}
```

### <span class="jumptarget"> Get a Count of Blog Posts </span>

Gets a count of blog posts.

*   OAuth
`GET /stores/{store_hash}/v2/blog/posts/count`
*   Basic Auth
`GET /api/v2/blog/posts/count`

#### <span class="jumptarget"> Response </span>

Example JSON returned in the response:

```
{
  "count": 6
}
```

### <span class="jumptarget"> Create a Blog Post </span>

Creates a new blog post.

*   OAuth
`POST /stores/{store_hash}/v2/blog/posts`
*   Basic Auth
`POST /api/v2/blog/posts`


#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the blog post are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   preview_url
*   summary

#### <span class="jumptarget"> Requirements </span>

The following properties of the blog post are required. The request won’t be fulfilled unless these properties are valid.

*   title
*   body

#### <span class="jumptarget"> Notes </span>

Blog posts default to draft status. Set `is_published` to true to publish posts to the storefront.

If a custom url is not provided, the post’s URL will be generated based on the value of `title`.

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "title": "A Sample Blog Post",
  "body": "<p>This is a blog post.</p>",
  "author": "Author Name",
  "thumbnail_path": "http://cdn.example.com/sample-post.jpg",
  "is_published": true,
  "tags": [
    "Blog",
    "Example"
  ]
}
```

### <span class="jumptarget"> Update a Blog Post </span>

Updates an existing blog post.


*   OAuth
`PUT /stores/{store_hash}/v2/blog/posts/{id}`
*   Basic Auth
`PUT /api/v2/blog/posts/{id}`

#### <span class="jumptarget"> Read-only Properties </span>

The following properties of the blog post are read-only. If one or more of these properties are included in the request, it will be rejected.

*   id
*   preview_url

#### <span class="jumptarget"> Request </span>

Example request object:

```json
{
  "title": "New: A Sample Blog Post",
  "url": "/blog/sample-post"
}
```

### <span class="jumptarget"> Delete a Blog Post </span>

Deletes a blog post.

*   OAuth
`DELETE /stores/{store_hash}/v2/blog/posts/{id}`
*   Basic Auth
`DELETE /api/v2/blog/posts/{id}`

### <span class="jumptarget"> Delete Multiple Blog Posts </span>

Deletes multiple blog posts in the collection.

*   OAuth
`DELETE /stores/{store_hash}/v2/blog/posts`
*   Basic Auth
`DELETE /api/v2/blog/posts`

#### Pagination </span>

Parameters can be added to the URL query string to paginate the collection. The maximum limit is 250. If a limit isn’t provided, up to 50 blog posts are returned by default.

| Parameter | Type | Example |
| --- | --- | --- |
| Page | int | /api/v2/blog/posts?page={number} |
| Limit | int | /api/v2/blog/posts?limit={count} |
