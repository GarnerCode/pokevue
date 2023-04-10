<template>
  <Header></Header>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {}
  },
  components: {
    Header,
  }
});
</script>


<style lang="scss">
  @import '@/assets/styles.scss';

  :root {
    --color-white: #F1F1F1;
    --color-black: #000000;
    --color-gray: #adadad;
    --color-red: #FF1C1C;
    --border-radius: 5px;
  }
  #app {
    background-color: var(--color-white);
    padding: 1rem 0;
  }
  .type {
    color: white;
    text-transform: capitalize;
    text-align: center;
    width: 5rem;
    border-radius: 100px;
  }
  .normal {
    background-color: #A8A878;
  }
  .fire {
    background-color: #F08030;
  }
  .fighting {
    background-color: #C03028;
  }
  .water {
    background-color: #6890F0;
  }
  .flying {
    background-color: #A890F0;
  }
  .grass {
    background-color: #78C850;
  }
  .poison {
    background-color: #A040A0;
  }
  .electric {
    background-color: #F8D030;
  }
  .ground {
    background-color: #E0C068;
  }
  .psychic {
    background-color: #F85888;
  }
  .rock {
    background-color: #B8A038;
  }
  .ice {
    background-color: #98D8D8;
  }
  .bug {
    background-color: #A8B820;
  }
  .dragon {
    background-color: #7038F8;
  }
  .ghost {
    background-color: #705898;
  }
  .dark {
    background-color: #705848;
  }
  .steel {
    background-color: #B8B8D0;
  }
  .fairy {
    background-color: #EE99AC;
  }
</style>
