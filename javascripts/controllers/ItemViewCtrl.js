app.controller("ItemViewCtrl", function($routeParams, $scope, ItemFactory) {
	$scope.selectedItem = {};

	ItemFactory.getSingleItem($routeParams.id).then((results) => {
		console.log("results", results);
		$scope.selectedItem = results.data;
	}).catch((error) => {
		console.log("getSingleItem", error);
	});


});