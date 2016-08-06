# <span class="jumptarget"> <a name="using-oauth-intro"></a> Building OAuth Apps </span>

<aside class="warning">
<span class="aside-warning-hd">MIGRATION NOTE – tK:</span>
We still need to migrate introductory content here. Should also add something explaining the new terminology "OAuth Apps" versus "Basic-Auth Apps."
</aside>

## <span class="jumptarget"> About Single-Click Apps </span>

Public apps (also known as OAuth Apps or <a href="https://www.bigcommerce.com/single-click-apps/" target="_blank">Single-Click Apps</a> can be listed in the App Store for easy installation in all BigCommerce stores. They use OAuth to obtain an access token and communicate with the central BigCommerce API endpoint. Building a public app is the recommended approach in almost all cases. Before you start, we suggest reviewing the [App Store acceptance requirements](#approval-requirements). To start making API requests, you'll need a [**Client ID** and **Client Secret**](/api/v2/#registration), and an [OAuth token](/api/v2/#installation). 

### <span class="jumptarget"> API Endpoint </span>

Public API requests are protected by TLS, and use the following base URI: `https://api.bigcommerce.com`. The exact paths are noted in the Reference section for each resource. 

### <span class="jumptarget"> Request Headers </span>

Public API requests are authenticated by the following HTTP headers: 

* `X-Auth-Client`: the **Client ID**. To get your **Client ID**, you must complete [App Registration](#registration). 
* `X-Auth-Token`: the OAuth token. To get your OAuth token, you must complete [App Installation](#installation). 

In addition, while not all resources require the `Accept` and `Content-Type` headers, many do. To ensure that your calls succeed, always include these headers. 

### <span class="jumptarget"> Managing Users' Session Timeouts </span>

We recommend that you add BigCommerce's JavaScript SDK to your Single-Click Apps, to protect your apps' users from getting logged out of the BigCommerce control panel after a period of idleness. To include our SDK, add this script tag to your Single-Click App: 

```
<script src="//cdn.bigcommerce.com/jssdk/bc-sdk.js">
```

Optionally, you can pass a logout callback function within the initialization call:

```
BigCommerce.init({
      onLogout: callback
});
```

This callback function will run when the user explicitly logs out of the BigCommerce control panel, or is automatically logged out. The callback will allow your app to respond to this logout.


### <span class="jumptarget"> Monetizing Your App </span>

If you want to charge merchants for your app, please note that BigCommerce expects you to handle the billing aspects of the transaction. Your app needs to take care of collecting the fee from the merchant. Under the standard contract, within thirty days of collecting this revenue, you must send BigCommerce 20% and retain the remaining 80% for yourself. Reporting should be sent monthly to <a href = "mailto:partnerpayments@bigcommerce.com">partnerpayments@bigcommerce.com</a>.
