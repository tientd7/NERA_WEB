


app.controller('addNewCtr', function ($scope, $http) {
    $scope.message = "";
    $scope.listProduct;
    $scope.Item = null;
    console.log('df');

    $scope.Create = function () {

        $http({
            method: 'POST',
            url: '/Product/addNewProduct',
            data: $scope.Item
        }).success(function (data, status, headers, config) {
            if (data != "") {
                console.log("Thêm Thành Công");
                window.location.href = '/Product/product';

            }
            else {
                console.log('Form data not Saved!');

            }
        }).error(function (data, status, headers, config) {
            $scope.message = 'Unexpected Error while saving data!!' + data.errors;
            console.log($scope.message);
        });

    }

});
