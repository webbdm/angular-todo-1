app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){
	let getItemList = () => {
		let itemz = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
				.then((fbItems) => {
					let itemCollection = fbItems.data;
          Object.keys(itemCollection).forEach((key) => {
            itemCollection[key].id=key;
            itemz.push(itemCollection[key]);
          });
          resolve(itemz);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};

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

	return {getItemList:getItemList, postNewItem:postNewItem};


});