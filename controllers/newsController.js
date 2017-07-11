app.controller("newsController", function($scope, arsTechnicaService) {

  $scope.articles = [];
  $scope.topNews = [];

  arsTechnicaService.getLatestNews().then(function(response) {
    $scope.articles = response.data.articles;
  });

  arsTechnicaService.getTopNews().then(function(response) {
    $scope.topNews = response.data.articles;
  });

});
