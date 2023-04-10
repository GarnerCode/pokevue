<template>
    <div class="filters-container">
        <div class="field">
            <input v-model="searchValue" type="text" class="filter-search">
            <button @click="filterPokemon()">Search</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/global.store';

    export default defineComponent({
        name: 'Filters',
        data() {
            return {
                globalStore: useGlobalStore(),
                searchValue: '' as string,
            }
        },
        methods: {
            filterPokemon(): void {
                if (this.searchValue !== '') {
                    const matchingPokemon = this.globalStore.getPokemonList.find((pokemon: any) => {
                        return pokemon.name.toLocaleLowerCase() === this.searchValue.toLocaleLowerCase();
                    });
                    console.log('matching: ', matchingPokemon);
                    if (matchingPokemon) {
                        this.globalStore.setFilteredPokemon([matchingPokemon]);
                    } else {
                        const filteredPokemon = this.globalStore.getPokemonList.filter((pokemon: any) => {
                            return pokemon.name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase());
                        });
                        if (filteredPokemon.length) {
                            this.globalStore.setFilteredPokemon(filteredPokemon);
                        } 
                        // else {
                        //     const filteredPokemonByTypes = this.globalStore.getPokemonList.filter((pokemon: any) => {
                        //         return pokemon.types.find((type: any) => {
                        //             return type.type.name.toLocaleLowerCase() === this.searchValue.toLocaleLowerCase();
                        //         });
                        //     });
                        //     if (filteredPokemonByTypes) {
                        //         this.globalStore.setFilteredPokemon(filteredPokemonByTypes);
                        //     }
                        // }
                    }
                } else {
                    this.resetFilter();
                }
            },
            resetFilter(): void {
                this.searchValue = '';
                this.globalStore.setFilteredPokemon(this.globalStore.getPokemonList);
            }
        }
    });
</script>

<style lang="scss">
    .filters-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .field {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            gap: 1rem;
        }
        .filter-search {
            width: 30rem;
            border-radius: var(--border-radius);
        }
    }
</style>