# <span class="jumptarget"> Theme Update Process </span>

This page describes process of integrating theme changes/updates made by a partner into the BigCommerce Theme Store.

## <span class="jumptarget"> Prerequisites </span>

Integrating a partner's theme changes requires these preconditions

*   Partner has an existing theme in the BigCommerce Theme Store.

*   BigCommerce sets up a Theme Development store (or converts an existing regular store) and applies the theme. All theme files will automatically be copied into the WebDAV `/template/` directory.

<aside class="notice">
<span class="aside-notice-hd">Template Path Abstracted</span>
<br><br>
The Theme Development store resolves the <code>%%GLOBAL_TPL_PATH%%</code> variable into <code>/template/</code>. Therefore, assets will be pulled from the <code>/template/</code> directory, which is accessible via WebDAV or via the BigCommerce control panel.
</aside>

## <span class="jumptarget"> Update Process </span>

1.  The partner switches on Theme Development mode, by using:  
`http://<STORE>/admin/index.php?ToDo=viewTemplates&dev=enable`.
2.  The partner asks BigCommerce to switch a theme. (Partners currently cannot switch it directly by a partner, because it’s a paid theme.)
	<aside class="error">
This step will wipe out all files in the `/template/` directory and copy in the latest version of the integrated theme.
	</aside>
3.  The partner pulls changes from BigCommerce's GitHub fork, to get the most recent version onto their local machine as well.
4.  The partner makes appropriate changes to CSS/HTML files.
5.  The partner commits their changes into the feature branch, and opens a pull request against the BigCommerce fork.
	<aside class="warning">
If BigCommerce made conflicting changes (which should happen only when resolving urgent issues), the partner might need to rebase changes (using <code>git rebase master</code>) in order to resolve the conflicts.
6.  Partner [emails](mailto:themestore@bigcommerce.com) their Git URL to the BigCommerce Theme Store.
7.  BigCommerce integrates changes into BigCommerce Themes.

## <span class="jumptarget"> Other Requirements </span>

*   Partners must not change the repository's directory structure or directory names.
*   Files should have permission 644 (`rw-r–r–`).
*   Directories should have permission 755 (`drwxr-x-r-x`).