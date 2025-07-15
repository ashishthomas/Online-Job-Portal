import React from "react";
import { MapPin, Clock, DollarSign, Star, Bookmark } from "lucide-react";
import type { Job } from "../types";

interface JobCardProps {
  job: Job;
  onJobClick: (job: Job) => void;
}

export default function JobCard({ job, onJobClick }: JobCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group relative"
      onClick={() => onJobClick(job)}
    >
      {job.featured && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="w-12 h-12 rounded-lg object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-600 font-medium">{job.company}</p>
            </div>
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {job.type}
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              {job.salary}
            </div>
          </div>

          <p className="mt-3 text-gray-600 line-clamp-2">{job.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {job.requirements.slice(0, 3).map((req, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {req}
                </span>
              ))}
              {job.requirements.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{job.requirements.length - 3} more
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">
              {formatDate(job.postedDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
