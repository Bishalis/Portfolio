export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
} 