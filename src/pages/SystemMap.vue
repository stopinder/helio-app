<template>
  <div class="min-h-screen bg-gradient-to-b from-helioIndigo via-helioMidnight to-black p-12 text-slate-200">

    <!-- Header -->
    <h1 class="text-4xl font-serif mb-8 text-helioMist drop-shadow-lg">System Map</h1>

    <!-- Mock System Map -->
    <div class="relative w-full h-[600px] bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg">

      <!-- Center node (Self) -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-300 text-green-900 px-6 py-3 rounded-full shadow-lg">
        Self
      </div>

      <!-- Protector -->
      <div class="absolute top-20 left-1/2 transform -translate-x-1/2 bg-blue-200 text-blue-800 px-4 py-2 rounded-full shadow">
        Protector
      </div>

      <!-- Exile -->
      <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-purple-200 text-purple-800 px-4 py-2 rounded-full shadow">
        Exile
      </div>

      <!-- Additional floating nodes (for visual richness) -->
      <div class="absolute top-40 left-1/4 bg-pink-200 text-pink-800 px-4 py-2 rounded-full shadow">
        Anxiety
      </div>

      <div class="absolute bottom-32 right-1/4 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full shadow">
        Inner Critic
      </div>

    </div>

  </div>
</template>

<script setup>
// No data needed yet for investor mockup
</script>
