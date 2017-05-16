app.controller("ItemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
  $scope.items = [];



	let getItems = () => {
		getItemList().then((itemz) => {
			$scope.items = itemz;
		}).catch((error) => {
			console.log("get Error", error);
		});
	};

	getItems();


	let postNewItem = (newItem) => {
		return $q((resolve, reject) =>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
				.then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	$scope.addNewItem = () => {
		$scope.newTask.isCompleted = false;
		postNewItem($scope.newTask).then(() => {
			$scope.newTask = {};
			getItems();
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});

