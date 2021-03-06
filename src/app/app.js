require('../style/reset.less');
require('../style/app.less');

let ngModule = angular.module('app', []);
require('../directive/layout/layout')(ngModule);
require('../app/db')(ngModule);

ngModule.controller('appCtrl', ['$scope', '$log', '$timeout', 'httpMethod', function ($scope, $log, $timeout, httpMethod) {
    $scope.clickFn = function () {
        // 查询员工信息
        httpMethod.querySupplierByCond().then(function (rsp) {
            $log.log(_.get(rsp, 'data'));
        }, function () {
            $log.log('调用查询供货商信息接口失败.');
        });
    }
}]);
