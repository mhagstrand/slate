# <span class="jumptarget"> Building OAuth Apps </span>

OAuth apps (also known as public apps or <a href="https://www.bigcommerce.com/single-click-apps/" target="_blank">Single-Click Apps</a>) can be listed in the App Store for easy installation in all BigCommerce stores. They&#160;use OAuth to obtain an access token and to communicate with the central BigCommerce API endpoint. 

## <span class="jumptarget"> App Installation and Update Sequence </span>

### <span class="jumptarget"> Introduction </span>

A user at a store's control panel kicks off the installation or update sequence by clicking to install your app, or by clicking an installed app to update its scopes. BigCommerce redirects the user to the **Auth Callback URI** provided during [app registration](/api/registration). The **Auth Callback URI** must be publicly available, fully qualified, and served over TLS.

<aside class="warning">
<span class="aside-warning-hd">NOTES:</span>
The request comes from the client browser, rather than directly from BigCommerce. This allows you to use a non-publicly-available <b>Auth Callback URI</b> while testing your app.<br><br>

For security, Auth and Load callback should be handled server-side. If you are building a client-side application (such as an AngularJS Single Page App), you should handle Auth and Load callbacks outside that application. Use a separate service that accepts the Auth and Load callback requests, generates tokens, validates requests, and then redirects the user to your client-side app's entry point.
</aside>

The following diagram illustrates the entire sequence.

