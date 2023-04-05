<template>
  <div>
    <div class="w-full h-full flex flex-col items-center gap-2">
      <span class="text-2xl font-bold text-white">GAME OF LIVE</span>
      <input v-model="width" type="number" placeholder="Width Universe"
        class="w-full bg-black bg-opacity-30 text-white rounded-md px-2 py-1">
      <input v-model="height" type="number" placeholder="Height Universe"
        class="w-full bg-black bg-opacity-30 text-white rounded-md px-2 py-1">
      <span @click="start = !start"
        class="w-full flex items-center justify-center cursor-pointer rounded-md p-3 bg-red-500 text-white">{{ start ?
          'STOP' : 'START' }}</span>

      <pre v-if="start" id="game-of-live-pre"
        class="w-fit h-fit rounded-md bg-neutral-700 text-xs text-cyan-500 p-1">{{ universeRender }}</pre>
    </div>
  </div>
</template>
<script>
import gameoflifeInit from "../gameoflife.helper.js"
export default {
  mixins: [gameoflifeInit]
}
</script>