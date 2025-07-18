import NavItem from "./NavItem";
import { Briefcase, Building2 } from "lucide-react";

const navItems = [
  { id: "jobs", label: "Jobs", Icon: Briefcase },
  { id: "companies", label: "Companies", Icon: Building2 },
];

interface Props {
  currentView: string;
  onViewChange: (id: string) => void;
}

export default function DesktopNav({ currentView, onViewChange }: Props) {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          {...item}
          active={currentView === item.id}
          onClick={onViewChange}
        />
      ))}
    </nav>
  );
}