![UML diagram: App installation/update sequence (bc-oauth-install+update-seq.svg)](https://www.filepicker.io/api/file/jrCCco74ShqIiILykrG5)

The remainder of this section discusses each action your app needs to take during the sequence.

1.  [Receiving the `GET` request](#get-req)
2.  [Responding to the `GET` request](#get-response)
3.  [Making the `POST` request](#post-req)
4.  [Receiving the `POST` response](#post-receipt)

### <span class="jumptarget"> Receiving the GET request </span>

#### <span class="jumptarget"> Overview </span>

The `GET` request to your **Auth Callback URI** contains a temporary code that you can exchange for a permanent OAuth token. It also includes a unique value that identifies the store installing or updating your app, as well as other values.

#### <span class="jumptarget"> Parameters </span>

The following table details the full list of parameters and values included in the `GET` request from Bigcommerce to your **Auth Callback URI**. Bigcommerce passes these within the URI itself as query parameters.

| Parameter | Description |
| --- | --- |
| code | Temporary code to exchange for a permanent OAuth token. See [Making the POST request](#post-req) below for more information about this exchange. |
| scope | List of scopes authorized by the user. As a best practice, your app should validate this list to ensure that it matches the app's needs, and fail if it does not. However, at this time, the user does not have any opportunity to pick and choose between scopes. The dialog presented to the user requires the user to approve all scopes or none. |
| context | The store hash: a unique value that identifies the store on which a logged-in user has clicked to install or your app. Bigcommerce passes this along with a context path, as follows: `stores/{store_hash}`. Save the store hash value, because you will need to pass it in all your requests to the Stores API. |

#### <span class="jumptarget"> Example – Initial Installation </span>

This example initiates the token exchange, with a requested scope of `store_v2_orders`:

```
GET /auth?code=qr6h3thvbvag2ffq&scope=store_v2_orders&context=stores/g5cd38 HTTP/1.1  
Host: app.example.com
```

#### <span class="jumptarget"> Example – Updating Scopes </span>

The following example requests a scope of `store_v2_products`, in addition to the initially requested scope of `store_v2_orders`:

```
GET /auth?code=qr6h3thvbvag2ffq&scope=store_v2_orders+store_v2_products&context=stores/g5cd38 HTTP/1.1  
Host: app.example.com
```

(Note that when your app receives a new token, any previously issued token is invalidated.)


### <span class="jumptarget"> Responding to the GET request </span>

Upon receiving the `GET` request at your **Auth Callback URI**, your app should return some HTML to the merchant browser. BigCommerce renders this in an iframe inside of the Control Panel. It could be a form that collects further information from the user, or you could redirect the user to your app's main page. If you do not pass back some HTML, the user will be left looking at a blank screen. Such an app would not be accepted into the App Store.

### <span class="jumptarget"> Making the POST request </span>

#### <span class="jumptarget"> Overview </span>

The `POST` request's primary purpose is to exchange the temporary access code for a permanent OAuth token. However, your app must pass a number of additional values to accomplish the exchange. Pass the parameters and their values inside the request body, using query parameters and URL-encoding. To achieve this, you must include the following HTTP header: `Content-Type: application/x-www-form-urlencoded`

Make the `POST` request to the following address: `https://login.bigcommerce.com/oauth2/token`.


#### <span class="jumptarget"> Initial Installation </span>

During initial installation, upon receiving the `POST`, BigCommerce marks the status of your app as "Installed," removes the progress-indicator overlay, and places your app icon in the left-hand navigation of the Control Panel. With the progress-indicator overlay removed, the user can interact with the HTML that you returned in your <a href="#get-response">`GET` response</a>.

#### <span class="jumptarget"> Updates </span>

During app updates, upon receiving the `POST`, BigCommerce removes the update prompt from the Control Panel.


#### <span class="jumptarget"> Parameters </span>

Include values for each of the following parameters.

| Parameter | Description |
| --- | --- |
| client_id | The Client ID for your app, obtained during [registration](/api/registration). |
| client_secret | The Client Secret for your app, obtained during [registration](/api/registration). |
| code | Temporary access code received in the [GET request](#get-req) discussed above. |
| scope | List of OAuth scopes received in the [GET request](#get-req) discussed above. |
| grant_type | Always use the following: authorization_code. |
| redirect_uri | Must be identical to your registered Auth Callback URI. |
| context | The store hash received in the [GET request](#get-req), in the format: `stores/{_store_hash_}` |

#### <span class="jumptarget"> Examples – Initial Installation </span>

*   [HTTP](#token-http)

```
POST /oauth2/token HTTP/1.1
Host: login.bigcommerce.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 186

client_id=236754&client_secret=m1ng83993rsq3yxg&code=qr6h3thvbvag2ffq&scope=store_v2_orders&grant_type=authorization_code&redirect_uri=https://app.example.com/oauth&context=stores/g5cd38
```

*   [PHP](#token-php)

```
use Bigcommerce\Api\Connection;
$tokenUrl = "https://login.bigcommerce.com/oauth2/token";
$connection = new Connection();
$connection->useUrlencoded();
$response = $connection->post($tokenUrl, array(
    "client_id" => "236754",
    "client_secret" => "m1ng83993rsq3yxg",
    "redirect_uri" => "https://app.example.com/oauth",
    "grant_type" => "authorization_code",
    "code" => $request->get("code"),
    "scope" => $request->get("scope"),
    "context" => $request->get("context"),
));
$token = $response->access_token;
```

#### <span class="jumptarget"> Examples – Updating Scopes </span>

The following example requests a scope of `store_v2_products`, in addition to the initially requested scope of `store_v2_orders`:

*   [HTTP](#token-http)

```
POST /oauth2/token HTTP/1.1
Host: login.bigcommerce.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 186

client_id=236754&client_secret=m1ng83993rsq3yxg&code=qr6h3thvbvag2ffq&scope=store_v2_orders+store_v2_products&grant_type=authorization_code&redirect_uri=https://app.example.com/oauth&context=stores/g5cd38
</b></code></pre>
  </div>
  <div class="bui-tab-panel" id="token-php">
```

*   [PHP](#token-php)

```
use Bigcommerce\Api\Connection;

$tokenUrl = "https://login.bigcommerce.com/oauth2/token";
$connection = new Connection();
$connection->useUrlencoded();
$response = $connection->post($tokenUrl, array(
    "client_id" => "236754",
    "client_secret" => "m1ng83993rsq3yxg",
    "redirect_uri" => "https://app.example.com/oauth",
    "grant_type" => "authorization_code",
    "code" => $request->get("code"),
    "scope" => $request->get("scope"),
    "context" => $request->get("context"),
));

$token = $response->access_token;
```

### <span class="jumptarget"> Receiving the POST response </span>

#### <span class="jumptarget"> Overview </span>

The `POST` response will include a JSON object containing the permanent OAuth token, user information, and other values. Upon receiving the permanent OAuth token, store it securely. You should also store the user and store hash values, to identify the user and store at load and uninstall. The following sections detail the contents of the JSON body.

#### <span class="jumptarget"> JSON Values </span>

| Name | Data Type | Value Description |
| --- | --- | --- |
| access_token | string | The permanent OAuth token that your app can use to make requests to the Stores API on behalf of the user. Store this value securely. |
| scope | string | List of authorization scopes. |
| id | integer | Unique identifier for the user. Store this value to identify the user at load and uninstall. |
| email | string | The user’s email address. Store this value to identify the user at load and uninstall. |
| context | string | The store hash, as well as a base path: `stores/{_store_hash_}` |

#### <span class="jumptarget"> JSON Example – Initial Installation </span>

```
{
  "access_token": "g3y3ab5cctiu0edpy9n8gzl0p25og9u",
  "scope": "store_v2_orders",
  "user": {
    "id": 24654,
    "email": "merchant@mybigcommerce.com"
  },
  "context": "stores/g5cd38"
}
```

#### <span class="jumptarget"> JSON Example – Updating Scopes </span>

Update requests will refresh the payload's `access_token` and `scope` values. Here again, the following example requests a scope of `store_v2_products`, in addition to the initially requested scope of `store_v2_orders`:

```
<code class="language-js">{
  "access_token": "hyjielngd8iu0edpy9n8gzl0p25xc7q",
  "scope": "store_v2_orders store_v2_products",
  "user": {
    "id": 24654,
    "email": "merchant@mybigcommerce.com"
  },
  "context": "stores/g5cd38"
}
```


## <span class="jumptarget"> Load, Uninstall, and User Removal Requests </span>

### <span class="jumptarget"> Introduction </span>

In addition to the **Auth Callback URI**, the [App Registration](/api/registration) wizard requests the following URIs.

| Name | Required? | Event Discussion |
| --- | --- | --- |
| Load Callback URI | Yes | Called when the store owner or user clicks to load your app. |
| Uninstall Callback URI | No | Called when the store owner clicks to uninstall your app. |
| Remove User Callback URI | No | Called when the store admin revokes a user's access to your app. |

Each BigCommerce request is a **GET** request and includes a signed payload that allows your app to:

*   Verify that the request came from BigCommerce.
*   Identify the store.
*   Identify the store owner or user.

The remainder of this page discusses:

*   [The load request and response](#load).
*   [The uninstall request](#uninstall).
*   [The remove user request](#remove).
*   [The signed payload](#process).

### <span class="jumptarget"> <a name="load"></a> About the load request and response </span>

Once your app has been installed, the store owner or user can click its icon in the Control Panel to launch it. This causes BigCommerce to send a **GET** request to the **Load Callback URI** that you provided. In a production environment, the **Load Callback URI** must be publicly available, fully qualified, and served over TLS/SSL.

<aside class="warning">
<span class="aside-warning-hd">NOTES:</span>
The request comes from the client browser, rather than directly from BigCommerce. This allows you to use a non-publicly-available <b>Auth Callback URI</b> while testing your app.<br><br>

For security, Auth and Load callback should be handled server-side. If you are building a client-side application (such as an AngularJS Single Page App), you should handle Auth and Load callbacks outside that application. Use a separate service that accepts the Auth and Load callback requests, generates tokens, validates requests, and then redirects the user to your client-side app's entry point.
</aside>

The **GET** request contains a signed payload, as shown below.

```
GET /load?signed_payload=hw9fhkx2ureq.t73sk8y80jx9 HTTP/1.1
Host: app.example.com
```

Upon receiving a **GET** request to the **Load Callback URI**, your app needs to [process the signed payload](#process).

After processing the payload, your app returns its user interface as HTML. BigCommerce renders this inside of an iframe. Please see [User Interface Constraints](/api/ui-constraints) for important information about your app's user interface.

### <span class="jumptarget"> <a name="uninstall"></a> About the uninstall request (optional) </span>

Store owners have the option to uninstall any app at any time. When a store owner uninstalls an app, the app's OAuth token is revoked and the app cannot make requests to the Stores API on the store's behalf anymore.

You do not need to provide an **Uninstall Callback URI**. The lack of an **Uninstall Callback URI** does not prevent uninstallation. Instead, the **Uninstall Callback URI** allows you to track store owners who uninstall your app and to run cleanup operations, such as removing the store's user accounts from your system.

Should you choose to avail of this option and provide an **Uninstall Callback URI**, please note that it must be publicly available, fully qualified, and served over TLS/SSL. If provided, BigCommerce will send a **GET** request to your **Uninstall Callback URI** when a store owner clicks to uninstall your app. An example follows.

```
GET /uninstall?signed_payload=hw9fhkx2ureq.t73sk8y80jx9 HTTP/1.1
Host: app.example.com
```

Upon receiving the **GET** request, your app will need to [process the signed payload](#process).

<aside class="notice">
<span class="aside-notice-hd">NOTE:</span>
Any HTML that you return in your response will not be rendered.
</aside>


### <span class="jumptarget"> <a name="remove"></a> About the remove user request (optional) </span>

If you have not enabled [multi-user support](/api/multi-user), you will not provide a **Remove User Callback URI** and can ignore this section. If you enable multi-user support, you can optionally specify a **Remove User Callback URI**. It must be fully qualified, publicly available, and served over TLS/SSL. BigCommerce will send a **GET** request to your **Remove User Callback URI** when a store admin revokes a user's access to your app. An example follows.

```
GET /remove-user?signed_payload=hw9fhkx2ureq.t73sk8y80jx9 HTTP/1.1
Host: app.example.com
```

Upon receiving the **GET** request, your app will need to [process the signed payload](#process).

<aside class="notice">
<span class="aside-notice-hd">NOTE:</span>
Any HTML that you return in your response will not be rendered.
</aside>

### <span class="jumptarget"> Processing the signed payload </span>

#### <span class="jumptarget"> <a name="process"></a> Splitting and decoding the signed payload </span>

The signed payload is a string containing a base64url-encoded JSON string and a base64url-encoded [HMAC signature](http://en.wikipedia.org/wiki/Hash-based_message_authentication_code). The parts are delimited by the **.** character:

```
encoded_json_string.encoded_hmac_signature
```

To decode the signed payload, complete the following steps:

1.  Split `signed_payload` into its two parts at the `.` delimiter.
2.  Decode `encoded_json_string` using base64url.
3.  Convert the decoded JSON string into an object. See [Processing the JSON object](#Identifying) in for more about this object.
4.  Decode `encoded_hmac_signature` using base64url.
5.  Use your client secret to verify the signature. See the next section for more details.

#### <span class="jumptarget"> Verifying the HMAC signature </span>

To verify the payload, you need to sign the payload using your client secret, and confirm that it matches the signature that was sent in the request.

<aside class="warning">

<span class="aside-warning-hd">NOTE:</span>
To limit the vulnerability of your app to <a href="http://codahale.com/a-lesson-in-timing-attacks/">timing attacks</a>, we recommend using a constant time string comparison function rather than the equality operator to check that the signatures match.
</aside>

##### <span class="jumptarget"> Examples </span>

*   [PHP](#strcmp-php)
```
function verifySignedRequest($signedRequest)
{
	list($encodedData, $encodedSignature) = explode('.', $signedRequest, 2); 

	// decode the data
	$signature = base64_decode($encodedSignature);
        $jsonStr = base64_decode($encodedData);
	$data = json_decode($jsonStr, true);

	// confirm the signature
	$expectedSignature = hash_hmac('sha256', $jsonStr, $clientSecret(), $raw = false);
	if (!hash_equals($expectedSignature, $signature)) {
		error_log('Bad signed request from BigCommerce!');
		return null;
	}
	return $data;
}
```

<aside class="notice">
<span class="aside-notice-hd">NOTE:</span>
<code>!hash_equals</code> is available in PHP 5.6 and later. If you are running an older version of PHP, pull in a compatibility library such as the following: <a href="https://packagist.org/packages/realityking/hash_equals">https://packagist.org/packages/realityking/hash_equals</a>. BigCommerce's sample app <NOBR><a href="hello-world-app-php-silex app">https://github.com/bigcommerce/hello-world-app-php-silex</a></nobr> does this automatically.
</aside>

*   [Ruby](#strcmp-ruby)

```
require "base64"
require "openssl"

def verify(signed_payload, client_secret)
  message_parts = signed_payload.split(".")

  encoded_json_payload = message_parts[0]
  encoded_hmac_signature = message_parts[1]

  payload_object = Base64.strict_decode(encoded_json_payload)
  provided_signature = Base64.strict_decode(encoded_hmac_signature)

  expected_signature = OpenSSL::HMAC::hexdigest("sha256", client_secret, payload_object)

  return false unless secure_compare(expected_signature, provided_signature)

  JSON.parse(payload_object)
end

def secure_compare(a, b)
  return false if a.blank? || b.blank? || a.bytesize != b.bytesize
  l = a.unpack "C#{a.bytesize}"

  res = 0
  b.each_byte { |byte| res |= byte ^ l.shift }
  res == 0
end
```

#### <span class="jumptarget"> Processing the JSON object </span>

##### <span class="jumptarget"> Introduction </span>

The JSON object embedded in the `signed_payload` contains information about the BigCommerce store and the store owner or user.

##### <span class="jumptarget"> Identifying the store </span>

You should use the store information to identify the store that the request pertains to.

##### <span class="jumptarget"> Interpreting the user information </span>

Interpreting the user information varies as follows.

| Request type | Multiple users enabled | Multiple users not enabled |
| --- | --- | --- |
| Load | Compare the user information to see if it matches that of the store owner, received at the time of [App Installation](/api/callback) or that of an existing user. If the user information does not match either of these, then it represents a new user that you should add to your database or other storage. | The information should match that of the store owner, received at the time of [App Installation](/api/callback). |
| Uninstall | The user information should match that of the store owner. Only the store owner can uninstall your app. | Should match the store owner. |
| Remove user | The user information should match one of the users that you have stored. After locating the stored user, delete it from your database or other storage. | N/A |

##### <span class="jumptarget"> JSON Values </span>

| Name | Data Type | Value Description |
| --- | --- | --- |
| id | integer | Unique identifier for the user. |
| email | string | The user’s email address. |
| store_hash | string | Unique identifier of the store. |

##### <span class="jumptarget"> JSON Example </span>

```
{
  "user": {
	"id": 24654,
	"email": "user@mybigcommerce.com"
  },
  "store_hash": "g5cd38"
}
```

# <span class="jumptarget"> Building Basic-Auth Apps </span>

<aside class="warning">
<span class="aside-warning-hd">MIGRATION NOTE – TK:</span>
We still need to migrate content here. 
</aside>

