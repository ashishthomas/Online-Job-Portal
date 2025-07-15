export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  deadline: string;
  logo: string;
  featured: boolean;
  category: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  size: string;
  industry: string;
  location: string;
  openPositions: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'candidate' | 'employer';
  profile?: {
    title: string;
    bio: string;
    skills: string[];
    experience: string;
    education: string;
  };
}