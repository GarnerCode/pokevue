<template>
    <div class="modal-container">
        <div class="modal">
            <button class="btn-close" @click="globalStore.setActivePokemon(null)">
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </button>
            <div class="grid">
                <div class="column">
                    <figure>
                        <img v-if="pokemon.sprites.other.home.front_default" class="m-poke-img" :src="pokemon.sprites.other.home.front_default" alt="">
                        <img v-if="!pokemon.sprites.other.home.front_default" class="m-poke-img sprite" :src="pokemon.sprites.front_default" alt="">
                        <img v-if="!pokemon.sprites.other.home.front_default && !pokemon.sprites.front_default" class="m-poke-img" src="@/assets/images/missing.jpg">
                    </figure>
                    <div class="m-poke-summary">
                        <div class="m-poke-name">
                            {{ pokemon.name }}
                        </div>
                        <div class="m-types-row">
                            <div class="type" v-for="(type, index) of pokemon.types" :key="index">
                                {{ type.type.name }}
                            </div>
                        </div>
                        <div class="stats-list">
                            <div class="stat" v-for="(stat, index) of pokemon.stats" :key="index">
                                <span class="stat-label">{{ stat.stat.name }}</span> <span class="stat-value">{{ stat.base_stat }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="moves-title">Moves</div>
                    <div class="moves-container">
                        <div class="move" v-for="(move, index) of sortMoves(pokemon.moves)" :key="index">
                            {{ move.move.name }}
                        </div>
                    </div>
                    <div class="games-title">Game Appearances</div>
                    <div class="games-container">
                        <div class="game" v-for="(game, index) of pokemon.game_indices" :key="index">
                            {{ game.version.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/global.store';
    import { utils } from '@/utils/utils';

    export default defineComponent({
        name: 'Modal',
        data() {
            return {
                globalStore: useGlobalStore(),
                pokemon: useGlobalStore().getActivePokemon,
                utils,
            }
        },
        mounted() {
            this.utils.setTypeClasses()
        },
        methods: {
            sortMoves(movesArray: Array<any>): Array<any> {
                return movesArray.sort((a: any, b: any) => {
                    return a.move.name.localeCompare(b.move.name);
                });
            },
        }
    });
</script>

<style lang="scss">
    .modal-container {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.5);
        z-index: 10;
        top: 0;
        backdrop-filter: blur(5px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .modal {
            background-color: var(--color-white);
            width: 80rem;
            height: 50rem;
            border-radius: var(--border-radius);
            padding: 1rem;
        }
        .grid {
            display: grid;
            grid-template-columns: 18rem 1fr;
            gap: 25rem;
        }
        .btn-close {
            position: absolute;
            top: 1rem;
            right: 3rem;
            cursor: pointer;
            font-size: 3rem;
            height: 3rem;
            width: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: none;
            background: none;
            &:hover {
                color: var(--color-red);
            }
        }
        figure {
            margin: 0;
        }
        .m-poke-img {
            width: 18rem;
        }
        .m-poke-name {
            text-transform: capitalize;
            font-size: 1.6rem;
            text-align: center;
        }
        .m-types-row {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
        .stats-list {
            margin: 1rem 0;
        }
        .stat {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .stat-label {
            text-transform: uppercase;
        }
        .moves-container, .games-container {
            overflow-y: auto;
            max-height: 20rem;
            background-color: var(--color-gray);
            padding: 0.5rem 1rem;
            border-radius: var(--border-radius);
        }
        .move, .game {
            text-transform: capitalize;
        }
        .games-title {
            margin-top: 2rem;
        }
    }
    @media screen and (max-width: 768px) {
        .modal-container {
            .btn-close {
                font-size: 4rem !important;
                width: 4rem;
                height: 4rem;
            }
            .modal {
                width: 35rem;
                height: 90rem;
                overflow-y: auto;
            }
            .grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            .m-poke-img {
                display: block;
                margin: 0 auto;
            }
        }
    }
</style>