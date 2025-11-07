'use client';

import { FormEvent, useState } from 'react';

/**
 * Reusable contact form component
 * Displays a professional contact form with validation and modern styling
 * Handles form submission to prevent page reload
 */
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  /**
   * Handles form submission
   * Prevents default form behavior and shows success message
   * @param e - Form submission event
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      // TODO: Implement actual form submission endpoint
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // In production, replace with actual API call:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-200">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
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
          name="email"
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
          name="service"
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
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent hover:border-gray-600 resize-none backdrop-blur-sm"
          placeholder="Tell us about your shipping needs, including pickup/delivery locations, cargo details, and timing..."
        />
      </div>
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
          Thank you! Your message has been sent. We&apos;ll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full px-6 py-3.5 bg-white text-gray-900 text-base font-semibold rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-flex items-center justify-center"
      >
        <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
        {!isSubmitting && (
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </button>
    </form>
  );
}

