## <span class="jumptarget"> What kind of apps can I submit?</span>

You can build any kind of app to test the capabilities of the platform. For inclusion in the App Store, we’re looking for apps that that make online retail better and help our merchants to sell more.

Apps should target one or more of the following categories:

*   Accounting
*   Advertising
*   Analytics
*   Cloud integration
*   Customer feedback
*   Drop shipping
*   Email marketing
*   Live chat
*   Marketing
*   Merchandising
*   Mobile
*   Multichannel listing
*   Order fulfillment
*   Order management
*   Point of sale
*   Product review
*   Shipping
*   Shopping comparison
*   Social media
*   Split testing

## <span class="jumptarget"> How does the approval process work?</span>

Upon receiving an [app submission](/api#completing-reg), we review it to make sure that it meets our [requirements](/api#approval-requirements). We will contact you directly if we require further information. When the app is approved, it instantly becomes available in the [App Store](https://www.bigcommerce.com/apps/).

## <span class="jumptarget"> Is the API rate limit per-store or per-app?</span>

Basic Authentication requests are rate-limited [per app](/api/rate-limits/basic).

OAuth requests are rate-limited [per store](/api/rate-limits/oauth). A single store’s quota applies to all OAuth apps connecting to that store. Our OAuth rate limiting algorithm is designed to distribute quotas fairly across multiple apps, so that a single greedy app cannot consume the entire quota on its own.

## <span class="jumptarget"> Do apps need to make special considerations for certain browsers?</span>

Yes. Please review our list of [supported browsers](/api#browsers) and the documentation on [user interface constraints](/api#ui-constraints) for details.

## <span class="jumptarget"> What if I need to update my app after App Store submission/acceptance?</span>

You can modify your app at any time within My Apps, free of charge. As soon as you click **Update & Close**, your changes will be live. Therefore, we recommend creating a copy of your app and using this to test the changes first. Once you have made sure that they work properly, you can go ahead and modify your production app.

## <span class="jumptarget"> Will BigCommerce host my server-side code?</span>

No. BigCommerce does not support the upload of server-side code to a store. The server-side code must hosted elsewhere. The storefront can use JavaScript to access it.
