app.controller("homeController", function($scope, newsService) {

  $scope.articles = [];
  $scope.topNews = [];

  newsService.getLatestNews().then(function(response) {
    $scope.articles = response.data.articles;
  });

  newsService.getTopNews().then(function(response) {
    $scope.topNews = response.data.articles;
  });

});
