angular.module('flatpcApp')
.controller('GradeCtrl', ['$scope', '$state','AppConfig','$rootScope',function($scope, $state,AppConfig,$rootScope) {
    $scope.name = $state.current.name;
    $scope.tree = [
        {
            name:'树枝1',
            list:[
                {
                    name:'树枝2',
                    list:[
                        {
                            name:"树枝3",
                            list:[
                                {
                                    name:'树枝4',
                                    list:[
                                        {
                                            name:'树枝5',
                                            list:[
                                                {
                                                    name:'叶子6'
                                                }
                                            ]
                                        },
                                        {
                                            name:'叶子5'
                                        }
                                    ]
                                },
                                {
                                    name:'叶子4'
                                }
                            ]
                        },
                        {
                            name:"叶子3"
                        },
                        {
                            name:"叶子3"
                        }
                    ]
                },
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        },
                        {
                            name:"叶子"
                        }
                    ]
                },
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        }
                    ]
                }
            ]
        },
        {
            name:'树枝',
            list:[
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        }
                    ]
                },
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        }
                    ]
                },
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        }
                    ]
                }
            ]
        },
        {
            name:'树枝',
            list:[
                {
                    name:'叶子'
                }
            ]
        },
        {
            name:'叶子'
        },
        {
            name:'树枝',
            list:[
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        }
                    ]
                }
            ]
        },
        {
            name:'树枝',
            list:[
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        }
                    ]
                }
            ]
        },
        {
            name:'树枝',
            list:[
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        }
                    ]
                }
            ]
        },
        {
            name:'树枝',
            list:[
                {
                    name:'树枝',
                    list:[
                        {
                            name:"叶子"
                        }
                    ]
                }
            ]
        }
        
    ];
    $scope.weekList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    $scope.detail = function(){
        $('.info-card').addClass('show');
    }
    $scope.initCard = function(e){
        //$rootScope.loading = true;
        console.log('do something');
    }
    $rootScope.loading = false;
    
    console.log($scope.name);
    /*$scope.myChart.setOption({
        series : [
            {
                data:[48, 49, 57, 41, 30, 50, 39]
            },
            {
                data:[67, 38, 48, 57, 49, 68, 55]
            },
            {
                data:[69, 47, 55, 38, 62, 55, 37]
            }
        ]
    }); */
}]);