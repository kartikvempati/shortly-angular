angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  //$scope.data['links'] = Links.getAll();
  Links.getAll().then(function (resp) {
    $scope.data.links = resp;
  });

});