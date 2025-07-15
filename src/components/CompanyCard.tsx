import { MapPin, Users, ExternalLink, Briefcase } from "lucide-react";
import type { Company } from "../types";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {company.name}
              </h3>
              <p className="text-gray-600 mt-1">{company.industry}</p>
            </div>
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-3 text-gray-700 line-clamp-2">
            {company.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {company.location}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {company.size} employees
            </div>
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1" />
              {company.openPositions} open positions
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              View Jobs
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
