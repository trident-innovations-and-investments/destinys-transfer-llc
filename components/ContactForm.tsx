/**
 * Reusable contact form component
 * Displays a professional contact form with validation and modern styling
 */
export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-200">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 backdrop-blur-sm"
          placeholder="John Doe"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-200">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 backdrop-blur-sm"
          placeholder="john@company.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="service" className="block text-sm font-semibold text-gray-200">
          Service Type <span className="text-red-400">*</span>
        </label>
        <select 
          id="service"
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 appearance-none cursor-pointer backdrop-blur-sm"
        >
          <option value="">Select a service...</option>
          <option value="ltl">LTL Shipping</option>
          <option value="tl">TL Shipping</option>
          <option value="both">Both Services</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-200">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 resize-none backdrop-blur-sm"
          placeholder="Tell us about your shipping needs, including pickup/delivery locations, cargo details, and timing..."
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3.5 bg-white text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Submit Request
      </button>
    </form>
  );
}

