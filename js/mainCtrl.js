app.controller('mainCtrl', function($scope){
	$scope.friends = ["Nirvon", "Garrett", "Corinne", "Madelyn"];
	$scope.addFriend = function(name) {
		$scope.friends.push(name);
	}
});