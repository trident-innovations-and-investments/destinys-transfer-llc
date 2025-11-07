/**
 * Rate data structure for trucking services
 * All rates originate from Orlando, FL
 */

export interface Rate {
  destination: string;
  tlRate: number;
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
export const tlRates: Rate[] = [
  { destination: 'Jacksonville', tlRate: 950 },
  { destination: 'Daytona BCH', tlRate: 700 },
  { destination: 'Tampa', tlRate: 700 },
  { destination: 'Melbourne', tlRate: 700 },
  { destination: 'Ft Lauderdale', tlRate: 1100 },
  { destination: 'Ft Myers', tlRate: 950 },
  { destination: 'West Palm BCH', tlRate: 1000 },
  { destination: 'Miami', tlRate: 1250 },
  { destination: 'Ocala', tlRate: 700 },
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
 * Rate terms and conditions
 */
export const rateTerms = {
  included: [
    'Up to 4 stops',
    'Liftgate service',
    'Inside delivery up to 20 feet inside facility',
  ],
  additionalStopCharge: 100,
  origin: 'Orlando, FL',
  coverageRadius: 100, // miles
};

