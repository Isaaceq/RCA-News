var app = angular.module("rcaNewsApp", ["ui.router"]);


app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("topNews", {
      url: "/topNews",
      templateUrl: "./views/topNews.html",
      controller: "homeController"
    });

});
