# <span class="jumptarget"> Response Headers </span>

| Header | Possible Values | Description | Example |
| ------ | --------------- | ----------- | ------- |
| **Date** | An <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a> date. | The date the response was sent. | `Tue, 15 Nov 2011 12:45:26 GMT` |
| **Last-Modified** | An <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a> date. | The date the resource was last modified. Please refer to the individual resource pages for support for this header. | `Tue, 15 Nov 2011 12:45:26 GMT` |
| **Content-Type** | `application/json` (for JSON requests) `application/xml` (for XML requests, or if no extension is supplied) | The MIME type of the response, dependent on the extension of the endpoint that was requested. | `application/json` |
| **Content-Location** | A URI. | Sent if the request was redirected. | `/api/v2/orders/5.json` |
| **WWW-Authenticate** | `Basic` | Indicates the authentication scheme that should be used to access the API. Sent with a `401 Unauthorized` response if HTTP Basic Authentication credentials weren't supplied. | `Basic` |
| **Location** | A URI | The URI of a newly created resource. Sent with a `201 Created` response. | `/api/v2/products/7` |
| **X-Retry-After** | An integer | Rate limited response, indicating the number of seconds before the quota refreshes. See the [OAuth rate limits documentation](#rate-limits_oauth) for more information. | 15 |
| **X-BC-ApiLimit-Remaining** | An integer | The number of API requests remaining for the current period (rolling one hour). See the [Basic Auth rate limits documentation](#rate-limits-basic-auth) for more information. | `987` |
| **X-BC-Store-Version** | A version number | The version of Bigcommerce the store is running on. This header is available on versions 7.3.6+. | ` 7.3.6` |
