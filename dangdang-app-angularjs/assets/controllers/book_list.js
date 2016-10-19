app.controller('bookListController', ['$scope', 'bookListController',function($scope,b_lc) {
    $scope.booksData = [];
    c_s.getData('',function(res){
      console.log(res);
      console.log('数据获取成功');
      $scope.booksData =res.data.data;
    });
}]);
