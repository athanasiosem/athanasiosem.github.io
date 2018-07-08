var app = angular.module('converter', ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/length.html",
            controller : "LengthAndDistanceController"
        })
        .when("/length", {
            templateUrl: "views/length.html",
            controller: "LengthAndDistanceController"
        })
        .when("/temperature", {
            templateUrl: "views/temperature.html",
            controller: "TemperatureController"
        })
        .when("/area", {
            templateUrl: "views/area.html",
            controller: "AreaController"
        })
        .when("/volume", {
            templateUrl: "views/volume.html",
            controller: "VolumeController"
        })
        .when("/weight", {
            templateUrl: "views/weight.html",
            controller: "WeightController"
        })
        .when("/time", {
            templateUrl: "views/time.html",
            controller: "TimeController"
        }).otherwise({
            redirectTo: '/'
        });
});

app.directive("converterBox", () => {
    
    let directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "scripts/directives/converter-box.html"
    
    return directive;
});
