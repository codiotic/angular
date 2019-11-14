'use strict';

angular
    .module('app.core')
    .value('PageValues', {
        'activeMenu': 'Home',
        'metaTitle': 'Home',
        'title': null,
        'description': null,
        'loading': false
    });