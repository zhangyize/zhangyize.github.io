app.controller('bookListController', ['$scope','$commonService','$routeParams',function($scope,c_ser,r_p) {
    $scope.booksData = [];
    c_ser.getData('ertong',function(res){
      console.log(res);
      console.log('数据获取成功');
      $scope.booksData =res.data;
    });
    c_ser.getData('lishi',function(res){
      $scope.booksData =res.data;
    });
    c_ser.getData('dongman',function(res){
      $scope.booksData =res.data;
    });
    c_ser.getData('qingchunwenxue',function(res){
      $scope.booksData =res.data;
    });
}]);
