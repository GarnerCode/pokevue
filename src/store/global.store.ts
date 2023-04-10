import { defineStore } from 'pinia';
import { api } from '@/services/api';

export const useGlobalStore = defineStore({
    id: 'GlobalStore',
    state: () => ({
        pokemonList: [] as any,
        filteredPokemon: [] as any,
        loading: false as boolean,
        activePokemon: null as any,
    }),
    getters: {
        getPokemonList: (state): any => {
            return state.pokemonList;
        },
        getFilteredPokemon: (state): any => {
            return state.filteredPokemon;
        },
        getLoading: (state): boolean => {
            return state.loading;
        },
        getActivePokemon: (state): any => {
            return state.activePokemon;
        },
    },
    actions: {
        async fetchPokemonList(limit: number): Promise<void> {
            await api.fetchAllPokemon(limit)
            .then((response: any) => {
                return response.results;
            })
            .then((response: any) => {
                 this.fetchAllPokemon(response);
            })
        },
        async fetchAllPokemon(pokemonList: any): Promise<void> {
            for (const pokemon of pokemonList) {
                await api.fetchPokemon(pokemon.name)
                .then((response: any) => {
                    this.pokemonList.push(response);
                    this.filteredPokemon.push(response);
                })
            }
        },
        async fetchPokemon(pokemon: string): Promise<void> {
            await api.fetchPokemon(pokemon)
            .then((response: any) => {
                return response;
            });
        },
        setFilteredPokemon(payload: any): void {
            this.filteredPokemon = payload;
        },
        setLoading(toggle: boolean): void {
            this.loading = toggle;
        },
        setActivePokemon(pokemon: any): void {
            this.activePokemon = pokemon;
        },
    }
})