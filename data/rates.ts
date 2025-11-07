/**
 * Rate data structure for trucking services
 * All rates originate from Orlando, FL
 */

export interface TLRate {
  destination: string;
  tlRate: number;
  notes?: string;
}

export interface LTLRate {
  destination: string;
  ltlRate: number;
  notes?: string;
}

export interface ServiceRate {
  type: 'short-haul' | 'hot-shot';
  rate: number | string;
  description: string;
  includes: string[];
}

/**
 * Truckload (TL) rates from Orlando, FL
 * Rates include up to 4 stops, liftgate, and inside delivery up to 20 feet
 */
export const tlRates: TLRate[] = [
  { destination: 'Jacksonville', tlRate: 800 },
  { destination: 'Daytona BCH', tlRate: 400 },
  { destination: 'Tampa', tlRate: 450 },
  { destination: 'Clearwater', tlRate: 500 },
  { destination: 'Sarasota', tlRate: 600 },
  { destination: 'Melbourne', tlRate: 500 },
  { destination: 'Ft Myers', tlRate: 700 },
  { destination: 'Miami', tlRate: 950 },
  { destination: 'Ocala', tlRate: 450 },
  { destination: 'Ft Pierce', tlRate: 600 },
  { destination: 'Port St. Lucie', tlRate: 700 },
];

export const ltlRates: LTLRate[] = [
  { destination: 'Jacksonville', ltlRate: 1000 },
  { destination: 'Miami', ltlRate: 1250 },
  { destination: 'Sarasota', ltlRate: 800 },
  { destination: 'Ft Myers', ltlRate: 900 },
  { destination: 'Tampa', ltlRate: 700 },
  { destination: 'Ocala', ltlRate: 750 },
  { destination: 'Daytona BCH', ltlRate: 700 },
  { destination: 'Clearwater', ltlRate: 800 },
  { destination: 'Melbourne', ltlRate: 700 },
  { destination: 'Ft Pierce', ltlRate: 700 },
  { destination: 'Port St. Lucie', ltlRate: 800 },
];

/**
 * Additional service rates
 */
export const serviceRates: ServiceRate[] = [
  {
    type: 'short-haul',
    rate: 500,
    description: 'Short Haul (50-mile radius)',
    includes: [
      'Up to 4 stops',
      'Liftgate service',
      'Inside delivery up to 20 feet',
    ],
  },
  {
    type: 'hot-shot',
    rate: 150,
    description: 'Hot Shot Services (50-mile radius)',
    includes: [
      'Per pallet',
      'Liftgate service',
      'Inside delivery up to 20 feet',
    ],
  },
];

/**
 * Rate terms and conditions for LTL services
 */
export const rateTerms = {
  included: [
    'Up to 5 stops',
  ],
  additionalStopCharge: 50,
  liftgateInsideDeliveryCharge: 75,
  liftgateInsideDeliveryNote: 'Liftgate and inside delivery if required must be APPROVED by SHIPPER',
  origin: 'Orlando, FL',
  coverageRadius: 100, // miles
};

