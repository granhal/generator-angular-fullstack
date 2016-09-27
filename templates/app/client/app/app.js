'use strict';
import 'zone.js/dist/zone';
import 'reflect-metadata';

import { upgradeAdapter } from './upgrade_adapter';
import appName from './app.module';

upgradeAdapter.bootstrap(document.body, [appName], {strictDi: true});

upgradeAdapter.upgradeNg1Provider('$rootScope');
upgradeAdapter.upgradeNg1Provider('$http');
