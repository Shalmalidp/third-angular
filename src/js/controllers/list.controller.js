function ListController ($http, URL) {

//dont need $scope anymore as we have vm as an instance of the controller.
  let vm = this;

  init();

  function init () {
    
    $http.get(URL).then( (res) => {
      vm.allFoods = res.data;
    });   
    
  }

}

ListController.$inject = ['$http', 'URL'];
export { ListController };