
function SingleController ($scope, $http, URL, $stateParams, $state) {
    
  init();
  
  function init () {
    $http.get(URL + $stateParams.itemId).then( (res) => {
      $scope.singleItem = res.data;
    });
  }
  
  $scope.deleteItem = function (itemId) { 
    $http.delete(URL + itemId).then( (res) => { 
      $state.go('list'); 
    });
  }
  
}

SingleController.$inject = ['$scope', '$http', 'URL', '$stateParams', '$state'];
export { SingleController };