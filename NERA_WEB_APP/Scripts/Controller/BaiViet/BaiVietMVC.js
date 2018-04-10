app.controller('BaiVietMVC', function ($scope, $http) {
    $scope.getData = null;
    $scope.delete = function (Post_Id) {
        var a = confirm("Ban co muon xoa")
        if (a == true) {
            $http.post('/BaiVietMVC/delete', {Post_Id: Post_Id })
                .success(function (data) {
                    console.log(data);
                    $scope.getData = data;
                    var x = location.href;
                    window.location.href = x;
                    location.reload();
                }).error(function (error) {
                    console.log(error);

                })
        };
    }
})