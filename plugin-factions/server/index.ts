import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import { FactionActions } from './src/actions.js';
import { FactionCommands } from './src/commands.js';
import { FactionFuncs } from './src/funcs.js';
import { FactionHandler } from './src/handler.js';
import {FACTION_EVENTS} from "@AthenaPlugins//athena-plugin-factions/shared/factionEvents.js";

const PLUGIN_NAME = 'Athena Factions';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    await FactionHandler.init();
    await FactionFuncs.init();
    await FactionActions.init();
    FactionCommands.init();

    alt.onClient(FACTION_EVENTS.PROTOCOL.OPEN, FactionFuncs.factionOpen);

    alt.log(`~lg~CORE ==> ${PLUGIN_NAME} was Loaded`);
});
