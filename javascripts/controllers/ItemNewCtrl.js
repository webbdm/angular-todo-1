app.controller("ItemNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, ItemFactory) {

	$scope.addNewItem = () => {
		$scope.newTask.isCompleted = false;
		$scope.newTask.uid = $rootScope.user.uid;
		ItemFactory.postNewItem($scope.newTask).then(() => {
			$scope.newTask = {};
			$location.url("/items/list");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});
