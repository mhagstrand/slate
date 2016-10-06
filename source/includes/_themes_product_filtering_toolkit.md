# <span class="jumptarget"> Product Filtering Toolkit </span>

**Before you attempt to add product filtering to your theme, please note that this is recommended for experienced theme developers only.** 

Implementing product filtering (faceted search) effectively in your theme requires knowledge of HTML and CSS, and also familiarizing yourself with how BigCommerce themes are structured and operate.

We also recommend working on a temporary sandbox store. You can create a trial store, and upload your theme customizations there via WebDAV to replicate your local changes.

<aside class="warning">
<span class="aside-warning-hd">Pro/Enterprise Feature</span><br><br>
Beyond the expertise prerequisites mentioned above, please note that product filtering is a Pro/Enterprise feature. If you would like to enable it on an active public store, you must upgrade to a Pro or Enterprise plan.
</aside>


## <span class="jumptarget"> Creating a New Theme with Product Filtering </span>

Product filtering is fully functional in the Blueprint base theme. Once you’ve enabled Developer Mode, you’ll be able to access this base theme and product filtering in your developer store.

## <span class="jumptarget"> Enabling Product Filtering for Your Customized Theme </span>

To enable product filtering, just enable Developer Mode on your store. This will enable product filtering on your store by default, regardless of whether or not your theme and plan support it.

<aside class="warning">
<span class="aside-warning-hd">Start with a Sandbox Store</span><br><br>
Depending on the customizations you have made to your theme, enabling Developer Mode could have unexpected results. <NOBR>We recommend</nobr> using a sandbox store (not your main store) when applying these changes for the first time.
</aside>

If you are working with a new store, product filtering might already work out-of-the-box for your theme.

## <span class="jumptarget"> Implementing Product Filtering in Your Theme </span>

Once you’ve enabled product filtering for your sandbox store, you’ll need to get the most up-to-date Blueprint files and copy them into your own theme. The best way to do this is:

1.  Enable Developer Mode in your sandbox store, if you haven’t already. This will enable the Blueprint theme and the faceted search feature.
2.  Unless you’re starting from scratch, back up your theme customizations.
3.  Select Blueprint as your store’s theme. 
4.  Download the Blueprint theme – don’t worry, you’ll only need certain files for faceted search.
5.  Restore your theme from the backups you downloaded in step 2.
6.  Upload the following files from Blueprint to your sandbox store:
    *   `Panels/FacetedSearch.html` – This panel contains the markup for your Faceted Search column. It calls all the panels for each of the searchable facets as well.
    *   `Panels/FacetedSearchProductGrid.html` - This panel contains the markup for your list of product results when your category lists are set to "grid view".
    *   `Panels/FacetedSearchProductList.html` - This panel contains the markup for your list of product results when your category lists are set to "list view".
    *   `Panels/FacetedSearchTemplateCategory.html` – The panel that contains the markup for the Category facet.
    *   `Panels/FacetedSearchTemplateMultichoice.html` – The panel that contains the markup for any facet containing multiple-choice check boxes.
    *   `Panels/FacetedSearchTemplateRange.html` – The panel that contains the markup for facets containing ranges.
    *   `Panels/FacetedSearchTemplateRating.html` – The panel that contains the markup for the Rating facet.
    *   `Panels/FacetedSearchTemplateShowing.html` – The panel that contains the markup for the list of currently selected filters.
    *   `Panels/FacetedSearchTemplateSingle.html` – The panel that contains the markup for any facet containing single-choice radio buttons.
    *   `Panels/Pagination.html` – The panel that contains the markup for your pagination – note that this will not use any existing pagination panels that your theme may have.
    *   `Styles/faceted-search.css` – This will be included in `FacetedSearch.html`, so you don’t need to add it to your `HTMLHead.html` file.
7.  Copy your `brands.html` page and name it `brands_with_facets.html`.
8.  Copy your `search.html` page and name it `search_with_facets.html`.
9.  Copy your `category.html` page and name it `category_with_facets.html`.
10.  Include the required assets on your new facets pages. You can use the facets pages from Blueprint for reference (the assets will be named the same):
    *   `%%Panel.FacetedSearch%%` – This is the main Faceted Search panel, and will call the rest of the panels it needs accordingly (including required JavaScript and CSS).
    *   Add the `js-faceted-search-column` class to the container of your Faceted Search panel.
    *   If you have a responsive theme, you can add the `Refine` button to your page, which toggles the Faceted Search column on or off. By default, this button displays only on mobile:<br>
    `<button class="js-faceted-search-action btn"> %%LNG_FilterBy%% </button>`
11.  If the pages mentioned above don’t exist, you can copy the existing pages from the Blueprint theme. Keep in mind that you’ll need to modify these pages to suit the structure of your theme.

## <span class="jumptarget"> Allowing For Filtering On/Off </span>

When faceted search is switched on, the following templates will be used:

*   Brand pages > `brands_with_facets.html`
*   Search page > `search_with_facets.html`
*   Category pages > `category_with_facets.html`

When switched off:

*   Brand pages > `brands.html`
*   Search page > `search.html`
*   Category pages > `category.html`

<aside class="warning">
<span class="aside-warning-hd">Clone and Rename Templates, Don't Alter Originals</span><br><br>
Development agencies should not modify the <em>base</em> templates of the <code>brand.html</code>, <code>search.html</code>, or <code>category.html</code> pages to include faceted search. Clients who are not on a Pro or Enterprise plan do not get faceted search, so if you include it on <code>category.html</code>, <code>brand.html</code> or <code>search.html</code> page, your theme will be useless to those clients.
</aside>

## <span class="jumptarget"> Category Filtering Details </span>

When you turn on product filtering for a store, it will automatically switch all `Category Layout File`s to your new `category_with_facets.html` page. To view product filtering on Category pages, you must ensure that the `Category Layout File` is set to `category_with_facets.html`.

You will not see the Category filter on storefront Category pages. This has been hidden for SEO reasons.