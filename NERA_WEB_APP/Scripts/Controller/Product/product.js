app.controller("ProductCtrl", function ($scope, $http) {
    $scope.Item;
    $scope.showSP = function () {
        $http.get('/Product/showSP').success(function (data,status) {
            $scope.Item = data;
            console.log("success" + data+ status);
            for (var i = 0; i < $scope.Item.length; i++) {
                console.log(i);
            }
        }).error(function (error) {
            console.log("error :" + error);
        })
    }
    $scope.showSP();
})