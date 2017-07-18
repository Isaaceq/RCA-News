app.service('newsService', function ($http) {

  this.getLatestNews = function () {
    return $http.get("https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=9240dca1a30e496abc175b508f2d633f");
  }

  this.getTopNews = function () {
    return $http.get("https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9240dca1a30e496abc175b508f2d633f");
  }

});
