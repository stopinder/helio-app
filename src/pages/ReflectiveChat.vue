<template>
  <div class="min-h-screen flex overflow-hidden">

    <!-- LEFT CANVAS: header + mic button -->
    <div class="flex-1 p-12 flex flex-col justify-between bg-gradient-to-b from-helioIndigo via-helioMidnight to-black">
      <h1 class="text-4xl font-serif mb-6 text-helioMist drop-shadow-lg relative">
        Reflective Journal
        <span class="absolute left-0 -bottom-2 inline-block w-10 h-1 bg-helioMist opacity-40 rounded-full"></span>
      </h1>

      <!-- Mic button alone at bottom -->
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

    <!-- RIGHT SIDEBAR (unchanged) -->
    <div class="w-96 p-8 border-l border-white/10 bg-white/5 backdrop-blur-sm">
      <h2 class="text-2xl font-semibold text-helioMist mb-6">Resources</h2>

      <section class="mb-8">
        <h3 class="text-lg font-semibold text-slate-300 mb-2">Active Parts</h3>
        <ul class="space-y-2 text-slate-200">
          <li v-for="part in activeParts" :key="part">• {{ part }}</li>
        </ul>
      </section>

      <section class="mb-8">
        <h3 class="text-lg font-semibold text-slate-300 mb-2">Grounding</h3>
        <ul class="space-y-2 text-slate-200">
          <li>Breathwork</li>
          <li>Binaural Beats</li>
          <li>Guided Meditations</li>
          <li>EMDR Bilateral Audio</li>
        </ul>
      </section>

      <section>
        <h3 class="text-lg font-semibold text-slate-300 mb-2">Reflection Prompts</h3>
        <p class="text-slate-200 text-sm leading-relaxed">
          “Notice where you feel this in your body.”<br />
          “Ask the part what it needs.”<br />
          “What would you like your therapist to know?”
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
const activeParts = ['Protector', 'Exile', 'Self']
</script>


