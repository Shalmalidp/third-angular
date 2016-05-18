function AddController ($scope, $http, URL, $state) {
  
    
  $scope.addFoodItem = function (foodObj) {
    
    $http.post(URL, foodObj).then( (res) => {
      console.log(res);
      
      // Route the User to the list page
      $state.go('list');
    });
    
  }
  
  
}

AddController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddController }

