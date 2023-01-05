<script setup lang="ts">
import { ref } from "vue";
import { useGameState } from "../state";
import { useUtils } from "../composables/utils";
const state = useGameState();
const { getGridSize } = useUtils();
const gridSize = getGridSize();
</script>

<template>
  <div>
    <table class="base-grid">
      <tr class="grid-row" v-for="row in state.base.grid">
        <td
          class="grid-cell"
          v-for="cell in row"
          :style="{
            width: gridSize + 'px',
            height: gridSize + 'px',
          }"
          :class="{ available: cell === 1 }"
        ></td>
      </tr>
    </table>
    <div class="storage"></div>
  </div>
</template>

<style scoped>
.base-grid {
  border-collapse: collapse;
}
.grid-cell.available {
  border: 1px solid black;
  padding: 0;
}
</style>
