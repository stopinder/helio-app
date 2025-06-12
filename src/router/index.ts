import { createRouter, createWebHistory } from 'vue-router';
import SystemMap from '../pages/SystemMap.vue';

import ClinicianView from '../pages/ClinicianView.vue';
import ClientView from '../pages/ClientView.vue';
import ReflectiveChat from '../pages/ReflectiveChat.vue';
import ClientPanel from '../pages/ClientPanel.vue';  // <-- your new import

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/clinician-view' },
        { path: '/clinician-view/:clientId', component: ClinicianView },

        { path: '/client-view', component: ClientView },
        { path: '/reflective-chat', component: ReflectiveChat },
        { path: '/client-panel', component: ClientPanel },  // <-- your new route
        { path: '/system-map', component: SystemMap }

    ]
});

export default router;
