# Customer Login API

The customer login API enables single sign-on (SSO) by allowing your apps to generate a token to programmatically log in a storefront customer,  using the login entry point  at `/login/token/{token}`. Here, `{token}` must be a JSON Web Token (JWT) containing the parameters for the customer login request in its payload, and must be signed by your <a href="/api/#building-oauth-apps" target="_blank">OAuth application</a>'s <a href="/api/#registration" target="_blank">client secret</a>.

For a full overview of the JWT standard, please see <a href="https://jwt.io/" target="_blank">JWT.IO</a>, where you will also find links to client libraries (in many languages) that facilitate the generation and verification of JWT tokens. BigCommerce also supplies helper methods for generating login tokens in our API <a href="/api/#client-libraries" target="_blank">Client Libraries</a>.

## Customer Login Token

A valid JWT token is a string composed of three parts, separated by periods (“.”). Please refer to <a href="https://jwt.io/" target="_blank">JWT.IO</a> and <a href="https://tools.ietf.org/html/rfc7519" target="_blank">RFC 7519</a> for more details on the format.

### Example URL

```
https://storedomain.com/login/token/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

### Header

```
{
"typ": "JWT",
"alg": "HS256"
}
```

### Payload

```
{
“iss”: “<application_client_id>”,
“iat”: <issued_at>,
“jti”: “<unique_string>”,
“operation”: “customer_login”,
“store_hash”: “<store_hash>”,
“customer_id”: <customer_id>,
“redirect_to”: “<relative_path (optional)>”,
“request_ip”: “<ipv4_address (optional)>”
}
```

### Fields

| Field Name | Type | Description |
| --- | ---| ---|
| iss | string | Indicates the token's issuer. This is your application's client ID, which is obtained during application registration in Developer Portal. |
| iat | integer| Time when the token was generated. This is a numeric value indicating the number of seconds since the [Unix epoch](http://en.wikipedia.org/wiki/Unix_time). |
| jti | string | Request ID string that must be unique across all requests made by your app. A UUID or other random string would be an appropriate value. |
| operation | enum | Must contain the string "customer_login". |
| store_hash | string | Store hash identifying the store you are logging into. |
| customer_id | integer | ID of the customer you are logging in, as obtained through the Customer API. |
| redirect_to | string | Optional field containing a relative path for the shopper's destination after login. Will default to `/account.php`. | 
| request_ip | string | Optional field containing the expected IP address for the request. |

### Signature

The headers and payload must be signed using HS256 (HMAC-SHA256) and the application’s client secret.

### Sample Code

Code to generate a valid JWT token for a storefront login request is provided in our API <a href="/api/#client-libraries" target="_blank">Client Libraries</a>:

- [PHP sample](https://github.com/bigcommerce/bigcommerce-api-php/blob/master/src/Bigcommerce/Api/Client.php#L421)

- [Python sample](https://github.com/bigcommerce/bigcommerce-api-python/blob/master/bigcommerce/customer_login_token.py)

- [Ruby sample](https://github.com/bigcommerce/bigcommerce-api-ruby/blob/master/examples/customers/customer_login.rb)

### OAuth Scope

In order to use this feature, your app must be installed in the store, and must have the `store_v2_customers_login` scope.

### Redirection 

For flexibility in navigation after login, we support an optional redirect parameter (`redirect_to`), which in turn supports relative URLs. If the parameter is not specified, the storefront customer will land on their My Account page at `/account.php`. 

### Notes

Tokens will be valid for a very short timeframe after they are first generated, so tokens should not be generated in advance. Instead, the application should generate the token and then immediately redirect the user’s browser to `/login/token/{token}`.

Once a request has been made with a given `jti`, it cannot be made again. This parameter is used to prevent replay attacks by malicious actors intercepting the request or obtaining it after the fact.

The `request_ip` field can be used as an additional security precaution, to prevent a malicious actor from intercepting the request and making it from another browser or system before you do. If you supply this value, BigCommerce will check the incoming request to ensure that it is being made from the stated IP address – and will otherwise fail the request. We strongly encourage setting this IP address value; but doing so is optional, to support those cases where this information is not available.