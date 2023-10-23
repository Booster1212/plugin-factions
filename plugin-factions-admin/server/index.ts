import alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import * as FactionAdminCommands from './src/commands.js';

import { FactionAdminFuncs } from './src/funcs.js';

const PLUGIN_NAME = 'Athena Factions Admin';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    FactionAdminCommands.init();
    await FactionAdminFuncs.init();

    alt.log(`~lg~CORE ==> ${PLUGIN_NAME} was Loaded`);
});
