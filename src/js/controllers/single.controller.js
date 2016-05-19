
function SingleController ($http, URL, $stateParams, $state) {
    let vm = this;
  init();
  
  function init () {
    $http.get(URL + $stateParams.itemId).then( (res) => {
      vm.singleItem = res.data;
    });
  }
  
  vm.deleteItem = function (itemId) { 
    $http.delete(URL + itemId).then( (res) => { 
      $state.go('list'); 
    });
  }
  
}

SingleController.$inject = ['$http', 'URL', '$stateParams', '$state'];
export { SingleController };