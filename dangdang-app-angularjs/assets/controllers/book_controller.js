app.controller('bookController', ['$scope', function($scope) {
    $scope.bookTypes = [{
        id: 'ertong',
        name: '儿童',
        img: 'https://images-cn.ssl-images-amazon.com/images/I/51VECKzx4fL._SX395_BO1,204,203,200_.jpg',
        description: '儿童图书畅销榜'
    }, {
        id: 'lishi',
        name: '历史',
        img: 'https://images-cn.ssl-images-amazon.com/images/I/41pi7pBzTcL._SX348_BO1,204,203,200_.jpg',
        description: '历史文学文献'
    }, {
        id: 'dongman',
        name: '动漫',
        img: 'https://images-cn.ssl-images-amazon.com/images/I/51YdMpV5hPL._SX334_BO1,204,203,200_.jpg',
        description: '最新动漫资讯'
    }, {
        id: 'qingchunwenxue',
        name: '青春文学',
        img: 'https://images-cn.ssl-images-amazon.com/images/I/51koG%2Br-jnL._SX313_BO1,204,203,200_.jpg',
        description: '我的青春我做主'
    }, ];
}]);
