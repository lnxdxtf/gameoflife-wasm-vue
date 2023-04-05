<template>
  <div>
    <div class="w-screen h-screen p-4 bg-neutral-900">
      <div class="flex justify-center items-center w-full h-full">
        <GameOfLifePre />
      </div>
    </div>
  </div>
</template>

<script>
import GameOfLifePre from './components/GameOfLifePre.vue'
export default {
  components: {
    GameOfLifePre
  }
}
</script>