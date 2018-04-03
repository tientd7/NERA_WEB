app.controller('CBCtrl', function ($scope, $http) {

    $scope.data;

    $scope.addData = function () {
        $http({
            url: '/Chatbox/addData',
            method: 'POST',
            data: $scope.data
        }).success(function (data, status) {
            setTimeout(function () {
                $('.chat-box-wrapper').css("height", "316px");
                $('.form-msg-box').fadeOut(500);
                $('.alert-noti-success-msg-box').fadeIn(500);
            },300)
           
            setTimeout(function () {
                $('.chat-box-wrapper').css("height", "auto");
                $('.form-msg-box').fadeIn(3000);
                $('.alert-noti-success-msg-box').fadeOut(3000);
            }, 2000);
           

            $scope.data = data;
            console.log("success" + data);
            $scope.data = null;
        }).error(function (error) {
            console.log('error' + error);
        })
    }
})
