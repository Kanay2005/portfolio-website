import type { LucideIcon } from "lucide-react";

interface SkillIconProps {
  icon: LucideIcon;
  name: string;
}

export default function SkillIcon({ icon: Icon, name }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
      <Icon className="w-10 h-10 text-indigo-600 mb-2" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
