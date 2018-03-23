app.controller("Orther_Slide", function ($scope, $http) {

    $scope.List = "";

    $http.get('/Orther_Slide/GetData/')
        .success(function (data) {
            $scope.List = data; 
        })
        .error(function (error) {
            console.log(error)
        })

    
})