<template>
  <div class="min-h-screen flex overflow-hidden">

    <!-- LEFT CANVAS (mirror Reflection Journal) -->
    <div class="flex-1 p-12 flex flex-col justify-between bg-gradient-to-b from-helioIndigo via-helioMidnight to-black">
      <h1 class="text-4xl font-serif mb-6 text-helioMist drop-shadow-lg relative">
        Reflective Journal
        <span class="absolute left-0 -bottom-2 inline-block w-10 h-1 bg-helioMist opacity-40 rounded-full"></span>
      </h1>
      <div class="flex items-center space-x-4">
        <input
            disabled
            type="text"
            placeholder="Enter your reflection..."
            class="flex-1 px-6 py-4 rounded-3xl bg-white/10 text-slate-200 placeholder-slate-400 border border-white/10 shadow-inner focus:outline-none"
        />
        <button
            class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10 shadow hover:animate-pulseSlow transition"
        >🎤</button>
      </div>
    </div>

    <!-- RIGHT SIDEBAR -->
    <div class="w-96 p-6 border-l border-white/10 bg-white/5 backdrop-blur-sm flex flex-col space-y-6">
      <!-- 1) Client selector + Settings -->
      <div class="flex items-center space-x-2">
        <div class="relative flex-1">
          <button
              class="w-full flex items-center justify-between px-4 py-3 bg-white/10 text-slate-200 rounded-xl border border-white/10 shadow-inner"
          >
            {{ currentClient.name }} <span>▼</span>
          </button>
          <!-- dropdown mock -->
          <!--
          <ul class="absolute mt-1 w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-1 text-slate-200">
            <li class="px-4 py-1 hover:bg-white/10">Dr. Lee</li>
            <li class="px-4 py-1 hover:bg-white/10">Add New Client…</li>
            <li class="px-4 py-1 hover:bg-white/10">Manage Clients…</li>
          </ul>
          -->
        </div>
        <button
            class="p-3 bg-white/10 text-slate-200 rounded-lg border border-white/10 shadow-inner hover:bg-white/20 transition"
            title="Manage clients & facilities"
        >⚙️</button>
      </div>

      <!-- 2) Start Session -->
      <button
          class="w-full flex items-center justify-center px-4 py-3 bg-helioMist text-black font-semibold rounded-xl shadow hover:opacity-90 transition"
      >
        ▶ Start Session
      </button>

      <!-- 3) Views dropdown -->
      <div class="relative">
        <button
            class="w-full flex items-center justify-between px-4 py-3 bg-white/10 text-slate-200 rounded-xl border border-white/10 shadow-inner"
        >
          Views <span>▼</span>
        </button>
        <!-- dropdown mock -->
        <!--
        <ul class="absolute mt-1 w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-1 text-slate-200">
          <li class="px-4 py-1 hover:bg-white/10">Reflection Journal</li>
          <li class="px-4 py-1 hover:bg-white/10">System Map</li>
        </ul>
        -->
      </div>

      <!-- 4) Active Parts + Tag/Archetype -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold text-slate-300">Active Parts</h3>
          <div class="flex space-x-2">
            <button class="p-1 bg-white/10 rounded-full border border-white/10 shadow-inner hover:bg-white/20" title="Add tag">＋</button>
            <button class="p-1 bg-white/10 rounded-full border border-white/10 shadow-inner hover:bg-white/20" title="Add archetype">★</button>
          </div>
        </div>
        <ul class="space-y-1 text-slate-200">
          <li v-for="part in activeParts" :key="part">
            <span :class="partColors[part]" class="px-2 py-1 rounded-full text-sm">{{ part }}</span>
          </li>
        </ul>
      </div>

      <!-- 5) Prompts -->
      <div>
        <h3 class="text-lg font-semibold text-slate-300 mb-2">Prompts</h3>
        <p class="text-slate-200 text-sm leading-relaxed">
          “Notice where you feel this in your body.”<br />
          “Ask the part what it needs.”<br />
          “What would you like your therapist to know?”
        </p>
      </div>

      <!-- 6) Resources -->
      <div class="mt-auto">
        <h3 class="text-lg font-semibold text-slate-300 mb-2">Resources</h3>
        <ul class="space-y-1 text-slate-200">
          <li>– Breathwork</li>
          <li>– Binaural Beats</li>
          <li>– Guided Meditations</li>
          <li>– EMDR Audio</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const clientId = route.params.clientId

console.log('Loaded Client ID:', clientId)

const currentClient = { name: 'Select Client' }

const activeParts = ['Protector', 'Exile', 'Self']

const partColors = {
  Protector: 'bg-blue-200 text-blue-800',
  Exile:     'bg-purple-200 text-purple-800',
  Self:      'bg-green-200 text-green-800',
}
</script>


