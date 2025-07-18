// components/Header/SearchBar.tsx
import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
}

export default function SearchBar({
  query,
  setQuery,
  onSubmit,
  placeholder = "Search jobs, companies, or keywords...",
}: SearchBarProps) {
  return (
    <form onSubmit={onSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </form>
  );
}
