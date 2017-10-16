app.controller('newWorkerFisrtController', ['$scope', function ($scope) {
    $scope.types = ["One", "Two", "Three"];

    $scope.roles = ["One1", "Two1", "Three1"];

  
    $scope.initDateTime = function () {
        $('#datetimepicker').datetimepicker();
    }

}]);