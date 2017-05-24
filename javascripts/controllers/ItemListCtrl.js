app.controller("ItemListCtrl", function($rootScope, $scope, ItemFactory) {
    $scope.items = [];

    let getItems = () => {
        console.log($rootScope.user);
        ItemFactory.getItemList($rootScope.user.uid).then((itemz) => {
            $scope.items = itemz;
        }).catch((error) => {
            console.log("get Error", error);
        });
    };

    getItems();

    $scope.deleteItem = (id) => {
        ItemFactory.deletz(id).then(() => {
            getItems();
        }).catch((error) => {
            console.log("deleteItem error", error);
        });
    };

    $scope.inputChange = (item) => {
        ItemFactory.editItem(item).then(() => {}).catch((error) => {
            console.log("inputChange error", error);
        });
    };

});
