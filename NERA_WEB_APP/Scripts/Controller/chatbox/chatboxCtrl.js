app.controller('CBCtrl', function ($scope, $http, $filter) {

    //#region Paging
    $scope.totalRows = 101;
    $scope.pageSize = 20;
    $scope.pageIndex = 0;
    $scope.Paging = [];
    var filter1 = null;
    var order1 = 'NAME';
    var desc1 = true;

    var numOfPages = Math.ceil($scope.totalRows / $scope.pageSize);
    setPageIndex(0);
    $scope.onStart = function () {
        setPageIndex(0);
    };
    $scope.onNext = function () {
        setPageIndex($scope.pageIndex + 1);
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
        GetAllData();
        numOfPages = Math.ceil($scope.totalRows / $scope.pageSize);
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


    $scope.SortingBy = function (clm) {
        if (order1 !== clm) {
            order1 = clm;
            desc1 = true;
        } else {
            desc1 = !desc1;
        }
        GetAllData();
    }

    //#endregion filter

    $scope.Item;
    $filter.data = false;
    $scope.addData = function (Item) {
        $http.post('/Chatbox/addData', { cs: Item })
            .success(function (data, status) {
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

                $scope.Item = data;
                $scope.Item = null;
            }).error(function (error) {
                console.log('error' + error);
            })
    };
    $scope.getData = $scope.getData || GetAllData();


    function GetAllData() {
        //debugger;
        var config = {
            params: {
                filter: this.filter1,
                order: this.order1,
                unread: null,
                desc: this.desc1,
                pageIndex: $scope.pageIndex,
                pageSize: $scope.pageSize
            }
        };
        $http.post('/Chatbox/GetData', config
        ).then(function (data, status, headers, config) {
            $scope.data = data.data[0];           
            $scope.totalRows = data.data[1];
        }, function (error) {
            $scope.message = 'Unexpected Error while loading data!!';
            $scope.result = "color-red";
            console.log(error);
        });
    };


    $scope.item = null;
 
    $scope.update = function (id,unread) {
        this.isUnread = this.isUnread ? false : true;
        $http.post("/Chatbox/update", { id: id, unread: unread })
            .success(function (data) {
                GetAllData();
            }).error(function (error) {
                console.log(error);
            });
    }

    

    // sắp xếp
    $scope.updown =true;
    $scope.sortColumn = 'name';
    $scope.reserveSort = false;
    $scope.sort = function (item) {
        $scope.reserveSort = ($scope.sortColumn == item) ? !$scope.reserveSort : false;
        $scope.sortColumn = item;
        this.updown = this.updown ? false : true;
    }

})
