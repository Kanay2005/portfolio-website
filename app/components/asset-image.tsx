import NextImage, { type ImageProps } from "next/image";

import { withBasePath } from "@/app/lib/base-path";

type AssetImageProps = Omit<ImageProps, "src"> & { src: string };

/**
 * <Image> for files served out of `public/`. Next prefixes its own bundled
 * assets with `basePath`, but not unoptimized image sources, so we do it here.
 */
export default function AssetImage({ src, ...props }: AssetImageProps) {
  return <NextImage src={withBasePath(src)} {...props} />;
}
