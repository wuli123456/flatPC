angular.module('flatpcApp')
.controller('CheckCtrl', ['$scope','AppConfig','$rootScope', 'FlatService','DailyService','$filter','CollegeService','RoomService',"StudentService",
function($scope,AppConfig,$rootScope,FlatService,DailyService,$filter,CollegeService,RoomService,StudentService) {
    //基础的页码、排序等等选项
    $scope.media = {
        epage:1,
        pageCount:1,
        recordCount:1,
        pagesize:10,
        name:'',
        studentnumber:'',
        campusid:'',
        liveareaid:'',
        flatid:'',
        search:0,
        orderfield:'',
        ordertype:'',
        status:-1
    }
    //换页
    $scope.setPage = function(n){
        if($scope.media.epage + n >0 && $scope.media.epage + n <= $scope.media.pageCount){
            $scope.media.epage += n;
            refresh();
        } 
    };
    //调整每页显示量
    $scope.setPageSize = function(n){
        $scope.media.pagesize = n;
        refresh();
    }
    //排序
    $scope.setOrder = function(name){
        if($scope.media.orderfield == name)
        {
            $scope.media.ordertype = $scope.media.ordertype=="asc"?"desc":"asc";
        }else{
            $scope.media.orderfield = name;
            $scope.media.ordertype = "asc";
        }
        refresh();
    }
    //调整查询规则，按学区、生活区或者楼栋查询
    $scope.show = function(type,item){
        $scope.media.campusid = item.campusId || "";
        $scope.media.liveareaid = item.liveAreaId || "";
        $scope.media.flatid = item.flatId || "";
        
        switch(type){
            case 0:
                $scope.selecter.campusId = "";
                $scope.selecter.liveAreaId = "";
                $scope.selecter.flatId = "";
                break;
            case 1:
                $scope.selecter.campusId = item.campusId;
                $scope.selecter.liveAreaId = "";
                $scope.selecter.flatId = "";
                break;
            case 2:
                $scope.selecter.liveAreaId = item.liveAreaId;
                $scope.selecter.flatId = "";
                break;
            case 3:
                $scope.selecter.flatId = item.flatId;
                break;
        }
        
        refresh();
    };
    //调整查询规则，计划中、已审批、已取消、已驳回
    $scope.setStatus = function(status){
        $scope.media.status = status || -1;
        refresh();
    }
    //检索功能
    $scope.search = function(search){
        $scope.media.name = $scope.media.search?'':search;
        $scope.media.studentnumber = $scope.media.search?search:'';
        refresh();
    };
    //初始化树+列表
    if(!$rootScope.treeFlat){
        FlatService.getList(AppConfig.schoolCode).success(function(data){
            $rootScope.treeFlat = data.data;
            $rootScope.loading = false;
            refresh();
        });
    }
    else {
        refresh();
    }
    //渲染list
    function refresh(){
        $rootScope.loading = true;
        DailyService.getCheckList($scope.media).success(function(data){
            $scope.list = data.data.list;
            $scope.media.recordCount = data.data.recordCount;
            $scope.media.pageCount = data.data.pageCount;
            //console.log(data.data);
            $rootScope.loading = false;
        })
    }
    
    //查看详情
    $scope.work = {};
    $scope.detail = function(work){
        $scope.work = work;
        $scope.work.returnMessage  = "";
        return null;
    }
    //驳回理由 Dom操控
    $scope.returnSwitch = false;
    $scope.returnSwitchChange = function(){
        $scope.returnSwitch = !$scope.returnSwitch;
    }
    //审批
    $scope.passWork = function(fun){
        $rootScope.loading = true;
        DailyService.passChange({
            token:'',
            occupancyid:$scope.work.occupancyId || '',
            adminid:''
        }).success(function(data){
            swal("提示", "审批成功！", "success"); 
            if(fun && typeof fun == 'function') fun();
            refresh();
            $rootScope.loading = false;
        });
    }
    //驳回
    $scope.returnWork = function(fun){
        $rootScope.loading = true;
        DailyService.backChange({
            token:'',
            occupancyid:$scope.work.occupancyId || '',
            backmessage:$scope.work.returnMessage,
            adminid:''
        }).success(function(data){
            swal("提示", "驳回成功！", "success");
            if(fun && typeof fun == 'function') fun();
            refresh();
            $rootScope.loading = false;
        });
    }
    //取消
    $scope.cancelWork = function(fun){
        $rootScope.loading = true;
        DailyService.cancelChange({
            token:'',
            occupancyid:$scope.work.occupancyId || '',
            adminid:''
        }).success(function(data){
            swal("提示", "已取消！", "success"); 
            if(fun && typeof fun == 'function') fun();
            refresh();
            $rootScope.loading = false;
        });
    }
    
}]);