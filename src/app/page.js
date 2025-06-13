"use client";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { ErrorMessage } from "./components/ErrorMessage";
import { PokemonCard } from "./components/PokemonCard";
import { LoadingCard } from "./components/LoadingCard";
import { usePokemon } from "./hooks/usePokemon";

export default function HomePage() {
  const {
    pokemon,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    fetchPokemon,
    fetchRandomPokemon,
  } = usePokemon();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <SearchForm
          loading={loading}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={() => fetchPokemon(searchQuery)}
          onRandom={fetchRandomPokemon}
        />
        {error && <ErrorMessage error={error} />}
        <div className="max-w-2xl mx-auto">
          {loading ? (
            <LoadingCard />
          ) : pokemon ? (
            <PokemonCard pokemon={pokemon} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
