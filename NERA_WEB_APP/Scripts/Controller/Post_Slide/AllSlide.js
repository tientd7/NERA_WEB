app.controller('PostSlide', function ($scope, $http, $location, $window) {
    $scope.message = '';
    $scope.ListSlide = null;

    get.allData();
    $scope.allData = function () {
        $http.get('/Post_Slide/AllSlide')
        .success(function (data, status, headers, config) {
            $scope.ListSlide = data;
            console.log(ListSlide);
        })
        .error(function (error) {
            $scope.message = 'Lỗi';
            console.log(error);
        })
    }

});