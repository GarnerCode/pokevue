<template>
    <div class="poke-card-loading" v-if="!pokemon">

    </div>
    <div class="poke-card" v-if="pokemon" @click="handleClick(pokemon)">
        <div class="c-dex-num">
            #{{ pokemon.id }}
        </div>
        <figure>
            <img v-if="pokemon.sprites.other.home.front_default" class="c-poke-img" :src="pokemon.sprites.other.home.front_default" alt="">
            <img v-if="!pokemon.sprites.other.home.front_default" class="c-poke-img sprite" :src="pokemon.sprites.front_default" alt="">
            <img v-if="!pokemon.sprites.other.home.front_default && !pokemon.sprites.front_default" class="c-poke-img" src="@/assets/images/missing.jpg">
        </figure>
        <div class="c-poke-name">
            {{ pokemon.name }}
        </div>
        <div class="c-types-container">
            <div class="type" v-for="(type, index) of pokemon.types" :key="index">
                {{ type.type.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { PokeTypesEnum } from '@/enum/poke-types.enum';
    import { useGlobalStore } from '@/store/global.store';
    import { utils } from '@/utils/utils'

    export default defineComponent({
        name: 'PokeCard',
        props: {
            pokemon: {
                type: Object,
            }
        },
        data() {
            return {
                types: PokeTypesEnum,
                globalStore: useGlobalStore(),
                utils,
            }
        },
        mounted() {
            this.utils.setTypeClasses();
        },
        watch: {
            'globalStore.getFilteredPokemon': {
                handler: function (val) {
                    if (val) {
                        this.utils.setTypeClasses();
                    }
                }
            }
        },
        methods: {
            handleClick(pokemon: any): void {
                console.log('pokemon clicked: ', pokemon);
                this.globalStore.setActivePokemon(pokemon);
            }
        }
    });
</script>

<style lang="scss">
    .poke-card-loading {
        width: 24rem;
        height: 28.8rem;
    }
    .poke-card {
        background-color: white;
        cursor: pointer;
        margin: 1rem;
        padding: 2rem 0.5rem;
        border-radius: var(--border-radius);
        box-shadow: 0px 0px 15px rgba(0,0,0,0.1), 0px 0px 15px rgba(255,255,255,0.5);
        transition: all 0.25s ease-in-out;
        &:hover {
            box-shadow: 0px 0px 15px rgba(0,0,0,0.3), 0px 0px 15px rgba(255,255,255,0.8);
        }
        .c-dex-num {
            position: relative;
            right: 0;
            top: -1.5rem;
            text-align: right;
            color: var(--color-gray);
        }
        .c-poke-name {
            text-transform: capitalize;
            text-align: center;
            font-size: 1.6rem;
        }
        .c-poke-img {
            width: 15rem;
        }
        .c-types-container {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    }
</style>