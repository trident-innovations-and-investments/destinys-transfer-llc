/**
 * Coverage area visualization component
 * Displays a visual representation of the 100-mile radius service area
 */
export default function CoverageMap() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        100 Mile Radius Coverage
      </h3>
      <div className="relative bg-gray-100 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-64 h-64 mx-auto border-4 border-primary rounded-full flex items-center justify-center mb-4 relative">
            <div className="absolute inset-0 border-2 border-primary-light rounded-full opacity-50"></div>
            <div className="text-center z-10">
              <div className="text-2xl font-bold text-primary">Orlando, FL</div>
              <div className="text-sm text-gray-600 mt-2">Service Center</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Service coverage extends 100 miles from Orlando, FL
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-600">
            <div>Jacksonville</div>
            <div>Daytona Beach</div>
            <div>Tampa</div>
            <div>Melbourne</div>
            <div>Ft. Lauderdale</div>
            <div>Ft. Myers</div>
            <div>West Palm Beach</div>
            <div>Miami</div>
          </div>
        </div>
      </div>
    </div>
  );
}

