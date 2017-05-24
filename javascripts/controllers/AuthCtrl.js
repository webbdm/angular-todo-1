app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory) {

    $scope.auth = {
        // email: "a@a.com",
        // password: "aaaaaa"
    };

    $scope.alerts = [];

    if($location.path() === '/logout'){
    	AuthFactory.logout();
    	$rootScope.user = {};
    	$location.url('/auth');
    }

    let logMeIn = () => {
        AuthFactory.authenticate($scope.auth).then((userCreds) => {
            return UserFactory.getUser(userCreds.uid);
        },(error) => {
            $scope.alerts.push({msg: error.message});
        }).then((user) => {
            $rootScope.user = user;
            $location.url('/items/list');
        }).catch((error) => {
            console.log("getUser error", error);
        });

    };

    $scope.registerUser = () => {
        // new auth
        // adding username
        // login
        AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
            console.log("didRegister", didRegister);
            $scope.auth.uid = didRegister.uid;
            return UserFactory.addUser($scope.auth);
        }).catch((error) => {
            console.log("registerWithEmail error", error);

        }).then((registerComplete) => {
            logMeIn();
        }).catch((error) => {
            console.log("addUser error", error);
        });

    };

    $scope.loginUser = () => {
    		logMeIn();
    };

});
