export function PersonalInterests() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-gray-900">Personal Interests</h4>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Trading, tennis, investments, and reading business books that fuel personal-driven growth.
      </p>
    </div>
  )
}
