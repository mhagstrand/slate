# Customer Storefront Login API

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

Example URL: `https://storedomain.com/login/token/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`

Header

```
{
  "typ": "JWT",
  "alg": "HS256"
}
```

Payload

```
{
  “iss”: “<application_client_id>”,
  “iat”: <issued_at>,
  “jti”: “<unique_string>”,
  “operation”: “customer_login”,
  “store_hash”: “<store_hash>”,
  “customer_id”: <customer_id>,
  “redirect_to”: “<relative_path>”,
  “request_ip”: “<ipv4_address>”
}
```

### Signature

The headers and payload must be signed using HS256 (HMAC-SHA256) and the single-click application’s client secret.

Sample Code
```
Placeholder
```

### OAuth Scope

The OAuth scope required for this feature is `v2_customers_login`. This is treated the same way as any of our other OAuth scopes: presented on Developer Portal when registering the app, and presented on the authorization screen when installing/reauthorizing the app.

### Redirection 

For flexibility in navigation after login, we support an optional redirect parameter (`redirect_to`), which in turn supports relative URLs. If the parameter is not specified, the storefront customer will land on their My Account page at `/account.php`. 

```
{
	"redirect_to": "/mattresses"
}

### Notes

Tokens will be valid for a very short timeframe after they are first generated, so tokens should not be generated in advance. Instead, the application should generate the token just prior to redirecting the user’s browser to `/login/token`.

Once a request has been made with a given jti, it cannot be made again. The jti is used to prevent replay attacks by malicious actors intercepting the request or obtaining it after the fact.

The `request_ip` field can be used as an additional security precaution, to prevent a malicious actor from intercepting the request and making it from another browser or system before you do. If supplied, the incoming request will be checked to ensure that it is being made from the supplied IP address; if not, it will fail. We strongly encourage setting this IP-address value, but it is optional to support those cases where this information is not available.
