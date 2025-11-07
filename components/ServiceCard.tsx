interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
}

/**
 * Service feature card component styled to match template.html
 * @param title - Service title
 * @param description - Service description
 * @param features - Array of service features
 * @param icon - Optional icon element
 * @param imageUrl - Optional image URL (not used in template style)
 * @param imageAlt - Optional image alt text
 */
export default function ServiceCard({
  title,
  description,
  features,
  icon,
}: ServiceCardProps) {
  // Default icons based on title
  const getIcon = () => {
    if (icon) return icon;
    if (title.toLowerCase().includes('ltl')) {
      return (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      );
    }
    return (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Premium Gradient Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Enhanced Icon Badge with Gradient */}
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <div className="text-white">
          {getIcon()}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed text-base">
        {description}
      </p>
      
      {features && features.length > 0 ? (
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 mt-0.5">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700 text-sm leading-6">{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
      
      {/* Hover Gradient Background Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  );
}

