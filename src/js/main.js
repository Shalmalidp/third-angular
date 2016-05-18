
import angular from 'angular';
import 'angular-ui-router';


// Import Our Controllers
import { ListController }   from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';
import { AddController }    from './controllers/add.controller';

// Import Our Configuration
import { config } from './config';


// Start Angular
angular
  // Setter for a module (register)
  .module('app', ['ui.router'])
  // Register Our Configuration
  .config(config)
  // Register Our Controllers
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('AddController', AddController)
;