import React from "react";
import { Filter, X } from "lucide-react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    location: string;
    jobType: string;
    salaryRange: string;
    category: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export default function FilterSidebar({
  isOpen,
  onClose,
  filters,
  onFilterChange,
}: FilterSidebarProps) {
  const jobTypes = ["Full-time", "Part-time", "Contract", "Remote"];
  const categories = [
    "Technology",
    "Design",
    "Product",
    "Marketing",
    "Data Science",
    "DevOps",
  ];
  const salaryRanges = [
    "Under $50k",
    "$50k - $75k",
    "$75k - $100k",
    "$100k - $150k",
    "Over $150k",
  ];

  const locations = [
    "San Francisco, CA",
    "New York, NY",
    "Austin, TX",
    "Seattle, WA",
    "Los Angeles, CA",
    "Remote",
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-100 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto h-full">
          {/* Location Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Location</h3>
            <select
              value={filters.location}
              onChange={(e) => onFilterChange("location", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Job Type Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Job Type</h3>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="radio"
                    name="jobType"
                    value={type}
                    checked={filters.jobType === type}
                    onChange={(e) => onFilterChange("jobType", e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{type}</span>
                </label>
              ))}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="jobType"
                  value=""
                  checked={filters.jobType === ""}
                  onChange={(e) => onFilterChange("jobType", e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">All Types</span>
              </label>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
            <select
              value={filters.category}
              onChange={(e) => onFilterChange("category", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Salary Range Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Salary Range
            </h3>
            <select
              value={filters.salaryRange}
              onChange={(e) => onFilterChange("salaryRange", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Salaries</option>
              {salaryRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              onFilterChange("location", "");
              onFilterChange("jobType", "");
              onFilterChange("category", "");
              onFilterChange("salaryRange", "");
            }}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
}
