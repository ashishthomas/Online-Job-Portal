import { Briefcase } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Briefcase className="h-8 w-8 text-blue-600" />
      <span className="ml-2 text-xl font-bold text-gray-900">Dream Career</span>
    </div>
  );
}
