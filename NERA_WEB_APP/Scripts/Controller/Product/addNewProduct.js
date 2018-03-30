


app.controller('addNewCtr', function ($scope, $http) {
    $scope.message = "";
    $scope.listProduct;
    $scope.Item = null;


    $scope.Create = function () {

        $http({
            method: 'POST',
            url: '/Product/addNewProduct',
            data: $scope.Item
        }).success(function (data, status, headers, config) {
            if (data != "") {
                alert('Added Success!');
             if (data.Item_Type == "DV") {
                    window.location.href = '/Product/services';
                }  
             else if (data.Item_Type == "SP") {
                    window.location.href = '/Product/product';
                } 

            }
            else {
                console.log('Form data not Saved!');

            }
        }).error(function (error, status, headers, config) {
            $scope.message = 'Unexpected Error while saving data!!' + data.errors;
            console.log(error);
        });

    }


    

});
