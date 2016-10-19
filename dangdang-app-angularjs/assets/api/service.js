app.factory('commonService',['$scope',function(){
  var service ={};
  service.getData =function(type,callBack){
    $http({
      url:'../../data/dangdang1'+type+'.json',
      method:'get'
    })
    .then(function(res){
      console.log('获取数据成功');
      callBack(res);
    },function(err){
      console.log(err);
    });
  };
  return service;
}]);
