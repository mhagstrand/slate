/*
This adds the api page toggle.
*/

'use strict';

( function(global) {

    function selectApiPage(apiPage) {
        $('.api-selector button')
            .removeClass('btn-selected')
            .filter('[data-page-name=\'' + apiPage + '\']')
            .addClass('btn-selected');
    }

    function underscoreToDash(str) {
        return str.replace('_', '-');
    }

    $(function() {
        $('.api-selector button').on('click', function() {
            var apiPage = $(this).data('page-name');

            if (apiPage === 'V2') {
                window.location = '/api/v2' + window.location.hash;
            } else if (apiPage === 'V3') {
                window.location = '/api/v3' + window.location.hash;
            } else {
                window.location = '/api' + window.location.hash;
            } 
        });

        var path = window.location.pathname;

        if (path.indexOf('V2') !== -1) {
            selectApiPage('V2');
        } else if (path.indexOf('V3') !== -1) {
            selectApiPage('V3');
        } else {
            selectApiPage('Home');
        }

    });

} )(window);