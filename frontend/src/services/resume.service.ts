import api from './api';
import type { Resume, CreateResumeData, UpdateResumeData } from '../types/resume.types';

const ResumeService = {
  /**
   * List all resumes for the authenticated user.
   */
  async listResumes(): Promise<Resume[]> {
    const response = await api.get('/resumes/');
    return response.data;
  },

  /**
   * Create a new resume.
   */
  async createResume(data: CreateResumeData): Promise<Resume> {
    const response = await api.post('/resumes/', data);
    return response.data;
  },

  /**
   * Retrieve a specific resume by ID.
   */
  async getResume(id: number): Promise<Resume> {
    const response = await api.get(`/resumes/${id}/`);
    return response.data;
  },

  /**
   * Full update for a resume by ID.
   */
  async updateResume(id: number, data: UpdateResumeData): Promise<Resume> {
    const response = await api.put(`/resumes/${id}/`, data);
    return response.data;
  },

  /**
   * Partial update for a resume by ID.
   */
  async patchResume(id: number, data: UpdateResumeData): Promise<Resume> {
    const response = await api.patch(`/resumes/${id}/`, data);
    return response.data;
  },

  /**
   * Delete a resume by ID.
   */
  async deleteResume(id: number): Promise<void> {
    await api.delete(`/resumes/${id}/`);
  }
};

export default ResumeService;
