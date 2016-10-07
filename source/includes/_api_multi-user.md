## <span class="jumptarget"> <a name="multi_intro"></a> Multi-User Support </span>

When you register your app with BigCommerce, if you [enable multi-user support](#regis-multi-user), this will allow store admins to manually authorize users – other than the store owner – to load the app. This feature is not available for [basic-auth apps](#building-basic-auth-apps).

### <span class="jumptarget"> Enable Multi-User Support</span>

As soon as you [enable multi-user support](#regis-multi-user), this affects the control panel of any store that has your app installed. If you already have an app published in the App Store, be aware that this setting takes effect immediately. Therefore, we recommend testing your multi-user support using a separate app that is in draft status.

>NOTE: Let your customers know that you've enabled this feature! Otherwise, they won't know that they can start granting access to users.

To opt into multi-user support:

1.  Log into **My Apps**.
2.  In the **Technical** panel > **Supported Features** area, select **Multiple Users**.
3.  In the **Remove User Callback URI** box, provide a **Remove User Callback URI**.
4.  Save and close your app.

### <span class="jumptarget"> About the Control-Panel Experience</span> 

Store admins will be able to adjust user permissions to grant/deny other store users' access to your app.

The next time the user logs in, they will see any apps for which they have been granted access. The user can then click on the app icon in the left navigation to load it.

Use your draft app and your sandbox store to review this behavior.

### <span class="jumptarget"> About the Load Request</span>

Apps with multiple users enabled can expect more than just the store owner's email and ID in the JSON object sent in the load request. If a load request is sent with user information you haven't seen yet, you should provision the user account and associate it with the store in your database.

Because you know the store owner's email and ID from the [App Installation](#app-installation-and-update-sequence) sequence, your app can distinguish store owners from other users. This allows you to provide different user experiences based on the information in the load request. Here is a summary of the two types of users:

*   **Store owner**: Can install, uninstall, and load apps.
*   **Users**: Cannot install or uninstall apps. Permitted only to load the apps that a store admin has authorized.

For further details, please see [Load Request and Response](#load-request-and-response).

### <span class="jumptarget"> About the Remove User Request </span>

In addition to their ability to add users, store admins can also remove users. This action generates a `GET` request to the **Remove User Callback URI** that you provided in **My Apps**. Your app should delete from its records the user identified in the request.

For further information, please see [Remove User Request](#remove-user-request-optional).
