import { monogram, techLogos, type TechName } from "@/app/data/tech";

import AssetImage from "./asset-image";

interface TechTagProps {
  name: TechName;
  /** "sm" for project/experience cards, "md" for the skills section. */
  size?: "sm" | "md";
}

const styles = {
  sm: { chip: "px-3 py-1 text-sm", box: "w-5 h-5", sizes: "20px", mono: "text-[8px]" },
  md: { chip: "px-4 py-2 text-base", box: "w-6 h-6", sizes: "24px", mono: "text-[9px]" },
} as const;

export default function TechTag({ name, size = "sm" }: TechTagProps) {
  const logo = techLogos[name];
  const style = styles[size];

  return (
    <span
      className={`${style.chip} bg-gray-100 text-gray-800 rounded-full flex items-center gap-2 whitespace-nowrap`}
    >
      {logo ? (
        <span className={`relative shrink-0 ${style.box}`}>
          <AssetImage
            src={logo}
            alt=""
            fill
            sizes={style.sizes}
            className="object-contain"
          />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={`flex shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700 ${style.box} ${style.mono}`}
        >
          {monogram(name)}
        </span>
      )}
      {name}
    </span>
  );
}
