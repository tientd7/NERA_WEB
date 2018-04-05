app.controller('CBCtrl', function ($scope, $http, $filter) {


    $scope.data;
    $filter.data = false;
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
            }, 300)

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
    };
    $scope.getData = function () {
        //debugger;
        $http.get('/Chatbox/GetData')
            .success(function (data, status, headers, config) {
                $scope.data = data;
                
            })
            .error(function (error) {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
                console.log(error);
            });
    };
    $scope.getData();

    $scope.sort="name"
    $scope.a = { "Unread": false };
    $scope.check = function (Unread) {
        if ($scope.Unread == true) {
            alert('Thành công');
        } else {
            alert('Thành công');
        }
       
    }

    

    
})
