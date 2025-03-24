// components/CustomImage.tsx
import Image, { ImageProps } from "next/image";

const CustomImage = ({ src, alt, width, height, ...props }: ImageProps) => {
  // Check if we're in production and apply the prefix to the image path
  const imagePath =
    process.env.NODE_ENV === "production"
      ? `/portfolio-website${src}` // Add the prefix for production
      : src; // Use the src as-is in development

  return (
    <Image src={imagePath} alt={alt} width={width} height={height} {...props} />
  );
};

export default CustomImage;
