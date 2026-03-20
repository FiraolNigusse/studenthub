export interface Resume {
  id: number;
  title: string;
  data: any; // Flexible JSON data for resume content
  template: string;
  created_at: string;
  updated_at: string;
}

export type CreateResumeData = Pick<Resume, 'title' | 'data' | 'template'>;
export type UpdateResumeData = Partial<CreateResumeData>;
