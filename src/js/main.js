
import angular from 'angular';
import 'angular-ui-router';


// Import Our Controllers
import { ListController }   from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';
import { AddController }    from './controllers/add.controller';

// Import Our Configuration
import { config } from './config';

const url = 'https://secret-forest-21470.herokuapp.com/collections/551a1x4ae8x55a4d5s4x54a5d4';


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