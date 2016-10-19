app.controller('bookListController', ['$scope','$commonService','$routeParams',function($scope,c_ser,r_p) {
    $scope.booksData = [];
    c_ser.getData(r_p.id,function(res){
      console.log(res);
      console.log('数据获取成功');
      $scope.booksData =res.data;
    });
    
}]);
