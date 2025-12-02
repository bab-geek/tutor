export enum Subject {
  PHYSICS = 'Physics',
  MATHEMATICS = 'Mathematics',
  CHEMISTRY = 'Chemistry'
}

export interface Resource {
  id: string;
  title: string;
  subject: Subject;
  topic: string;
  type: string;
  price: number;
  isLocked: boolean;
  description: string;
}

export interface TeacherProfile {
  name: string;
  experienceYears: number;
  ratePerHour: number;
  bio: string;
  specialties: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type ViewState = 'HOME' | 'BOOKING';