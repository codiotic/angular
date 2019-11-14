var app = angular.module('app.core')

app.controller('PremierController', Premier);

function Premier($scope, PageValues) {
    PageValues.title = "Premier";
    PageValues.activeMenu = "Premier";
    PageValues.metaTitle = "App | Premier"
    PageValues.description = "Learn AngularJS using best practice real world examples.";
}