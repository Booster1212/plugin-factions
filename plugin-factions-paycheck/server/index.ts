import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import { FactionPaycheckSystem } from './src/system.js';

const PLUGIN_NAME = 'Athena Factions - Paychecks';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    FactionPaycheckSystem.init();
    alt.log(`~lg~CORE ==> ${PLUGIN_NAME} was Loaded`);
});
