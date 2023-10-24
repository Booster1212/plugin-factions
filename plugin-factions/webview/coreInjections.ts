// @ts-nocheck - Required to ignore weird pathing issues.
import { defineAsyncComponent } from 'vue';
import BankPaychecks from '../../plugin-factions-paycheck/components/BankPaychecks.vue';
import Paycheck from '../../plugin-factions-paycheck/components/Paychecks.vue';

// Not recommended to modify this file unless you are removing some core plugins for factions.
export const FactionCorePageInjections = {
    actions: {
        BankPaychecks: defineAsyncComponent(BankPaychecks),
        //DefaultActions: defineAsyncComponent(() => import('../../gp-factions-defaults/components/DefaultActions.vue')),
    },
    bank: {
        BankPaychecks: defineAsyncComponent(BankPaychecks),
    },
    members: {},
    rankings: {},
    settings: {
        Paychecks: defineAsyncComponent(Paycheck),
        /*DefaultSettings: defineAsyncComponent(
            () => import('../../gp-factions-defaults/components/DefaultSettings.vue'),
        ),*/
        //Storage: defineAsyncComponent(() => import('../../gp-faction-storage/components/GPFactionStorage.vue')),
    },
};
