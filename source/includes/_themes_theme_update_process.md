# Theme Update Process

This page describes process of integrating theme changes/updates made by a Partner into Bigcommerce Theme Store.

## Prerequisites

*   Partner has an existing theme in the Bigcommerce Theme Store.

*   Bigcommerce sets up Theme Development store (or converts existing regular store) and applies the theme. All theme files will automatically be copied into /template/ directory on WebDAV.

_Note that Theme Development store resolves `%%GLOBAL_TPL_PATH%%` variable into `/template/`, therefore assets will be pulled from the `/template/` directory, which is accessible via WebDAV or via Control Panel._

## Update Process

1.  Partner switches on Theme Development mode by http://<STORE>/admin/index.php?ToDo=viewTemplates&dev=enable
2.  Partner ask Bigcommerce to switch a theme (it currently cannot be switched directly by a partner, because it’s paid)
    **Warning:** this step will wipe all files in `/template/` directory and copies the latest version of the integrated theme.
3.  Partner pulls changes from BC GitHub fork to get the most recent version also on his local machine.
4.  Partner makes appropriate changes in CSS/HTML files.
5.  Partner commits his changes into feature branch and opens pull request against BC fork. Note: If there were conflicting changes made by Bigcommerce (which should happen only when resolving urgent issues), Partner might need to rebase changes in order to resolve conflicts (i.e. `git rebase master`).
6.  Partner [emails](mailto:themestore@bigcommerce.com) the Git URL to the theme store.
7.  Bigcommerce integrates changes into Bigcommerce Themes.

## Other Notes

*   Don’t change directory names or directory structure of the repository.
*   Files should have permission 644 (rw-r–r–) and directories permission 755 (rwxr-x-r-x).
