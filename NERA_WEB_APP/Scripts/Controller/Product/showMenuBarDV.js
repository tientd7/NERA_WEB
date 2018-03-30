app.controller("ProductCtrl", function ($scope, $http) {
    //tạo biến item dv
    $scope.ItemDV;
    // hàm gọi lấy danh sách dich vụ
    $scope.showDV = function () {
        $http.get('/Product/showDV').success(function (data, status) {
            $scope.ItemDV = data;
            console.log("success" + data + status);

        }).error(function (error, status) {
            console.log("error :" + error + status);
        })
    };
    // chạy hàm
    $scope.showDV();

})