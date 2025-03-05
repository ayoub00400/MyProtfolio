export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}