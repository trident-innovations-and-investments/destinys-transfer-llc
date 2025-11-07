import { LTLRate } from '@/data/rates';
import { formatCurrency } from '@/lib/utils';

interface LTLRateTableProps {
  rates: LTLRate[];
}

/**
 * Displays a table of less-than-truckload rates styled to match template.html
 * @param rates - Array of LTL rate objects
 */
export default function LTLRateTable({ rates }: LTLRateTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-900">LTL Shipping Rates</h3>
        <p className="text-sm text-gray-600 mt-1">Less-than-truckload shipping rates</p>
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
              <div className="font-medium text-gray-900">{rate.destination}</div>
              <div className="font-semibold text-gray-900">
                {formatCurrency(rate.ltlRate)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

