<template>
  <div class="min-h-screen bg-gradient-radial from-helioIndigo via-helioMidnight to-black text-slate-200">
    <nav class="flex justify-end p-6 space-x-6 text-lg">
      <router-link to="/client-panel">Client Panel</router-link>

      <router-link to="/clinician-view/1">Clinician View</router-link>
      <router-link to="/system-map">System Map</router-link>

      <router-link to="/client-view" class="hover:underline">Client View</router-link>
      <router-link to="/reflective-chat" class="hover:underline">Reflective Chat</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

