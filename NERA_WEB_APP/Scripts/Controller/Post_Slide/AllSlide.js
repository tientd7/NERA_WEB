app.controller("PostSlide", function ($scope, $http, $location, $window) {


    $scope.message = '';
    $scope.ListSlide;
    $scope.Item = {};
    console.log('')

    $scope.allData = function () {
        $http.get('/Post_Slide/AllSlide')
        .success(function (data, status, headers, config) {
            $scope.ListSlide = data;
            for (var i = 0; i < $scope.ListSlide.length; i++) {
                console.log(i);
            }
            console.log("success"+ListSlide);
        })
        .error(function (error) {
            $scope.message = 'Lỗi';
            console.log("error"+error);
        })
    }

    $scope.allData();

});