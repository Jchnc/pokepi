import React from "react";

const typeColors = {
  normal: "bg-gray-500",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-500",
  grass: "bg-green-500",
  ice: "bg-cyan-400",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-green-400",
  rock: "bg-yellow-800",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  steel: "bg-gray-600",
  fairy: "bg-pink-400",
};

export const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 transition-transform duration-200 hover:scale-105">
      <div className="text-center mb-6">
        <div className="mb-4">
          <img
            src={pokemon.sprites.front_default || pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="w-48 h-48 mx-auto transition-transform duration-200 hover:scale-110"
          />
        </div>
        <h2 className="text-4xl font-bold text-white capitalize mb-2">
          {pokemon.name}
        </h2>
        <p className="text-gray-400 text-lg">
          #{pokemon.id.toString().padStart(3, "0")}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-700">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
            Height
          </p>
          <p className="text-2xl font-bold text-white">
            {(pokemon.height / 10).toFixed(1)}m
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 text-center border border-gray-700">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
            Weight
          </p>
          <p className="text-2xl font-bold text-white">
            {(pokemon.weight / 10).toFixed(1)}kg
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">
          Types
        </p>
        <div className="flex justify-center gap-3">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className={`${
                typeColors[type.type.name] || "bg-gray-500"
              } text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-transform duration-200 hover:scale-110`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
