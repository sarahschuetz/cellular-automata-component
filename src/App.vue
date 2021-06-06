<template>
  <div id="app">
    <div>Rule: <input type="number" v-model.number="rule"></div>
    <div>Width: <input type="number" v-model.number="width"></div>
    <div>Height: <input type="number" v-model.number="height"></div>
    <div>Pixel-Width: <input type="number" v-model.number="pixelWidth"></div>
    <div>Pixel-Height: <input type="number" v-model.number="pixelHeight"></div>
    <div>Background-Color: <input type="text" v-model="backgroundColor"></div>
    <div>Pixel-Color: <input type="text" v-model="pixelColor"></div>
    <div>Render-Type: <input type="text" v-model="renderType"></div>
    <cellular-automata-pattern
      :rule="rule"
      :width="width"
      :height="height"
      :pixel-width="pixelWidth"
      :pixel-height="pixelHeight"
      :background-color="backgroundColor"
      :pixel-color="pixelColor"
      :render-type="renderType"
    />
  </div>
</template>

<script>
import CellularAutomataPattern from './components/CellularAutomataPattern.vue'
export default {
  name: 'App',

  components: {
    CellularAutomataPattern,
  },

  data() {
      return {
        rule: 2,
        width: 500,
        height: 300,
        pixelWidth: 10,
        pixelHeight: 10,
        backgroundColor: '#FFF',
        pixelColor: '#000',
        renderType: 'canvas',
      }
  },
}
</script>

<style>
canvas, svg {
    border: solid 1px #000;
}
</style>