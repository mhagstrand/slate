---
title: BigCommerce API Documentation
layout: "apitwocolumn"

language_tabs:
  - php
  - shell

toc_footers:
  - <a href="/">Home</a>
  - <a href='/api/v2/'>API</a>
  - <a href='/themes/'>Themes</a>
  - <a href='/themes/blueprint/'> &nbsp; Blueprint Themes</a>
  - <a href='https://stencil.bigcommerce.com/docs'> &nbsp;  Stencil Themes</a>
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://goo.gl/forms/380FmYFlaJ05CL3q2'>Sign Up for the Developer Newsletter</a>
  - <a href='http://github.com/tripit/slate'>Documentation by Slate</a>

includes:
  - api_root_oauth
  - api_registration
  - api_callback
  - api_load
  - api_webhooks_getting_started
  - api_multi-user
  - api_ui_constraints
  - api_scopes
  - api_rate-limits_oauth
  - api_approval-requirements
  - api_root_basic_auth
  - api_clients
  - api_status_codes
  - api_scopes
  - api_browsers
  - api_completing_reg
  - api_faqs
  - api_guides_curl_quickstart
  - api_response_headers

search: true
---

# API Documentation

The Bigcommerce Stores API features a RESTful architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.

All connections require authentication, and are secured by TLS encryption. As of June 30, 2016, all requests must support Server Name Indication (SNI).

With clever use of this API, you can automate various commerce, business, and publishing tasks and integrate all kinds of apps with our platform.

## [API V3](/api/v3)

  New, more-efficient catalog API, offering a simplified variant/modifier model. OAuth-only, but fully backward-compatible with V2.

## [API V2](/api/v2)
  Core API, supporting all currently exposed resources via Basic Auth or OAuth.
