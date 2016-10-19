app.controller('mainController',['$scope','commonService',function($scope,c_s){
  c_s.getData('1',function(res){
    console.log(res);
  });
}]);
