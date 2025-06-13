export function ErrorMessage({ error }) {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 text-center">
        <p className="text-red-300">{error}</p>
      </div>
    </div>
  );
}
