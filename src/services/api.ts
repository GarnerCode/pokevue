import axios from 'axios';
import { ApiRoutesEnum } from '@/enum/api-routes.enum';

const baseUrl = 'https://pokeapi.co/api/v2/';

export const api = {
    fetchAllPokemon(limit: number): Promise<any> {
        return axios.get(baseUrl + ApiRoutesEnum.POKEMON + '?limit=' + limit + '&offset=0')
        .then(response => {
            return response.data
        });
    },
    fetchPokemon(pokemon: string): Promise<any> {
        return axios.get(baseUrl + ApiRoutesEnum.POKEMON + pokemon)
        .then(response => {
            return response.data
        });
    },
}