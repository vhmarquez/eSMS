var app = angular.module('kraken', []);

app.controller('championList', ['$http', function($http){

  var self = this;
  self.champions = [];
  self.championInfo = [];

  // Fetch Champions
  var fetchChampions = function(){
    return $http.get('https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=670c3ae3-bd8c-4082-965c-d70c20c1ea67').then(function(response){
      self.champions = response.data;
    }, function(errResponse){
      console.error('Error while fetching contacts');
    });
  };

  fetchChampions();

}]);
