
angular.module('mainController', [])

    .controller('mainCtrl', ['$scope', 'restService', function ($scope, restService) {
        console.log('bear me');
        var maxWindSpeed = 3;


        $scope.start = function () {
            console.log("starting");
            restService.start()
                .then(function (response) {
                    console.log(response);
                    $scope.running = true;


                }), function (error) {
                    console.log(error);
                    $scope.running = false;
                }
            $scope.getWaether()
        }

        $scope.stop = function () {
            console.log("stopping");
            restService.start()
                .then(function (response) {
                    console.log(response);
                    $scope.running = false;


                }), function (error) {
                    console.log(error);
                    $scope.running = true;
                }
            $scope.getWaether()
        }


        $scope.status = function () {
            console.log("getting status");
            restService.status()
                .then(function (response) {
                    $scope.running = response.data.msg;

                }), function (error) {
                    console.log(error);
                }
        }



        $scope.getWaether = function () {
            restService.getWeather()
                .then(function (response) {
                    console.log(response);
                    $scope.windSpeed = response.data.wind.speed
                    $scope.icon = response.data.weather[0].id
                    $scope.temp = response.data.main.temp
                    $scope.des = response.data.weather[0].description

                    if (response.data.wind.speed > maxWindSpeed && !$scope.running) {

                        $scope.isItSafe = false;
                    }
                    else {
                        $scope.isItSafe = true;

                    }

                }), function (error) {
                    console.log(error);

                }
        }

        $scope.getWaether()
        $scope.status()


    }]);
