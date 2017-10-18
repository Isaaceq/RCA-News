app.service('newsService', function ($http) {

  this.getLatestNews = function () {
    return $http.get("https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=");
  }

  this.getTopNews = function () {
    return $http.get("https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=");
  }

});
