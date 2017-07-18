app.service('arsTechnicaService', function ($http) {

  this.getTopNews = function () {
    return $http.get("https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=9240dca1a30e496abc175b508f2d633f");
  }

  this.getLatestNews = function () {
    return $http.get("https://newsapi.org/v1/articles?source=engadget&sortBy=latest&apiKey=9240dca1a30e496abc175b508f2d633f");
  }
});
