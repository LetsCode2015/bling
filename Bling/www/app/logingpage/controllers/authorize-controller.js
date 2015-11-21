var module = angular.module("app.loginpage");

module.controller("authorize-controller", function($scope,$state, $cordovaOauth,$http) {

    $scope.authorizationResult = {
        successs: false,
        message: "",
        token: ""
    };

    $scope.authenticate = function() {
        $cordovaOauth.google("809124329049-m2c5suoop2pqg5m063lijppf4klqvvun.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"])
            .then(function(result) {
                console.log("Response Object -> " + JSON.stringify(result));

                var accessToken = result.access_token;
                if (accessToken) {
                    $http.get("https://www.googleapis.com/plus/v1/people/me", { params: { access_token: accessToken, fields: "id,name", format: "json" } }).then(function(result) {
                        $scope.profileData = result.data;
                        localStorage.logedInUser = result.data.name;
                        localStorage.logedInUser.googleId = result.data.id;
                        localStorage.accessToken = accessToken;

                        $scope.authorizationResult = {
                            sucess: true, message: "Sucessfully loged in.", token: result.access_token
                        }
                        console.log("Response Object -> " + result.data);
                        var returnedData = result.data;
//                        $userService.sign(returnedData.name.givenName + ' ' + returnedData.name.familyName, returnedData.id);
                        $state.go('app.dashboard');
                    }, function(error) {
                        console.log("There was a problem getting your profile.  Check the logs for details.");
                        console.log(error);
                    });
                } else {
                    console.log("Not signed in");
                    $scope.authorizationResult = {
                        successs: false,
                        message: "Unable to provide access token from google service",
                        token: ""
                    };
                }

            });
    };
});