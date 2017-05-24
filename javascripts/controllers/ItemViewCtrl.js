app.controller("ItemViewCtrl", function($routeParams, $scope, ItemFactory, ToolFactory) {
    $scope.selectedItem = {};

    ItemFactory.getSingleItem($routeParams.id).then((results) => {
        console.log("results", results);
        $scope.selectedItem = results.data;
    }).catch((error) => {
        console.log("getSingleItem", error);
    });

    ToolFactory.getToolList($routeParams.id).then(() => {
    	$scope.tools = results;
    }).catch((error) => {
    	console.log("error in getToolList", error);
    });


});
