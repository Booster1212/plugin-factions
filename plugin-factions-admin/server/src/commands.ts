import * as Athena from '@AthenaServer/api/index.js';
import { FactionAdminFuncs } from './funcs.js';
import { AdminCommandPermissions } from '@AthenaPlugins/plugin-factions/shared/config.js';

export function init() {
    Athena.systems.messenger.commands.register(
        'fadmin',
        '/fadmin - Open faction panel of faction.',
        AdminCommandPermissions,
        FactionAdminFuncs.openFactionList,
    );
}
