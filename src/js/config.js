function config ($stateProvider, $urlRouterProvider) {
  
  // If not `state` is matched, go to the home page
  $urlRouterProvider.otherwise('/');
  
  // Define our app states
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'templates/list.tpl.html',
      controller: 'ListController'
    })
    .state('single', {
      url: '/single/:itemId',
      
      templateUrl: 'templates/single.tpl.html',
      controller: 'SingleController'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })
  ;
  
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };