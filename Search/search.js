var app = angular.module('app.core')

app.controller('SearchController', Search);

function Search($scope, PageValues) {
    PageValues.title = "Search ";
    PageValues.activeMenu = "Search";
    PageValues.metaTitle = "App | Search"
    PageValues.description = "Learn AngularJS using best practice real world examples.";
}