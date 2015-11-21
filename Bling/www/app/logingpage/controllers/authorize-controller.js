var module = angular.module("app.loginpage");

module.controller("authorize-controller", function($scope, $cordovaOauth) {

    $scope.authorizationResult = {
        successs: false,
        message: "",
        token: ""
    };

    $scope.authenticate = function() {
        $cordovaOauth.google("809124329049-m2c5suoop2pqg5m063lijppf4klqvvun.apps.googleusercontent.com", ["email"])
            .then(function (result) {
                $scope.authorizationResult = { successs: true, message: "Succesfully authorized", token: JSON.stringify(result) };
                console.log("Response Object -> " + JSON.stringify(result));
                
            }, function (error) {
                $scope.authorizaitonResult = {success: false,message: "Sorry... Unable to authorize"}
                console.log("Error -> " + error);
            });
    };
});