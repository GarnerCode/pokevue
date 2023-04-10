<template>
    <div class="poke-list" v-if="globalStore.getFilteredPokemon.length">
        <PokeCard 
            v-for="(pokemon, index) of globalStore.getFilteredPokemon" 
            :pokemon="pokemon"
            :key="index">
        </PokeCard>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/global.store';
    import PokeCard from './PokeCard.vue';

    export default defineComponent({
        name: 'PokeList',
        components: {
            PokeCard,
        },
        data() {
            return {
                globalStore: useGlobalStore(),
            }
        },
    });
</script>

<style lang="scss">
    .poke-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>