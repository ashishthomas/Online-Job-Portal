// components/Header/NavItem.tsx
import React from "react";

interface NavItemProps {
  id: string;
  label: string;
  Icon: React.ElementType;
  active: boolean;
  onClick: (id: string) => void;
}

export default function NavItem({
  id,
  label,
  Icon,
  active,
  onClick,
}: NavItemProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? "text-blue-600 bg-blue-50"
          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}
