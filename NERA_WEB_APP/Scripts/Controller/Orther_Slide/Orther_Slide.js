app.controller("Orther_Slide", function ($scope, $http) {

    $scope.List = "";
    this.IsEditing = false;
    this.EditId = -1;
    getAllDataSlide();

    function clearAllControl() {
        $scope.CreateItem = {};
    }

    $scope.onCreateSlide = function () {
        var obj = {
            Tbl_Id: 0,
            Image_Title: $scope.CreateItem.Image_Title,
            Image_URL: $scope.CreateItem.Image_URL,
            Image_Link: $scope.CreateItem.Image_Link,
            Image_Orde: $scope.CreateItem.Image_Orde,
            Enable: $scope.CreateItem.Enable,
            Slide_Type: $scope.CreateItem.Slide_Type,
            Language: $scope.CreateItem.Language
        };
        var config = {
            data: obj
        };
        $http.post('/Orther_Slide/Insert', config).then(function (data) {
            getAllDataSlide();
        },function (error) {
            console.log(error);
        });
        clearAllControl();
    };

    $scope.onEditSlide = function (id) {
        this.EditId = id;
        this.IsEditing = true;
    };

    $scope.onCancelSlide = function () {
        this.IsEditing = false;
    };

    $scope.onDeleteSlide = function (id) {
        var config = {
            data: { Delete_Id: id }
        };
        $http.post('/Orther_Slide/Delete', config).success(function (data) { getAllDataSlide(); }).error(function (error) { console.log(error); });
    };

    $scope.onSaveSlide = function (item) {
        //var obj = {
        //    Tbl_Id: item.Tbl_Id,
        //    Image_Title: item.Image_Title,
        //    Image_URL: item.Image_URL,
        //    Image_Link: item.Image_Link,
        //    Image_Orde: item.Image_Orde,
        //    Enable: item.Enable,
        //    Slide_Type: item.Slide_Type,
        //    Language: item.Language
        //};
        var config = {
            params: { Slide: item }
        };
        $http.post('/Orther_Slide/Update', config).then(function (data, status, headers, config) { getAllDataSlide(); },function (error) { console.log(error); });
    };

    $scope.getStatusSlide = function (id) {
        if (this.IsEditing)
            if (this.EditId === id)
                return false;
        return true;
    };
    function getAllDataSlide() {
        $http.get('/Orther_Slide/GetData')
            .success(function (data) {
                $scope.ListSlide = data;
            })
            .error(function (error) {
                console.log(error)
            });
    };



});