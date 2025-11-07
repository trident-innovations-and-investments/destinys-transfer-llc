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
          className="w-6 h-6 text-gray-900"
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
        className="w-6 h-6 text-gray-900"
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
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg
              className="w-4 h-4 text-gray-900 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

