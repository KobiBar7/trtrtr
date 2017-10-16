var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
 
    $routeProvider
        .when("/", {
            templateUrl: "views/firstTab.html",
            controller: 'newWorkerFisrtController'
        })

        .when("/first", {
            templateUrl: "views/firstTab.html",
            controller: 'newWorkerFisrtController'
        })

        .when("/second", {
            templateUrl: "views/secondTab.html",
            controller: 'newWorkerSecondController'
        })
 

});
