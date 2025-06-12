<template>
  <div class="min-h-screen flex overflow-hidden">

    <!-- LEFT CANVAS -->
    <div class="flex-1 p-12 flex flex-col justify-between bg-gradient-to-b from-helioIndigo via-helioMidnight to-black">
      <h1 class="text-4xl font-serif mb-6 text-helioMist drop-shadow-lg relative">
        Reflective Journal
        <span class="absolute left-0 -bottom-2 inline-block w-10 h-1 bg-helioMist opacity-40 rounded-full"></span>
      </h1>

      <!-- Mic button hint -->
      <div class="flex items-center space-x-4">
        <input
            disabled
            type="text"
            placeholder="Enter your reflection..."
            class="flex-1 px-6 py-4 rounded-3xl bg-white/10 text-slate-200 placeholder-slate-400 focus:outline-none border border-white/10 shadow-inner"
        />
        <button
            class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10 shadow hover:animate-pulseSlow transition"
        >
          🎤
        </button>
      </div>
    </div>

    <!-- RIGHT SIDEBAR -->
    <div class="w-96 p-8 border-l border-white/10 bg-white/5 backdrop-blur-sm flex flex-col space-y-6">
      <!-- 1) Join Session button -->
      <button
          class="w-full flex items-center justify-center px-4 py-3 bg-helioMist text-black font-semibold rounded-2xl shadow hover:opacity-90 transition"
      >
        <!-- replace with your Zoom SVG or .png -->
        <span class="mr-2">🔗</span> Join Session
      </button>

      <!-- 2) Views dropdown (static mock) -->
      <div class="relative">
        <button
            class="w-full flex items-center justify-between px-4 py-3 bg-white/10 text-slate-200 rounded-2xl border border-white/10 shadow-inner"
        >
          Views
          <span class="ml-2">▼</span>
        </button>
        <ul class="mt-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-2 text-slate-200 space-y-1">
          <li class="px-4 py-1 hover:bg-white/10 transition rounded">Reflection Journal</li>
          <li class="px-4 py-1 hover:bg-white/10 transition rounded">System Map</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// no reactive state needed for this static mock
</script>

