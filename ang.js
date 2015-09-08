var app = angular.module("hithere", []);
app.controller("HelloController", function HelloController($scope){
	$scope.message = "Hello World!";
	$scope.printthis = function() {
		console.log($scope.message);
		$scope.message_visible = true;
	}
});
