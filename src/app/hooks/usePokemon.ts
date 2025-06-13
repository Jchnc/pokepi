"use client";
import { useState, useEffect } from "react";
import { pokemonApi } from "../services/pokemonApi";

export function usePokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  /**
   * Fetches a Pokemon by name or ID
   * @param query
   */
  const fetchPokemon = async (query: string) => {

    if (!query) {
      setError("Please enter a Pokemon name or ID");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await pokemonApi.getPokemon(query);
      setPokemon(data);
    } catch (err) {
      setError((err as Error).message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetches a random Pokemon
   */
  const fetchRandomPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await pokemonApi.getRandomPokemon();
      setPokemon(data);
    } catch (err) {
      setError((err as Error).message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return {
    pokemon,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    fetchPokemon,
    fetchRandomPokemon,
  };
}
