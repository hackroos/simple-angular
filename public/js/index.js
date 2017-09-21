//声明依赖module模块
var app = angular.module('app', ['ng','ngRoute']);

//配置状态
app.config(function($routeProvider){

  $routeProvider.when('/ngStart', {
    templateUrl: 'tpl/start.html'

  }).when('/ngPage',{
    templateUrl: 'tpl/home-page.html',
    controller: 'homeCtrl'

  }).when('/ngIntr', {
    templateUrl: 'tpl/intrduction.html'

  }).when('/ngProduct', {
    templateUrl: 'tpl/product.html'

  }).when('/ngCase', {
    templateUrl: 'tpl/case.html'

  }).when('/ngRecr', {
    templateUrl: 'tpl/recruitment.html'

  }).when('/ngCont', {
    templateUrl: 'tpl/connect_us.html'

  }).otherwise({redirectTo:'/ngStart'})
});

//创建父控制器
app.controller('parentCtrl',['$scope','$location',function($scope,$location){
  $scope.jump = function(desPath){
    $location.path(desPath);
  }

  //这是存储页头的所有信息
  $scope.arr = [
    {url:"ngPage",text:"首页",className:'color_change'},
    {url:"ngIntr",text:"公司简介",className:''},
    {url:"ngProduct",text:"产品与服务",className:''},
    {url:"ngCase",text:"应用案例",className:''},
    {url:"ngRecr",text:"人才招募",className:''},
    {url:"ngCont",text:"联系我们",className:''}
  ];

  //动态添加class类
  $scope.active = function($index){
    for(var i = 0 ; i < $scope.arr.length; i++){
      $scope.arr[i].className = "";
    }
    $scope.arr[$index].className = "color_change";
  }
}]);

//创建home-page控制器
app.controller('homeCtrl',['$scope','$http', function($scope, $http){
  $http.get('/cnew').success(function (data){
    console.log(data);
    $scope.companry = data[0];
    $scope.lists = data[1];
  });
}]);
