import { techLogos, type TechName } from "@/app/data/tech";

import AssetImage from "./asset-image";

export default function TechTag({ name }: { name: TechName }) {
  return (
    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full flex items-center gap-2">
      <span className="relative w-5 h-5">
        <AssetImage
          src={techLogos[name]}
          alt=""
          fill
          sizes="20px"
          className="object-contain"
        />
      </span>
      {name}
    </span>
  );
}
