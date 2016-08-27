## Migrating to OAuth

Apps in the App Store that use Basic Authentication are deprecated, and will be sunsetted in the near future. We will contact you directly to let you know the details and the timeline of this transition. This page discusses how to migrate your public app from Basic Authentication to OAuth.


<aside class="notice">
<span class="aside-notice-hd">Private Apps Exempted</span><br><br>
Private apps <em>not</em> in the App Store can continue to use Basic Authentication, and are not subject to a sunset. We do not currently provide a means of keeping OAuth apps private.
</aside>


OAuth allows you to authenticate and access the Stores API on behalf of any merchant who authorizes your app. Merchants no longer have to bounce between multiple browser tabs or cut and paste API keys to install apps.

Other benefits of updating include:

*   Improved [Rate Limits](/api/v2/#rate-limits_oauth). For apps that access the API using OAuth, we’re able to offer quota-based limits and the possibility to increase the overall volume of requests for stores on higher plans.

*   Ability to set and receive [webhooks](/api/webhooks-getting-started) callbacks.

*   Privileged access to new capabilities.

### How to Migrate

To update your public Basic Authentication app to an OAuth app, you will need to make the following changes:

1.  Get a **Client ID** and a **Client Secret** by [registering your app](/api/v2/#registration ).
2.  Get a permanent OAuth token as discussed in [App Installation](/api/v2/#callback).
3.  Update your app so that it can process the [signed payloads](/api/v2/#load) that Bigcommerce sends when a merchant loads your app.
4.  [Change your base paths](#base-paths).
5.  Update your app to observe the [OAuth rate limits](/api/v2/#rate-limits_oauth).

### <span class="jumptarget id="base-paths"> Change Your Base Paths </span>

Apps using Basic Authentication used a path that had the store's hash as part of the domain. Store owners provide the store hash to the Basic Authentication app using a manual copy and paste procedure.

Apps using OAuth place the store's hash inside a context path. OAuth apps receive the store's hash during the [app installation sequence](/api/v2/#callback).

The following table provides a quick comparison of the syntax and example paths.

 Basic Auth | OAuth |
| --- | --- | --- |
| **SYNTAX** | https://store-{_store_hash_}.mybigcommerce.com/api | https://api.bigcommerce.com/stores/{_store_hash_} |
| **EXAMPLE** | https://store-g5cd38.mybigcommerce.com/api/v2/time | https://api.bigcommerce.com/stores/g5cd38/v2/time |

### Rate Limiting

Rate limiting affects only high-volume applications, but there are several changes that all consumers of the API should be aware of:

*   **509 status codes are no longer returned**: We’re now returning a `429` status code to represent “Too Many Requests”. This is consistent with [RFC 6585](http://tools.ietf.org/html/rfc6585).

*   **Time to wait before retries**: The old rate limiting scheme used a fixed hourly limit, regardless of who was accessing the API and how many requests were made per app or per user. This value was returned in the `X-BC-ApiLimit-Remaining` header. The `X-BC-ApiLimit-Remaining` header is not sent to OAuth apps. When an OAuth client is rate limited, the header `X-Retry-After` signals the number of seconds that a client should wait before retrying the request.

*   **More information**: Further information can be found on the [OAuth rate limits page](/api/rate-limits/oauth) and the [Response Headers page](/api/headers).
