

app.controller('Post_Slide', function ($scope, $http, $location, $window) {
    $scope.message = '';
    $scope.listSlide = null;
    console.log('adsa');
    $scope.getallSlide = function () {
        //debugger;
        $http.get('/Post_Slide/GetAllSlide')
            .success(function (data, status, headers, config) {
                $scope.listSlide = data;
                console.log(listSlide);
            })
            .error(function (error) {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
                console.log(error);
            });
    };
});