app.controller('bookListController', ['$scope','$commonService','$routeParams',function($scope,c_s,r_p) {
    $scope.booksData = [];
    c_s.getData('ertong',function(res){
      console.log(res);
      console.log('数据获取成功');
      $scope.booksData =res.data;
    });
    c_s.getData('lishi',function(res){
      $scope.booksData =res.data;
    });
    c_s.getData('dongman',function(res){
      $scope.booksData =res.data;
    });
    c_s.getData('qingchunwenxue',function(res){
      $scope.booksData =res.data;
    });
}]);
