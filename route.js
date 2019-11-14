(function () {
    var app = angular.module("app.routes", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './Home/home.html',
                controller: 'HomeController as home'
            }).when('/premier', {
                templateUrl: './Premier/premier.html',
                controller: 'PremierController as premier'
            }).when('/popular', {
                templateUrl: './Popular/popular.html',
                controller: 'PopularController as popular'
            }).when('/search', {
                templateUrl: './Search/search.html',
                controller: 'SearchController as search'
            }).otherwise({ redirectTo: '/' })
    })
})()