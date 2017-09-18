//声明依赖module模块
var app = angular.module('app', ['ionic']);

//配置状态
app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider.state('start', {
    templateUrl: 'tpl/start.html',
    url: '/ngStart'

  }).state('home',{
    templateUrl: 'tpl/home-page.html',
    url: '/ngPage'

  }).state('intr', {
    templateUrl: 'tpl/intrduction.html',
    url: '/ngIntr'

  }).state('product', {
    templateUrl: 'tpl/product.html',
    url: '/ngProduct'

  }).state('case', {
    templateUrl: 'tpl/case.html',
    url: '/ngCase'

  }).state('recr', {
    templateUrl: 'tpl/recruitment.html',
    url: '/ngRecr'

  }).state('connect', {
    templateUrl: 'tpl/connect_us.html',
    url: '/ngCont'
  })

  $urlRouterProvider.otherwise('/ngStart');
});

//创建父控制器
app.controller('parentCtrl',['$scope','$state',function($scope,$state){
  $scope.jump = function(desState, params){
    $state.go(desState , params);
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
