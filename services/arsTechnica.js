app.service('arsTechnicaService', function($http) {

  this.getTopNews = function() {
    return $http.get('_config.url');
  }

  this.getLatestNews = function() {
    return $http.get(' _config.url');
    }


  });
