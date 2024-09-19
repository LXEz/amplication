import { Project } from "../project/Project";

export type Task = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  project?: Project | null;
  status?: "Option_1" | null;
  title: string | null;
};
