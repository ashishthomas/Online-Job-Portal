import React, { useState, useMemo, useEffect } from "react";
// import Header from "./components/Header";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import JobCard from "./components/JobCard";
import JobDetail from "./components/JobDetail";
import CompanyCard from "./components/CompanyCard";
import FilterSidebar from "./components/FilterSidebar";
import { mockJobs, mockCompanies } from "./data/mockData";
import type { Job } from "./types";
import { Filter } from "lucide-react";

function App() {
  const [currentView, setCurrentView] = useState("jobs");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    salaryRange: "",
    category: "",
  });

  // Check for existing user session on app load
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        filters.location === "" || job.location === filters.location;
      const matchesJobType =
        filters.jobType === "" || job.type === filters.jobType;
      const matchesCategory =
        filters.category === "" || job.category === filters.category;

      return (
        matchesSearch && matchesLocation && matchesJobType && matchesCategory
      );
    });
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView("jobs");
  };

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    console.log("User authenticated:", userData); // Debug log
  };

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    console.log("User signed out"); // Debug log
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={handleSearch}
        currentView={currentView}
        onViewChange={setCurrentView}
        user={user}
        onAuthSuccess={handleAuthSuccess}
        onSignOut={handleSignOut}
      />

      {currentView === "jobs" && searchQuery === "" && (
        <Hero onSearch={handleSearch} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === "jobs" && (
          <div className="flex gap-8">
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={filters}
              onFilterChange={handleFilterChange}
            />

            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {searchQuery
                      ? `Search Results for "${searchQuery}"`
                      : "Latest Jobs"}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {filteredJobs.length} jobs found
                  </p>
                </div>
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>

              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} onJobClick={setSelectedJob} />
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-lg mb-2">
                    No jobs found
                  </div>
                  <p className="text-gray-500">
                    Try adjusting your search criteria or filters
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {currentView === "companies" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Top Companies
              </h2>
              <p className="text-gray-600 mt-1">
                Discover amazing companies and their open positions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedJob && (
        <JobDetail
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          user={user}
        />
      )}
    </div>
  );
}

export default App;
