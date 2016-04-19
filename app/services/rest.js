var host = 'localhost:';

var port = 8080;
var url = 'http://localhost:8080/api/';
var restServices = angular.module('rest', [])

restServices.service('restService', ['$http', function ($http) {

    $http.defaults.headers.common['X-Auth-Token'] = 'skift-mig';

    this.start = function () {
        return $http.post(url + "start");
    };

    this.stop = function () {
        return $http.post(url + "stop");
    };

    this.bear = function () {
        return $http.get(url + "bear");
    };

    this.status = function () {
        return $http.get(url + "status");
    };

    this.getWeather = function () {
        return $http.get(url + "weather");
    };

    this.getWeatherFromPos = function (position) {
        return $http.get(url + "waether/" + position);
    };


}])