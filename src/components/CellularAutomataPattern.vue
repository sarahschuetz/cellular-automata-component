<template>
  <div>
    <canvas
      ref="element"
      v-if="renderType === 'canvas'"
      :width="width"
      :height="height"
      :style="{
          backgroundColor: backgroundColor
      }"
    />
    <svg ref="element" v-else-if="renderType === 'svg'" />
    <div>Rule: {{ rule }}</div>
  </div>
</template>

<script>
  import Pattern from '../algorithm/Pattern';

  export default {
    name: 'CellularAutomataPattern',
    
    props: {
        rule: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            default: 500,
        },
        height: {
            type: Number,
            default: 300,
        },
        pixelWidth: {
            type: Number,
            default: 10,
        },
        pixelHeight: {
            type: Number,
            default: 10,
        },
        backgroundColor: {
            type: String,
            default: '#FFF',
        },
        pixelColor: {
            type: String,
            default: '#FFF',
        },
        renderType: {
            validator: function (value) {
                return [
                    'canvas',
                    'svg',
                ].indexOf(value) !== -1
            },
            default: 'canvas',
        }
    },

    data() {
        return {
            pattern: null,
        }
    },

     watch: {
        pixelColor: function () {
            this.setPattern();
        }
    },

    mounted() {
        this.initSize();
        this.setPattern();
    },

    updated () {
        console.log('update');
        this.setPattern();
    },

    methods: {
        initSize () {
            if (this.$refs.element) {
                this.$refs.element.width = this.width;
                this.$refs.element.height = this.height;
            }
        },
        setPattern () {
            const context = this.$refs.element.getContext('2d');

            context.clearRect(0, 0, this.$refs.element.width, this.$refs.element.height);

            this.pattern = new Pattern({
                rule: this.rule,
                fillStyle: this.pixelColor,
                // pixelSize: this.pixelSize,
            });
            this.pattern.init(
                this.$refs.element,
                context,
            );
            this.pattern.runAnimationAlgorithm();
        },
    },
  }
</script>
