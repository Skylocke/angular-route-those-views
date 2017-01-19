angular.module("App") // "getter" form of angular.module();
.controller("navCtrl", ["$scope", "$state", function($scope, $state) {
  $scope.destinationList = destinationList;
}])
.controller("homeCtrl", ["$scope", "$state", function($scope, $state) {
  $scope.destinationList = destinationList;
}])
.controller("destinationCtrl", ["$scope", "$state", "$stateParams", function($scope, $state, $stateParams) {

  $scope.destinationData = {};

  destinationList.forEach(function(destination) {
    $scope.destinationData[destination] = {
      img: "img/posters/" + destination + ".jpg",
      blurb: "test"
    }
  });

  $scope.destination = $stateParams.destination;

}])
