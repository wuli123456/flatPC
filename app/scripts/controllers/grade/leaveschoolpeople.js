'use strict';

/**
 * @ngdoc function
 * @name flatpcApp.controller:formCtrl
 * @description
 * # formCtrl
 * Controller of the flatpcApp
 */
angular.module('flatpcApp')
.controller('leaveschoolpeopleCtrl', ['$scope','$rootScope','AppConfig',function($scope,$rootScope,AppConfig) {
        //存储列表头到frame.html中
    $scope.menus = [
        '毕业离校','各部门审批结果'
    ];
    //跳转到什么地方去
    $scope.parent = "graduate";
    $scope.loaded = function(){
        $rootScope.loading = false;
        $scope.$apply();
    }
    var a = document.createElement('a');
    a.href = AppConfig.FRAME + "index.php?m=Apartment&c=LeavingSchool&a=resultinfo&token="+AppConfig.token+"&schoolcode="+AppConfig.schoolCode;
    a.target="page-frame";
    a.click();
}]);