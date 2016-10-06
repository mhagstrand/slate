# <span class="jumptarget"> Webhooks Reference </span>

The Webhooks object, and endpoints, register and manage webhooks that connect events from a store to external URLs.

## <span class="jumptarget"> Webhook Object – Properties </span>

| Name | Type | Description |
| --- | --- | --- |
| id | int | A read-only value that uniquely identifies a webhook object. Do not attempt to set this value in a `PUT` or `POST`. |
| client_id | string | The OAuth client ID that uniquely identifies your application. BigCommerce returns this name-value pair in the JSON body of its responses. |
| store_hash | string | The hash value that uniquely identifies the store. Your application does not need to set this value via the JSON object; instead, you pass it in the path of your API requests. |
| scope | enum | The events that the webhook listens on. The full list of possibilities is in <a href="/api/#webhook-list" target="_blank">this overview</a>. |
| destination | string | The fully qualified URI that BigCommerce uses as a callback. At runtime, when there is an event that your webhook is listening on, BigCommerce will send a `POST` request to this URI. Must be HTTPS. |
| headers | object | Optional name-value pairs that you can set when you create the webhook. At runtime, BigCommerce will include the name-value pair(s) in the HTTP header of its `POST` request to your callback URI. |
| is_active | boolean | Can contain one of three values: `true`, `false`, or `<blank>`. Default is no value, i.e., `<blank>`. <NOBR>If `false`,</nobr> the webhook is inactive and will not send POST requests to the callback URI when an event occurs. If `true`, the webhook is active. |
| created_at | int | The time at which the webhook was created. |
| updated_at | int | The time at which the webhook was last updated. |
