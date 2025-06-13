import { Search, Shuffle } from "lucide-react";

export function SearchForm({
  loading,
  searchQuery,
  setSearchQuery,
  onSearch,
  onRandom,
}) {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
        className="flex gap-4 mb-6"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Pokemon by name or number..."
            className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Search
        </button>
      </form>

      <div className="text-center">
        <button
          onClick={onRandom}
          disabled={loading}
          className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <Shuffle className="w-5 h-5 mr-2" />
          Random Pokemon
        </button>
      </div>
    </div>
  );
}
