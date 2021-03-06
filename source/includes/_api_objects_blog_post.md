# <span class="jumptarget"> Store Content Reference </span>

Store Content APIs help merchants edit and publish blog posts and Web pages, improve SEO, and drive traffic to stores. They include Blog Posts and Redirects.

## <span class="jumptarget"> Blog Posts </span>

A content entry in the store’s blog

### <span class="jumptarget"> Blog Posts Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int |  |
| title | string |  |
| url | string |  |
| preview_url | string |  |
| body | string |  |
| tags | array of strings |  |
| summary | string |  |
| is_published | boolean |  |
| published_date | object | Members are `date` (date string), `timezone_type` (integer), and `timezone` (string representing an hours:minutes offset, in the format `"+hh:mm"` or `"-hh:mm"`). |
| published_date_iso8601 | date string |  |
| meta_description | string |  |
| meta_keywords | string |  |
| author | string |  |
| thumbnail_path | string |  |
