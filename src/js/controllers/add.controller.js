function AddController ($scope, $http, URL) {
  
    
  $scope.addFoodItem = function (foodObj) {
    
    $http.post(URL, foodObj).then( (res) => {
      console.log(res);
      
      // Clear the form
      $scope.food = {};   
    });
    
  }
  
  
}

AddController.$inject = ['$scope', '$http', 'URL'];
export { AddController }

