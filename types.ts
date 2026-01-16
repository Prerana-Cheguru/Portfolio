
export interface Experience {
  client: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  technologies: string;
}

// Fixed: Added description property to Certification interface to resolve errors in data.ts and Certifications.tsx
export interface Certification {
  name: string;
  description: string;
}
