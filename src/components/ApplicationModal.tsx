import React, { useState } from "react";
import { X, Upload, User, Mail, Phone, MapPin } from "lucide-react";
import type { Job } from "../types";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job;
  user: any;
}

interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  coverLetter: string;
  resume: File | null;
  experience: string;
  expectedSalary: string;
}

// ✅ Error type for string messages per field
type ApplicationErrors = {
  [K in keyof ApplicationData]?: string;
};

export default function ApplicationModal({
  isOpen,
  onClose,
  job,
  user,
}: ApplicationModalProps) {
  const [formData, setFormData] = useState<ApplicationData>({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    location: "",
    coverLetter: "",
    resume: null,
    experience: "",
    expectedSalary: "",
  });

  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: ApplicationErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email";

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, "")))
      newErrors.phone = "Please enter a valid phone number";

    if (!formData.location.trim()) newErrors.location = "Location is required";

    if (!formData.coverLetter.trim())
      newErrors.coverLetter = "Cover letter is required";
    else if (formData.coverLetter.length < 100)
      newErrors.coverLetter = "Cover letter must be at least 100 characters";

    if (!formData.experience.trim())
      newErrors.experience = "Experience information is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof ApplicationData,
    value: string | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a PDF or Word document",
        }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "File size must be less than 5MB",
        }));
        return;
      }
    }

    handleInputChange("resume", file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const application = {
        id: Date.now().toString(),
        jobId: job.id,
        jobTitle: job.title,
        company: job.company,
        userId: user?.id || "anonymous",
        applicantName: formData.fullName,
        applicantEmail: formData.email,
        phone: formData.phone,
        location: formData.location,
        coverLetter: formData.coverLetter,
        resumeFileName: formData.resume?.name || null,
        experience: formData.experience,
        expectedSalary: formData.expectedSalary,
        status: "submitted",
        appliedDate: new Date().toISOString(),
      };

      const existingApplications = JSON.parse(
        localStorage.getItem("jobApplications") || "[]"
      );

      const alreadyApplied = existingApplications.find(
        (app: any) =>
          app.jobId === job.id && app.userId === (user?.id || "anonymous")
      );

      if (alreadyApplied) {
        setErrors({ fullName: "You have already applied for this position" });
        setIsSubmitting(false);
        return;
      }

      existingApplications.push(application);
      localStorage.setItem(
        "jobApplications",
        JSON.stringify(existingApplications)
      );
      setIsSuccess(true);

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          fullName: user?.name || "",
          email: user?.email || "",
          phone: "",
          location: "",
          coverLetter: "",
          resume: null,
          experience: "",
          expectedSalary: "",
        });
        setErrors({});
      }, 2000);
    } catch (error) {
      console.error("Application submission error:", error);
      setErrors({
        fullName: "Failed to submit application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Application Submitted!
          </h3>
          <p className="text-gray-600">
            Your application for <strong>{job.title}</strong> at{" "}
            <strong>{job.company}</strong> has been submitted successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Apply for Position
            </h2>
            <p className="text-gray-600">
              {job.title} at {job.company}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-200px)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.location ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your location"
                />
              </div>
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location}</p>
              )}
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resume/CV
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors relative">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <div className="text-sm text-gray-600 mb-2">
                {formData.resume ? (
                  <span className="text-blue-600 font-medium">
                    {formData.resume.name}
                  </span>
                ) : (
                  <>
                    <span className="text-blue-600 font-medium">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </>
                )}
              </div>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            {errors.resume && (
              <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work Experience *
            </label>
            <textarea
              value={formData.experience}
              onChange={(e) => handleInputChange("experience", e.target.value)}
              rows={4}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.experience ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Describe your relevant work experience..."
            />
            {errors.experience && (
              <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>

          {/* Expected Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expected Salary
            </label>
            <input
              type="text"
              value={formData.expectedSalary}
              onChange={(e) =>
                handleInputChange("expectedSalary", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., ₹80,000 - ₹1,00,000"
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Letter *
            </label>
            <textarea
              value={formData.coverLetter}
              onChange={(e) => handleInputChange("coverLetter", e.target.value)}
              rows={6}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.coverLetter ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Write a compelling cover letter explaining why you're the perfect fit for this role..."
            />
            <div className="flex justify-between items-center mt-1">
              {errors.coverLetter && (
                <p className="text-sm text-red-600">{errors.coverLetter}</p>
              )}
              <p className="text-xs text-gray-500 ml-auto">
                {formData.coverLetter.length}/100 minimum characters
              </p>
            </div>
          </div>
        </form>

        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">* Required fields</p>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
