## <span class="jumptarget"> <a name="rate-limits_oauth"></a> Rate Limits </span>

Apps that authenticate with OAuth are rate limited based on a quota that is refreshed every five seconds. The maximum quota for a store will vary depending on the store’s <a href="https://www.bigcommerce.com/pricing/" target="_blank"> plan </a>.

Each request to the API consumes one available request from the quota. When an app hits the quota limit, subsequent requests are rejected until the quota is refreshed.

The store’s overall quota is evenly distributed across all apps that are accessing that store. This provides fairness for multiple apps that are accessing the API simultaneously, preventing a single greedy app from consuming the store’s entire quota by itself.

### Playing Nicely with The Platform

Honoring the rate limiter is very easy:

If your request to the API triggers a **429 Too Many Requests** response, then you know you’ve been limited.

The rate-limited response will contain the **X-Retry-After** header, specifying a time (in seconds) that your client must wait before its quota has refreshed.

Retry the request after this time has elapsed, and your API service will resume as normal.

#### Example

When you see a response with a `429` status code, your client shouldn’t make any further requests until your quota has refreshed:

```
    HTTP/1.1 429 Too Many Requests
    Date: Mon, 03 Feb 2014 20:36:00 GMT
    Content-Type: application/json
    X-Retry-After: 15
```    

Parse the **X-Retry-After** header to determine how long you have to wait. In this case, it would be 15 seconds.

Your client can sleep on the specified interval:

```
    $seconds = $response->getHeader("X-Retry-After");
    sleep($seconds);
```    

After waiting for the given number of seconds, you can go back to making API requests.
