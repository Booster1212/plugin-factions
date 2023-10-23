import { FactionActions } from './actions.js';
import { FactionFuncs } from './funcs.js';
import { FactionHandler } from './handler.js';
import { FactionPlayerFuncs } from './playerFuncs.js';

export const factionFuncs = {
    actions: FactionActions,
    handler: FactionHandler,
    player: FactionPlayerFuncs,
    system: FactionFuncs,
};
