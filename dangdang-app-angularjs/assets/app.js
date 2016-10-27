var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './assets/tpl/index.html',
            controller: ''
        })
        .when('/weather', {
            templateUrl: './assets/tpl/weather.html',
            controller: ''
        })
        .when('/book', {
            templateUrl: './assets/tpl/book.html',
            controller: 'bookController'
        })
        .when('/about_me', {
            templateUrl: './assets/tpl/about_me.html',
            controller: ''
        })
        .when('/book_list/:id',{
          templateUrl:'./assets/tpl/book_list.html',
          controller: 'bookListController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
