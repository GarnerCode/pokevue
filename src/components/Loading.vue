<template>
    <div class="loading" v-if="loading">
        <img class="spinner" src="@/assets/images/pokeball.svg">
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/global.store';
    import { generations } from '@/constant/generations';

    export default defineComponent({
        name: 'Loading',
        data() {
            return {
                globalStore: useGlobalStore(),
                loading: false,
                generations,
            }
        },
        // watch: {
        //     'globalStore.getPokemonList': {
        //         handler: function (val) {
        //             if (val) {
        //                 console.log('val');
        //                 this.loading = false;
        //             }
        //         }
        //     }
        // }
    });
</script>

<style lang="scss">
    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 100;
        width: 100vw;
        height: 100vh;
        top: 0;
        background-color: rgba(0,0,0,0.75);
        .spinner {
            width: 10rem;
            animation: rotate 2s linear infinite;
        }
    }
</style>