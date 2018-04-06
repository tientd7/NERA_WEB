app.controller('CBCtrl', function ($scope, $http, $filter) {

//#region Paging
    $scope.totalRows = 101;
    $scope.pageSize = 20;
    $scope.pageIndex = 0;
    $scope.Paging = [];
    var numOfPages = Math.ceil($scope.totalRows / $scope.pageSize);
    startPaging();
    $scope.onStart = function () {
        setPageIndex(0);
    };
    $scope.onStart();
    $scope.onNext = function () {
        setPageIndex($scope.pageIndex+1);
    }
    $scope.onPrevious = function () {
        setPageIndex($scope.pageIndex - 1);
    }
    $scope.onEnd = function () {
        setPageIndex(numOfPages - 1);
    }
    $scope.onPage = function (id) {
        setPageIndex(id);
    }
    function setPageIndex(i) {
        $scope.pageIndex = i;
        startPaging();
        $scope.Paging[$scope.pageIndex]['disable'] = 'disabled';
    }
    function startPaging() {
        $scope.Paging = [];
        for (i = 0; i < numOfPages; i++) {
            var item = {};
            item['pageIndex'] = i;
            item['disable'] = '';
            $scope.Paging.push(item);
        }
    }
//#endregion Paging

    //#region filter
    $scope.filter = '';
    $scope.order = '';
    $scope.desc = true;
    //#endregion filter

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
