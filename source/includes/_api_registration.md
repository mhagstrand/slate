## <span class="jumptarget"> <a name="registration"></a> App Registration </span>

Once you have a [sandbox store](#using-oauth-intro), you must register your app to get your **Client ID** and **Client Secret**.

*   The **Client ID** value uniquely identifies your app and you will need to pass it in the header of all your requests to the Stores API.

*   The **Client Secret** value is a secret that your app and BigCommerce share. You do need to pass the **Client Secret** value once during the [app installation](#installation) sequence. Thereafter, BigCommerce uses it to sign payloads in [load, uninstall, and remove user requests](#load) and your app uses it to verify the signature to ensure that the request is coming from BigCommerce.

The app registration wizard requests a number of details that you may not know just yet. You can come back and fill in the additional information later (discussed in [App Submission](/api/completing-reg)).

### <span class="jumptarget"> Technical Requirements </span>

<aside class="notice">
<span class="aside-notice-hd">MIGRATION NOTE:</span>
Stacked heads; insert something here!
</aside>


#### <span class="jumptarget"> Auth Callback and Load Callback URIs </span>

You must have an [Auth Callback URI](#installation) and a [Load Callback URI](#load_request) to register your app.

<aside class="notice">
<span class="aside-notice-hd">NOTE:</span>
Because the <b>Auth Callback URI</b> and <b>Load Callback URI</b> requests originate from the browser and not from BigCommerce, you can use non–publicly-available URIs and a self-signed certificate for a quick start. However, you must switch to – and test your app with – a publicly available <b>Auth Callback URI</b> and <b>Load Callback URI</b> before submitting your app for consideration in the App Store.
</aside>

#### <span class="jumptarget"> Uninstall callback (optional) </span>

If you want to receive a callback when the store owner uninstalls your app, you can provide an [Uninstall Callback URI](#uninstall).

#### <span class="jumptarget"> Multi-user support (optional) </span>

By default, your app will only be accessible to the store owner (ie. the user who created the store). Optionally, you can allow your app to be accessible to other store users. Consider the following before enabling [multi-user support](/api/multi-user).

*   Once you enable multi-user support, a store admin will additionally need to grant access to users from within the store control panel. For each user account, there are settings to grant access to specific apps.
*   Your app should be aware that when it receives the [Load Callback](#load_request), the user information passed in, [may not be the store owner](/api/multi-user#loadrequest). You'll need to determine how to respond if you see a different user. For example, you may want to provision a new user account in order to personalize the experience.
*   You can optionally specify a [Remove User Callback URI](#remove-user) to receive a callback when a store admin revokes a user's access.

#### <span class="jumptarget"> <a name="request_scopes"></a> Requesting OAuth scopes </span>

If you know the [OAuth scopes](/api/#scopes) that your app requires, you should select these. If you do not yet know the scopes that you need, you can just request minimal permissions (such as `Information: Read-Only`) to get started. However, once you determine the scopes you need, you must:

*   Modify the scopes of your app in My Apps and save the changes.
*   Obtain the new OAuth token during the [App Installation or Update](#installation) flow.
*   Retest your app to make sure it still functions properly with the new token.

### <span class="jumptarget"> Registering your app </span>

The following procedure takes you through the minimum number of steps to successfully register your app and get your **Client Secret** and **Client ID**.

1.  Log in at Developer Portal's top right.
2.  In the resulting login page, provide your sandbox store credentials.

<aside class="notice">
<span class="aside-notice-hd">NOTE:</span>
These must be the credentials of the owner of the store where you plan to install your draft app.
</aside>

3.  Click `My Apps`.
4.  Click `Create an app`.
5.  In the `Create an App` dialog, type a name for your app.
6.  Click `Next`.
7.  Click `Next` again.
8.  Click `Next` one more time.
9.  In the `Auth Callback URL` box, type your `Auth Callback URI`.
10.  In the `Load Callback URL` box, type your `Load Callback URI`.
11.  In the `Uninstall Callback URI` box, provide your `Uninstall Callback URI` if you have one.
12.  If you want to support multiple users: In the `Supported Features` area, select `Multiple Users`; and in the `Remove User Callback URI` box, provide a `Remove User Callback URI`.
13.  Select the OAuth scopes that your app requires. If you do not yet know, select minimal scopes, such as `Information: Read-Only`.
14.  Click `Update & Close`.
15.  Back in `My Apps`, hover over your app.
16.  Click `View Client ID`.
17.  Copy the `Client ID` and `Client Secret` values from the dialog, and paste them into a safe and secure place.
