import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import AuthModal from "../AuthModal";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DesktopNav from "./DesktopNav";
import UserActions from "./UserActions";

interface HeaderProps {
  onSearch: (query: string) => void;
  currentView: string;
  onViewChange: (view: string) => void;
  user: any;
  onAuthSuccess: (user: any) => void;
  onSignOut: () => void;
}

export default function Header({
  onSearch,
  currentView,
  onViewChange,
  user,
  onAuthSuccess,
  onSignOut,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <SearchBar query={searchQuery} setQuery={setSearchQuery} onSubmit={handleSearch} />
          </div>

          <DesktopNav currentView={currentView} onViewChange={onViewChange} />

          <UserActions user={user} onSignIn={() => setIsAuthModalOpen(true)} onSignOut={onSignOut} />

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar
            query={searchQuery}
            setQuery={setSearchQuery}
            onSubmit={handleSearch}
            placeholder="Search jobs..."
          />
        </div>

        {/* Mobile Nav - Keep as-is or modularize later */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">{/* Same nav logic here */}</div>
        )}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={onAuthSuccess}
      />
    </header>
  );
}
