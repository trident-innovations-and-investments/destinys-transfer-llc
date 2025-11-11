import Image from 'next/image';

interface BrandLogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Renders the Destiny's Transfer LLC brand logo via the public asset.
 * Allows sizing overrides while defaulting to consistent header/footer dimensions.
 */
export default function BrandLogo({
  width = 48,
  height = 48,
  className = '',
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/DT_logo.png"
      alt="Destiny's Transfer LLC logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
