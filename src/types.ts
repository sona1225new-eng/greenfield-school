export type ScreenPath =
  | 'home'
  | 'about-gis'
  | 'academics'
  | 'campus-facilities'
  | 'student-life'
  | 'notices'
  | 'gallery'
  | 'contact'
  | 'admissions'
  | 'school-erp'
  | 'cbse-disclosure';

export interface SchoolNotice {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Examinations' | 'Holidays' | 'General' | 'Support Desk';
  excerpt: string;
  details?: string;
  isImportant?: boolean;
  fileSize?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Sports' | 'Science & Tech' | 'Arts & Culture';
  imageUrl: string;
  altText: string;
  caption: string;
}

export interface AcademicStage {
  id: string;
  title: string;
  ageGroup: string;
  grades: string;
  description: string;
  highlights: string[];
  features: string[];
  subjects: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string;
  imageUrl?: string;
  iconName: string;
}

export interface AdmissionApplication {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  gradeApplying: string;
  fatherName: string;
  motherName: string;
  contactNumber: string;
  email: string;
  previousSchool: string;
  address: string;
  transportRequired: boolean;
  message?: string;
}
