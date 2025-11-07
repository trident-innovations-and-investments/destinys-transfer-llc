import { Rate } from '@/data/rates';
import { formatCurrency } from '@/lib/utils';

interface RateTableProps {
  rates: Rate[];
  origin: string;
}

/**
 * Displays a table of truckload rates styled to match template.html
 * @param rates - Array of rate objects
 * @param origin - Origin city for the rates
 */
export default function RateTable({ rates, origin }: RateTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-900">TL Shipping Rates</h3>
        <p className="text-sm text-gray-600 mt-1">From {origin}</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {rates.map((rate, index) => (
            <div
              key={index}
              className={`flex items-center justify-between py-3 ${
                index < rates.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div>
                <div className="font-medium text-gray-900">{rate.destination}</div>
                {rate.notes && (
                  <div className="text-sm text-gray-600">{rate.notes}</div>
                )}
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">
                  {formatCurrency(rate.tlRate)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

