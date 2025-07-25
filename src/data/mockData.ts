import type { Job, Company } from '../types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for developing user-facing features using modern JavaScript frameworks.',
    requirements: ['5+ years React experience', 'TypeScript proficiency', 'Modern CSS frameworks', 'Git workflow'],
    benefits: ['Health insurance', 'Remote work options', '401k matching', 'Professional development budget'],
    postedDate: '2024-01-15',
    deadline: '2024-02-15',
    logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    featured: true,
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateLab',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'Join our product team to drive innovation and lead cross-functional teams in developing cutting-edge solutions.',
    requirements: ['3+ years product management', 'Agile methodology', 'Data analysis skills', 'Leadership experience'],
    benefits: ['Equity package', 'Flexible hours', 'Learning stipend', 'Team retreats'],
    postedDate: '2024-01-12',
    deadline: '2024-02-12',
    logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    featured: false,
    category: 'Product'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'DesignStudio',
    location: 'Remote',
    type: 'Remote',
    salary: '$80,000 - $110,000',
    description: 'Create beautiful and intuitive user experiences for our digital products. Work with a talented team of designers and developers.',
    requirements: ['Figma expertise', 'User research experience', 'Prototyping skills', 'Design systems knowledge'],
    benefits: ['Remote-first culture', 'Design tool subscriptions', 'Conference attendance', 'Wellness program'],
    postedDate: '2024-01-10',
    deadline: '2024-02-10',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    featured: true,
    category: 'Design'
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'DataTech Solutions',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $140,000',
    description: 'Analyze complex datasets to drive business insights and build predictive models using machine learning techniques.',
    requirements: ['Python/R proficiency', 'Machine learning experience', 'SQL expertise', 'Statistics background'],
    benefits: ['Stock options', 'Research time', 'Conference budget', 'Mentorship program'],
    postedDate: '2024-01-08',
    deadline: '2024-02-08',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    featured: false,
    category: 'Data Science'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudFirst',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$115,000 - $145,000',
    description: 'Build and maintain scalable infrastructure, implement CI/CD pipelines, and ensure system reliability.',
    requirements: ['AWS/Azure experience', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring tools'],
    benefits: ['Certification reimbursement', 'On-call compensation', 'Home office setup', 'Unlimited PTO'],
    postedDate: '2024-01-05',
    deadline: '2024-02-05',
    logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    featured: false,
    category: 'DevOps'
  },
  {
    id: '6',
    title: 'Marketing Specialist',
    company: 'GrowthCo',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    salary: '$50,000 - $70,000',
    description: 'Drive marketing campaigns and growth initiatives. Work with content, social media, and digital advertising.',
    requirements: ['Digital marketing experience', 'Content creation skills', 'Analytics tools', 'Social media expertise'],
    benefits: ['Flexible schedule', 'Creative freedom', 'Marketing tools access', 'Growth opportunities'],
    postedDate: '2024-01-03',
    deadline: '2024-02-03',
    logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    featured: false,
    category: 'Marketing'
  },
  {
    id: '7',
    title: 'Frontend Engineer',
    company: 'WebTech Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Build and maintain responsive web applications using modern frameworks and libraries.',
    requirements: ['HTML/CSS expertise', 'JavaScript proficiency', 'React/Next.js experience', 'Node.js knowledge'],
    benefits: ['Health insurance', 'Remote work options', '401k matching', 'Professional development budget'],
    postedDate: '2024-01-01',
    deadline: '2024-02-01',
    logo: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    featured: false,
    category: 'Technology'
  },
  {
    id: '8',
    title: 'Data Analyst',
    company: 'DataTech Solutions',
    location: 'New York, NY',
    type: 'Part-time',
    salary: '$60,000 - $80,000',
    description: 'Analyze complex datasets to drive business insights and build predictive models using machine learning techniques.',
    requirements: ['Python/R proficiency', 'Machine learning experience', 'SQL expertise', 'Statistics background'],
    benefits: ['Stock options', 'Research time', 'Conference budget', 'Mentorship program'],
    postedDate: '2024-01-01',
    deadline: '2024-02-01',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    featured: false,
    category: 'Data Science'
  }
];

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    description: 'Leading technology company focused on innovation and digital transformation.',
    website: 'https://techcorp.com',
    size: '1000-5000',
    industry: 'Technology',
    location: 'San Francisco, CA',
    openPositions: 15
  },
  {
    id: '2',
    name: 'InnovateLab',
    logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    description: 'Product innovation company building the future of digital experiences.',
    website: 'https://innovatelab.com',
    size: '100-500',
    industry: 'Product Development',
    location: 'New York, NY',
    openPositions: 8
  },
  {
    id: '3',
    name: 'DesignStudio',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    description: 'Creative design agency specializing in user experience and digital design.',
    website: 'https://designstudio.com',
    size: '50-100',
    industry: 'Design',
    location: 'Remote',
    openPositions: 5
  },
  {
    id: '4',
    name: 'GrowthCo',
    logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    description: 'Digital marketing agency specializing in growth and engagement strategies.',
    website: 'https://growthco.com',
    size: '500-1000',
    industry: 'Marketing',
    location: 'Los Angeles, CA',
    openPositions: 10
  },
  {
    id: '5',
    name: 'WebTech Solutions',
    logo: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    description: 'Web development company focused on building scalable and responsive web applications.',
    website: 'https://webtechsolutions.com',
    size: '200-1000',
    industry: 'Technology',
    location: 'San Francisco, CA',
    openPositions: 12 
  },
  {
  id: "6",
  name: "DataTech Solutions",
  logo: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
  description: "Data analytics company specializing in data-driven insights and business intelligence.",
  website: "https://datatechsolutions.com",
  size: "50-100",
  industry: "Data Science",
  location: "New York, NY",
  openPositions: 7
}
];