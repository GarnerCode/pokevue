<template>
  <div class="home">
    <Loading></Loading>
    <Modal v-if="globalStore.getActivePokemon"></Modal>
    <Filters></Filters>
    <PokeList 
      :pokeList="globalStore.getPokemonList">
    </PokeList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGlobalStore } from '@/store/global.store';
import PokeList from '@/components/PokeList.vue';
import Filters from '@/components/Filters.vue';
import Loading from '@/components/Loading.vue';
import Modal from '@/components/Modal.vue';
import { generations } from '@/constant/generations';

export default defineComponent({
  name: 'HomeView',
  components: {
    PokeList,
    Filters,
    Loading,
    Modal,
  },
  data() {
    return {
      globalStore: useGlobalStore(),
      limit: generations.gen1,
    }
  },
  watch: {
    'globalStore.getActivePokemon': {
      handler: function (val) {
        this.modalActive();
      }
    }
  },
  mounted() {
    this.globalStore.fetchPokemonList(this.limit);
    this.globalStore.fetchPokemon('gengar');
  },
  methods: {
    modalActive(): void {
      console.log('checking?');
      if (this.globalStore.getActivePokemon) {
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    },
  }
});
</script>
