angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  // $scope.data['links'] = Links.getAll();
  Links.getAll().then(function (resp) {
    $scope.data['links'] = resp;
  });
  // $scope.getAll = function(){

  // };
});
