app.controller('MenuItemCtrl', function ($scope, $http) {
    
        
    $scope.msg = "success msg menuitem";
    $scope.listDV;

   $scope.getData = function(){
       $http.get('/Menu/showDV')
            .success(function (data, status) {
                $scope.listDV = data;
                console.log(status);
                console.log("success "+$scope.listDV);
            }).error(function (error) {
                console.log("error"+error);
            })
   }

   $scope.getData();

})