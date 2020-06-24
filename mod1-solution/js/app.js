(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.msg = "";

  $scope.checkIfTooMuch = function () {
    if ($scope.dishes.length === 0 ) {
      $scope.msg = "Please enter data first";
      $scope.fontcolor = "red"; 
      $scope.bordercolor = "red";
    } else {
      $scope.fontcolor = "green";
      $scope.bordercolor = "green";
      $scope.msg = ($scope.dishes.split(',').filter(function(e){return e.trim()}).length <=3) ? "Enjoy!":"Too much!";
    } 
  };
}

})();
