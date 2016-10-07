# <span class="jumptarget"> API/Apps First Steps </span>

The BigCommerce Stores API features a RESTful architecture, allowing you to code in the language of your choice. All connections require authentication and are secured by TLS encryption. It supports [the JSON media type](#media-types) and uses UTF-8 character encoding.

With clever use of this API, you can automate various commerce, business, and publishing tasks and integrate all kinds of apps with our platform.

<span class="fake-h2" style="color:black;font-weight:bold"> Build Best-Of-Breed Solutions for Fast-Growing Online Businesses </span>

Here are your first steps to get started:

## <span class="jumptarget"> 1. Join the Technology Partner Program </span>

Before you begin, you'll need a sandbox store. BigCommerce offers app developers free sandbox stores through its Technology Partner Program. To get your sandbox store, <a href="https://www.bigcommerce.com/partners/signup" target="_blank">apply to become a BigCommerce Technology Partner</a>. To be approved as a partner, you will need:

* A website.
* The ability to support users of your app.
* A PayPal account – if you want to get paid for referring people to BigCommerce (optional).

NOTE: The email address you use in this form must be the same email address as you use to log into your sandbox store, and to log into <a href="//devtools.bigcommerce.com" target="_blank">My&#160;Apps</a>.

Once approved, you will receive one or more emails containing:

* **Your Partner ID**: required to submit an app for <a href="https://www.bigcommerce.com/apps/" target="_blank">App Store</a> consideration.
* **Temporary Partner Portal credentials**: change your password immediately after logging in.

NOTE: If you do not receive your Partner ID by email, contact [partnersupport@bigcommerce.com](mailto:partnersupport@bigcommerce.com).

## <span class="jumptarget"> 2. Get a Sandbox Store </span>

To get into your sandbox store, log into the Partner Portal, then click **Create a Trial Store**. When you log into your store, use the same email that you used when applying to become a Technology Partner.

NOTE: Although the **Create a Trial Store** option's name indicates that the store might be temporary, it is actually permanent.

## <span class="jumptarget">3. Get Your Keys </span>

This step works differently for OAuth versus Basic-Auth apps:

### <span class="jumptarget"> OAuth Apps </span>

OAuth apps (also known as <a href="https://www.bigcommerce.com/single-click-apps/" target="_blank">Single-Click Apps</a> or public apps) can be listed in the App Store for easy installation in all BigCommerce stores. They use OAuth to obtain an access token and communicate with the central BigCommerce API endpoint. Building a public app is the recommended approach in almost all cases. Before you start, we suggest reviewing the [App Store acceptance requirements](#app-store-approval-requirements). To start making API requests, you'll need a [Client ID and Client Secret](#app-registration), and an [OAuth token](#app-installation-and-update-sequence).

### <span class="jumptarget"> Basic-Auth Apps </span>

Basic Auth apps require the manual creation of an API token for each store, and are most useful for custom integrations for a single BigCommerce store. They use HTTP Basic Authentication, and communicate directly with the store's API endpoints. From the control panel of your sandbox store, you can [get the base path, user ID, and API token](#building-basic-auth-apps) that you need to start making calls.
  

## <span class="jumptarget"> About Client Libraries </span>

To make it easier for our developers, we provide [client libraries](#client-libraries) in a variety of popular languages.