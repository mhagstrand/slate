---
title: BigCommerce API Documentation
layout: "apitwocolumn"

language_tabs:
  - php
  - shell

toc_footers:
  - <a href="/">Home</a>
  - <a href="/api/">API - Basics</a>
  - <a href="/themes/">Themes</a>
  - <a href="https://stencil.bigcommerce.com/docs/" target="_blank"> &nbsp;  Stencil Themes</a>
  - <a href="/themes/blueprint/"> &nbsp; Blueprint Themes</a>
  - <a href="http://goo.gl/forms/380FmYFlaJ05CL3q2" target="_blank">Sign Up for the Developer Newsletter</a>
  - <a href="http://github.com/tripit/slate" target="_blank">Site Built with Slate</a>

includes:
  - api
  - api_req_headers
  - api_response_headers
  - api_media_types
  - api_webhooks_getting_started
  - api_clients
  - api_root_oauth
  - api_registration
  - api_callback
  - api_load
  - api_multi-user
  - api_ui_constraints
  - api_scopes
  - api_rate-limits_oauth
  - api_approval-requirements
  - api_completing_reg
  - api_app_gallery
  - api_sample_contract
  - api_root_basic_auth
  - api_legacy_basic_auth
  - api_rate_limits_basic
  - api_guides_curl_quickstart
  - api_guides_oauth_transition
  - api_browsers.md
  - api_status_codes
  - api_data_types
  - api_faqs

search: true
---

# <span class="jumptarget"> API Documentation </span>

The Bigcommerce Stores API features a RESTful architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding. 

With clever use of this API, you can automate various commerce, business, and publishing tasks, and can integrate all kinds of apps with our platform. 

All connections require authentication, and are secured by TLS encryption. As of June 30, 2016, all requests must support Server Name Indication (SNI). We currently support two generations of our API:

<span class="fake-h3"> [API v3](//github.com/bigcommerce/api/blob/master/docs/v3-catalog.md) </span>

  New, more-efficient catalog API, offering a simplified variant/modifier model. OAuth-only, but fully backward-compatible with v2.

<span class="fake-h3"> [API v2](/api/v2) </span>

  Core API, supporting all currently exposed resources via Basic Auth or OAuth.
