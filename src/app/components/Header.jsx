export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4 gap-4">
        <img src="/pokedex.svg" alt="Pokedex" width={32} height={32} />
        <h1 className="text-5xl font-bold text-white">Pokepi</h1>
      </div>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Discover amazing Pokemon from across all regions
      </p>
    </div>
  );
}
