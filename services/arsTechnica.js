app.service('arsTechnicaService', function ($http) {

  this.getTopNews = function () {
    return $http.get("https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=");
  }

  this.getLatestNews = function () {
    return $http.get("https://newsapi.org/v1/articles?source=engadget&sortBy=latest&apiKey=");
  }
});
