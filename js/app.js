angular.module("App", ["ui.router"])
.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", { // setting the "home" state
      url: "/",
      templateUrl: "views/home.html",
      controller: "homeCtrl"
    })

    $stateProvider.state("destination", {
      url: "/destination/:destination",
      templateUrl: "views/destination.html",
      controller: "destinationCtrl"
    })

  }
]);
