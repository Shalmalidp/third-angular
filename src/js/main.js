
import angular from 'angular';
import 'angular-ui-router';


// Import Our Controllers
import { ListController }   from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';
import { AddController }    from './controllers/add.controller';

// Import Our Configuration
import { config } from './config';

const url = 'https://secret-forest-21470.herokuapp.com/collections/angular34343fg5tfgw32/';


// Start Angular
angular
  // Setter for a module (register)
  .module('app', ['ui.router'])
  // Register Our Configuration
  .config(config)
  // App URL Constant
  .constant('URL', url)
  // Register Our Controllers
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('AddController', AddController)
;