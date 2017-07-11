app.service('newsService', function($http) {

    this.getLatestNews = function() {
      return $http.get(_config.url + "&sortby=new");
    }

    this.getTopNews = function() {
      return $http.get(_config.url  + "&sortby=top");
    }

  });
