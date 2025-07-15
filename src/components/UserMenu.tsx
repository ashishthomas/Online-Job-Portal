import React, { useState } from "react";
import {
  User,
  Settings,
  Bookmark,
  FileText,
  LogOut,
  ChevronDown,
} from "lucide-react";

interface UserMenuProps {
  user: any;
  onSignOut: () => void;
}

export default function UserMenu({ user, onSignOut }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: User, label: "Profile", action: () => console.log("Profile") },
    {
      icon: Bookmark,
      label: "Saved Jobs",
      action: () => console.log("Saved Jobs"),
    },
    {
      icon: FileText,
      label: "Applications",
      action: () => console.log("Applications"),
    },
    {
      icon: Settings,
      label: "Settings",
      action: () => console.log("Settings"),
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="hidden md:block text-sm font-medium text-gray-700">
          {user.name}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            <div className="px-4 py-2 border-b border-gray-200">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>

            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="border-t border-gray-200 mt-2 pt-2">
              <button
                onClick={() => {
                  onSignOut();
                  setIsOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
