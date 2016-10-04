## <span class="jumptarget"> UI Constraints </span>

OAuth apps benefit from a high level of integration with the BigCommerce platform. Users interacting with your app will enjoy a seamless experience. BigCommerce achieves this by rendering your app's user interface inside of an iframe within the control panel. To ensure acceptance into the App Store, your app should be able to perform all of its functions inside of the iframe.

While very usable and friendly, the iframe approach does require special attention from app developers. The remainder of this page discusses several functional areas to consider when designing and developing your app.

*   [Mixed content](#about-mixed-content)
*   [Same-origin policies](#about-same-origin-policies)
*   [P3P and cookies](#about-p3p-and-cookies)

### <span class="jumptarget"> About Mixed Content </span>

The BigCommerce control panel is served over TLS/SSL. Your app must be hosted on a web server that accepts and sends TLS/SSL requests. In addition, all of the resources referenced in the HTML that you present to the end users must be served over TLS/SSL. You may find protocol-agnostic addressing helpful.

If the user interface retrieves images, scripts, or other assets over a connection not encrypted with TLS/SSL, the user will experience errors and possibly an inability to interact with your app. Before submitting your app, use an <a href="https://www.jitbit.com/sslcheck/" target="_blank">online crawler</a> to check for insecure content.

### <span class="jumptarget"> About Same-Origin Policies </span>

<a href="http://en.wikipedia.org/wiki/Same-origin_policy" target="_blank">Same-origin policies</a> restrict apps running within iframes from performing certain activities, such as interacting with other services and making OAuth connections. While apps that operate within the BigCommerce iframe get strong preference during App Store considerations, we sometimes make exceptions for apps that need to interact with, and authenticate to, other services. If your app requires this, we advise you to open a new tab for actions that cannot occur within the iframe.

### <span class="jumptarget"> About P3P and Cookies </span>

Internet Explorer is one of the browsers that BigCommerce [supports](#supported-browsers), and our merchants do use it to access the control panel. If your app needs to set a cookie, you will need to craft a <a href=http://en.wikipedia.org/wiki/P3P" target="_blank">P3P policy</a>. Otherwise, your app will experience issues on Internet Explorer. Please review the following pages for more information.

*   <a href="http://www.techrepublic.com/blog/software-engineer/craft-a-p3p-policy-to-make-ie-behave/" target="_blank">Craft a P3P policy to make IE behave</a>
*   <a href="http://blogs.msdn.com/b/ieinternals/archive/2013/09/17/simple-introduction-to-p3p-cookie-blocking-frame.aspx" target="_blank">MSDN Intro to P3P Cookie Blocking</a>
