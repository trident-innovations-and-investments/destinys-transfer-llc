import Image from 'next/image';

/**
 * Coverage area visualization component
 * Displays a visual representation of the 100-mile radius service area
 */
export default function CoverageMap() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
        100 Mile Radius Coverage
      </h3>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        We provide comprehensive coverage within a 100-mile radius from Orlando, FL
      </p>
      <div className="flex justify-center">
        <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-200">
          <Image
            src="/OrlandoFloridaDayTripMap.png"
            alt="100-mile service radius from Orlando, Florida covering major cities including Jacksonville, Tampa, Miami, and surrounding areas"
            width={500}
            height={400}
            className="w-[400px] h-[400px]"
          />
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        Serving all major cities and routes within 100 miles of Orlando
      </p>
    </div>
  );
}

