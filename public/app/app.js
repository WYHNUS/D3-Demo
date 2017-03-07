var app = angular.module("d3Demo", [
	"ngRoute"
]);

app.config(["$routeProvider", "$locationProvider",
	function($routeProvider, $locationProvider, $route) {
		$routeProvider.
			when("/", {
				templateUrl: "/app/components/chartDisplay/chartDisplayPage.html",
				controller: "chartDisplayController"
			}).
			otherwise({
				redirectTo: "/"
			});
	}]);