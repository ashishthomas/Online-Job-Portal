import { Filter, X } from "lucide-react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    location: string;
    jobType: string;
    salaryRange: string;
    category: string;
    experience: string;
    companySize: string;
    remoteOnly: boolean;
    skills: string[];
  };
  onFilterChange: (key: string, value: any) => void;
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
  const experienceLevels = ["Entry", "Mid", "Senior", "Lead"];
  const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "AWS",
    "SQL",
    "Docker",
  ];
  const locations = [
    "San Francisco, CA",
    "New York, NY",
    "Austin, TX",
    "Seattle, WA",
    "Los Angeles, CA",
    "Remote",
  ];

  const handleSkillToggle = (skill: string) => {
    const updatedSkills = filters.skills.includes(skill)
      ? filters.skills.filter((s) => s !== skill)
      : [...filters.skills, skill];
    onFilterChange("skills", updatedSkills);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 z-30 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
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
          {/* LOCATION */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Location</h3>
            <select
              value={filters.location}
              onChange={(e) => onFilterChange("location", e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* JOB TYPE */}
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
                    className="h-4 w-4"
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
                  className="h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">All Types</span>
              </label>
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
            <select
              value={filters.category}
              onChange={(e) => onFilterChange("category", e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* SALARY RANGE */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Salary Range
            </h3>
            <select
              value={filters.salaryRange}
              onChange={(e) => onFilterChange("salaryRange", e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">All Salaries</option>
              {salaryRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Experience
            </h3>
            <select
              value={filters.experience}
              onChange={(e) => onFilterChange("experience", e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">All Levels</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* COMPANY SIZE */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Company Size
            </h3>
            <select
              value={filters.companySize}
              onChange={(e) => onFilterChange("companySize", e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">All Sizes</option>
              {companySizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <label key={skill} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={filters.skills.includes(skill)}
                    onChange={() => handleSkillToggle(skill)}
                    className="h-4 w-4 mr-2"
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          {/* REMOTE ONLY */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters.remoteOnly}
              onChange={(e) => onFilterChange("remoteOnly", e.target.checked)}
              className="h-4 w-4"
            />
            <label className="text-sm text-gray-700">Remote only</label>
          </div>

          {/* CLEAR ALL */}
          <button
            onClick={() => {
              onFilterChange("location", "");
              onFilterChange("jobType", "");
              onFilterChange("category", "");
              onFilterChange("salaryRange", "");
              onFilterChange("experience", "");
              onFilterChange("companySize", "");
              onFilterChange("skills", []);
              onFilterChange("remoteOnly", false);
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
