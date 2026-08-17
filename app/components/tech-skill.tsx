import { techLogos, type TechName } from "@/app/data/tech";

import AssetImage from "./asset-image";

export default function TechSkill({ name }: { name: TechName }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
      <div className="relative w-16 h-16 mb-3">
        <AssetImage
          src={techLogos[name]}
          alt=""
          fill
          sizes="64px"
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
