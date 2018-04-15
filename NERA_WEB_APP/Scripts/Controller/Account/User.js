app.controller("UserController", function ($scope, $http) {

    $scope.isExistingInfor = true;
    $scope.isExistingPass = true;


    // get thông tin người dùng
    $scope.getInforUser = function () {
     
        //this.id = id;
        //if (this.id != null) {
        this.isExistingInfor = false;
        //}
    }

    $scope.save = function () {
        this.isExistingInfor = true;
        this.isExistingPass = true;
    }



    $scope.changepass = function (e) {
        this.isExistingPass = false;
        e.preventDefault();
    }



    $scope.cancel = function () {

        this.isExistingInfor = true;
        this.isExistingPass = true;
        
    }
})