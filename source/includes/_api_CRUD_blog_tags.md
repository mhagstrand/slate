# Blog Tags

Index of tags used on the store’s blog.

|||
|---|---|
| **Manages** |
| **OAuth Scopes** | store_v2_content|
||store_v2_content_read_only|

## <span class="jumptarget"> List Tags </span>

List of tags with associated blog posts.

*   OAuth
>`GET /stores/{store_hash}/blog/tags`
*   Basic Auth
>`GET /api/blog/tags`

```json
[
  {
    "tag": "Blog",
    "post_ids": [
      1
    ]
  },
  {
    "tag": "New",
    "post_ids": [
      2
    ]
  },
  {
    "tag": "Products",
    "post_ids": [
      2
    ]
  },
  {
    "tag": "Seo",
    "post_ids": [
      1
    ]
  }
]
```
