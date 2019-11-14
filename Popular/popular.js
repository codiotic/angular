var app = angular.module('app.core')

app.controller('PopularController', popular);

function popular($scope, PageValues) {
    PageValues.title = "Popular Content";
    PageValues.activeMenu = "Popular";
    PageValues.metaTitle = "App | Popular"
    PageValues.description = "Learn AngularJS using best practice real world examples.";
}