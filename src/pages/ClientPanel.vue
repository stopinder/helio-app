<template>
  <div class="min-h-screen bg-gradient-to-b from-helioIndigo via-helioMidnight to-black p-12 text-slate-200">

    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-serif text-helioMist drop-shadow-lg">Client Panel</h1>
      <button class="px-5 py-3 bg-helioMist text-black font-semibold rounded-xl shadow hover:opacity-90 transition">
        + Add Client
      </button>
    </div>

    <!-- Client List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="client in clients" :key="client.id"
           class="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-6 shadow flex flex-col justify-between space-y-4 transition hover:scale-[1.02]">

        <!-- Client Name + Supervision Flag -->
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">{{ client.name }}</h2>
          <span v-if="client.flagged" title="Supervision Flag" class="text-helioMist text-lg">⚑</span>
        </div>

        <!-- Last Session Date -->
        <div class="text-sm text-slate-400">Last Session: {{ client.lastSession }}</div>

        <!-- Status + View Button -->
        <div class="flex justify-between items-center mt-2">
          <span class="px-3 py-1 text-xs rounded-full" :class="statusColors[client.status]">
            {{ client.status }}
          </span>

          <!-- Link to Clinician View with client ID -->
          <router-link :to="`/clinician-view/${client.id}`">
            <button class="px-4 py-2 bg-white/10 border border-white/10 rounded-lg shadow hover:bg-white/20 transition">
              View
            </button>
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
const clients = [
  { id: 1, name: "Dr. Lee", lastSession: "June 10, 2025", status: "Active", flagged: true },
  { id: 2, name: "Ms. Alvarez", lastSession: "June 7, 2025", status: "Archived", flagged: false },
  { id: 3, name: "Mr. Chen", lastSession: "June 5, 2025", status: "Active", flagged: false },
  { id: 4, name: "Ms. Patel", lastSession: "June 1, 2025", status: "Active", flagged: true },
  { id: 5, name: "Mr. Johnson", lastSession: "May 28, 2025", status: "Archived", flagged: false }
]

const statusColors = {
  Active: "bg-green-300 text-green-900",
  Archived: "bg-gray-300 text-gray-900"
}
</script>

