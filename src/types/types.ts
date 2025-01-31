export interface Company {
  id: string;
  name: string;
  industry: string;
  companyId: string;
  description: string;
  employeeCount: number;
  location: string;
  imageUrl: string;
}

// TypeScript interfaces
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

export interface BlogProps {
  posts?: BlogPost[];
}
