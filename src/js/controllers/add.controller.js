function AddController ($scope, $http, URL, $state) {
  
  let vm = this;
  vm.addFoodItem = addFoodItem;
    
  function addFoodItem (foodObj) {  
    $http.post(URL, foodObj).then( (res) => {
      console.log(res);
      
      // Route the User to the list page
      $state.go('list');
    });
  }  
}

AddController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddController }

