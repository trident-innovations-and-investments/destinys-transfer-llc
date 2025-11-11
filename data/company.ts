/**
 * Company information for Destiny's Tranfer LLC
 */

export interface CompanyInfo {
  name: string;
  owner: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  experience: number;
  equipment: string[];
  services: string[];
  licensed: boolean;
  insured: boolean;
}

/**
 * Main company information
 */
export const companyInfo: CompanyInfo = {
  name: "Destiny's Tranfer LLC",
  owner: 'Martin Anthony Herrera',
  address: {
    street: '',
    city: 'Orlando',
    state: 'Florida',
    zip: '32812',
  },
  phone: '407-978-5088',
  email: 'martinanthony2989@gmail.com',
  experience: 30,
  equipment: [
    "48-foot trailer with hydraulic liftgate and capacity for 22 standard 40x48 inch pallets",
  ],
  services: ['Truckload (TL)', 'Less Than Truckload (LTL)'],
  licensed: true,
  insured: true,
};

/**
 * Service descriptions
 */
export const serviceDescriptions = {
  tl: {
    title: 'Truckload (TL) Shipping',
    description:
      'Full truckload shipping and transfer services for larger shipments. We handle your complete cargo transfer from origin to destination with dedicated trailer space.',
    features: [
      'Dedicated trailer for your shipment',
      'Complete cargo transfer service',
      'Direct shipping point-to-point',
      'Secure handling and transfer',
    ],
  },
  ltl: {
    title: 'Less Than Truckload (LTL) Shipping',
    description:
      'Efficient shipping and transfer solution for smaller shipments. Your cargo is safely transferred alongside other shipments, maximizing cost-effectiveness.',
    features: [
      'Shared shipping space',
      'Cost-effective cargo transfer',
      'Multiple transfer stops',
      'Flexible shipping schedules',
    ],
  },
  shortHaul: {
    title: 'Short Haul Shipping',
    description:
      'Local and regional shipping and transfer services within a 50-mile radius. Fast cargo transfer for same-day or next-day delivery needs.',
    features: [
      '50-mile radius shipping',
      'Up to 4 transfer stops included',
      'Liftgate transfer service',
      'Inside delivery transfer available',
    ],
  },
  hotShot: {
    title: 'Hot Shot Shipping',
    description:
      'Expedited shipping and transfer service for urgent cargo. Fast, reliable pallet transfer within a 50-mile radius for time-sensitive shipments.',
    features: [
      'Per pallet shipping rates',
      'Expedited transfer service',
      'Liftgate transfer included',
      'Inside transfer up to 20 feet',
    ],
  },
};

