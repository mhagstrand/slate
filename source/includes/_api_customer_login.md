# <span class="jumptarget"> Customer Storefront Login </span>

<<<<<<< HEAD
<<<<<<< HEAD
This is a feature to enable single sign-on (SSO) by allowing generation of a token available to programmatically log in a storefront customer. An login entry point exists at `/login/token/{token}`, where `{token}` is expected to be a JWT token signed by the [single-click application](#)’s [client secret](), and to contain the parameters for the customer login request in the payload.

| Name | Type | Description |
| --- | ---| ---|
| iss | string | Indicates the issuer of the token. This is the single-click application's client ID, which is obtained during application registration in Developer Portal. |
| iat | | Time when the token was generated. This is a numeric value indicating the number of seconds since the [Unix epoch](http://en.wikipedia.org/wiki/Unix_time). |
| jti | string | Unique string that must be unique across all requests made by your app. A UUID or other random string would be an appropriate value. |
| operation | enum | Must contain the string "custom_login". |
| store_hash | string | ID of the store you are logging into. |
| customer_id | int | ID of the customer you are logging in. |
| redirect_to | string | Optional field containing a relative path for the shopper's destination after login. Will default to `/account.php`. | 
| request_ip | string | Optional field containing the expected IP address for the request. |

## JWT Login

A valid JWT token is a string composed of three parts, separated by periods (“.”). Refer to [jwt.io](https://jwt.io/) and [RFC 7519](https://tools.ietf.org/html/rfc7519) for more details on the format. Client libraries exist in many languages to make the generation and verification of JWT tokens easier. 
=======
This is a feature to enable single sign-on (SSO) by allowing a token to be generated and used to programmitically log in a storefront customer. An login entry point exists at `/login/token/{token}` where `{token}` is expected to be a JWT token signed by the [single click application](#)’s [client secret]() and containing the parameters for the customer login request in the payload.
=======
This is a feature to enable single sign-on (SSO) by allowing a token to be generated and then programmatically sign in a storefront customer. A storefront login entrypoint exists at `/login/token/{token}` where `{token}` is expected to be a JWT (JSON Web Token) signed by the single click application’s client secret and containing the parameters for the customer login request in the payload.
A full overview of the JWT standard and links to client libraries in a number of languages are available at [JWT.io](https://jwt.io) . BigCommerce also supplies helper methods for generating JWT login tokens in our [API Client Libraries](https://developer.bigcommerce.com/api/clients).
>>>>>>> master

| Name | Type | Description |
| --- | ---| ---|
| iss | string | Indicates the issuer of the token. It is the client id of the single click application, which is obtained during application registration in Developer Portal.
| iat | | Time when the token was generated. It is a numeric value indicating the number of seconds since the [unix epoch](http://en.wikipedia.org/wiki/Unix_time).|
| jti | string | Unique string that must be unique across all requests made by your app. A UUID or other random string would be an appropriate value.
| operation | enum | Must contain the string "custom_login" |
| store_hash | string | Identifying ID of the store you are logging into |
| customer_id | int | ID of the customer you are logging in |
| redirect_to | string | Optional field containing a relative path for the destination for the shopper after login. Will default to `/account.php` | 
| request_ip | string | Optional field containing the expected IP address for the request |

## <span class="jumptarget"> JWT Login </span>

A valid JWT token is a string composed of three parts separated by a period (“.”). Refer to [jwt.io](https://jwt.io/) and [RFC 7519](https://tools.ietf.org/html/rfc7519) for more details on the format. Client libraries exist in many languages to make the generation and verification of JWT tokens easier. 
>>>>>>> master

Example URL: `https://storedomain.com/login/token/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`

Header
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> master
```
=======

```json
>>>>>>> master
{
  "typ": "JWT",
  "alg": "HS256"
}
```

Payload
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> master
```
=======

```json
>>>>>>> master
{
  “iss”: “{application_client_id}”,
  “iat”: {issued_at},
  “jti”: “{unique_string}”,
  “operation”: “customer_login”,
  “store_hash”: “{store_hash}”,
  “customer_id”: {customer_id},
  “redirect_to”: “{relative_path}”,
  “request_ip”: “{ipv4_address}”
}
```

### <span class="jumptarget"> Signature </span>

<<<<<<< HEAD
The headers and payload must be signed using HS256 (HMAC-SHA256) and the single-click application’s client secret.
=======
The headers and payload must be signed using HS256 (HMAC-SHA256) and the single click application’s client secret.
>>>>>>> master

### <span class="jumptarget"> Sample Code </span>

```php
use Bigcommerce\Api\Client;
use Bigcommerce\Api\Connection;

public function testGetCustomerLoginTokenReturnsValidLoginToken()
    {
        Client::configureOAuth(array(
            'client_id' => '123',
            'auth_token' => 'def',
            'store_hash' => 'abc',
            'client_secret' => 'zyx'
        ));
        $expectedPayload = array(
            'iss' => '123',
            'operation' => 'customer_login',
            'store_hash' => 'abc',
            'customer_id' => 1,
        );
        $token = Client::getCustomerLoginToken(1);
        $actualPayload = (array)\Firebase\JWT\JWT::decode($token, 'zyx', array('HS256'));
        $this->assertArraySubset($expectedPayload, $actualPayload);
    }
```

```python
from __future__ import print_function
import bigcommerce.api
import bigcommerce.customer_login_token
import os

# Customer login tokens must be signed with an app secret loaded in the environment
os.environ['APP_CLIENT_SECRET'] = 'client secret'

# Create API object using OAuth credentials
api = bigcommerce.api.BigcommerceApi(client_id='id', store_hash='hash', access_token='token')

# Create a new customer
api.Customers.create(first_name='Bob', last_name='Johnson', email='bob.johnson@example.com')

# Or get the customer if they already exist
customer = api.Customers.all(email='bob.johnson@example.com')[0]

# Create the JWT login token
login_token = bigcommerce.customer_login_token.create(api, customer.id)

print('Token: %s' % login_token)

# You can build the URL yourself
print('%s/login/token/%s' % ('https://domain.com', login_token))

# Or use the helper method to build the URL (uses 1 API request to get the secure domain for the store)
login_token_url = bigcommerce.customer_login_token.create_url(api, customer.id)
print('Token URL: %s' % login_token_url)
```

### <span class="jumptarget"> OAuth Scope </span>

The OAuth scope required for this feature is `v2_customers_login`. This is treated the same way as any of our other OAuth scopes: presented on Developer Portal when registering the app, and presented on the authorization screen when installing/reauthorizing the app.

### <span class="jumptarget"> Redirection </span>

<<<<<<< HEAD
For flexibility in navigation after login, we support an optional redirect parameter (`redirect_to`), which in turn supports relative URLs. If the parameter is not specified, the storefront customer will land on their My Account page at `/account.php`. 
=======
For flexibility in navigation after login, an optional redirect parameter is supported (`redirect_to`) which supports relative URLs. If the parameter is not specified, the storefront customer will land on their My Account page at `/account.php`. 
>>>>>>> master

```json
{
	"redirect_to": "/mattresses"
}
```

### <span class="jumptarget"> Notes </span>

Tokens will be valid for a very short timeframe after they are first generated, so tokens should not be generated in advance. Instead, the application should generate the token just prior to redirecting the user’s browser to `/login/token`.

<<<<<<< HEAD
Once a request has been made with a given jti, it cannot be made again. The jti is used to prevent replay attacks by malicious actors intercepting the request or obtaining it after the fact.

The `request_ip` field can be used as an additional security precaution, to prevent a malicious actor from intercepting the request and making it from another browser or system before you do. If supplied, the incoming request will be checked to ensure that it is being made from the supplied IP address; if not, it will fail. We strongly encourage setting this IP-address value, but it is optional to support those cases where this information is not available.
=======
Once a request has been made with a given jti, it cannot be made again. It is used to prevent replay attacks by malicious actors intercepting the request or obtaining it after the fact.

The `request_ip` field can be used as an additional security precaution to prevent a malicious actor from intercepting the request and making it from another browser or system before you do. If supplied, the incoming request will be checked to ensure it is being made from the given IP address, and fail otherwise. It is strongly encouraged to set this value, but it is made optional for those cases where this information may not be available.
>>>>>>> master
