var module = angular.module("app", ["ngRoute"]);

module.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
    	templateUrl: "pages/home.html",
    })
    .when("/about", {
    	templateUrl: "pages/about_us.html",
    })
    .when("/solutions", {
    	templateUrl: "pages/solutions.html"
    })
    .when("/technology", {
    	templateUrl: "pages/technology.html"
    })
    .when("/careers", {
    	templateUrl: "pages/careers.html"
    })
    .when("/contacts", {
    	templateUrl: "pages/contacts.html"
    })
    .otherwise({
    	templateUrl: "index.html"
    });
});

module.factory("mySend", function($http) {
	var send = {};

	send.sendToServer = function(theData) {
		var promise = $http({ method: "POST", url: "/handler", data: theData });
		return promise;
	}
	return send;
});

module.controller("myCtrl", function($scope, mySend) {
    $scope.email = {};

    $scope.sendEmail = function() {
    	var promise = mySend.sendToServer($scope.email);

    	promise.success(function(data) {
    		if (data.errors) {
    			console.log(data.errors);
    		}
    		else {
    			$scope.message = data.message;
    			console.log($scope.message);

    		}

            $scope.email.firstName = "";
            $scope.email.lastName = "";
            $scope.email.email = "";
            $scope.email.select = "";
            $scope.email.comments = "";
    	});
    }
});