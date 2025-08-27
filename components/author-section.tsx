export function AuthorSection() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-gray-900">Author & Thought Leadership</h4>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">Currently authoring:</p>

      <div className="bg-blue-50 rounded-lg p-4">
        <h5 className="font-medium text-blue-900 mb-1">
          📖 Jewellery Guide "Sip It Till You Gulp It" Book Series: Diamonds & Precious Stones
        </h5>
      </div>
    </div>
  )
}
