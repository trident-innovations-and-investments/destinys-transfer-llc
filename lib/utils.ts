/**
 * Utility functions for formatting and display
 */

/**
 * Formats a phone number for display
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Formats currency for display
 * @param amount - Amount to format
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number | string): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

/**
 * Formats full address string
 * @param address - Address object
 * @returns Formatted address string
 */
export function formatAddress(address: {
  street: string;
  city: string;
  state: string;
  zip: string;
}): string {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
}

