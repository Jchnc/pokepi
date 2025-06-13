import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2";

export const pokemonApi = {
  async getPokemon(query) {
    const response = await axios.get(
      `${BASE_URL}/pokemon/${query.toString().toLowerCase()}`
    );
    return response.data;
  },

  async getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    return this.getPokemon(randomId);
  },
};
