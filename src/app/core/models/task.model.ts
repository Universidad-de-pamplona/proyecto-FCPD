export interface Task {
  PK: number;
  UniqueID: string;
  name: string;
  description: string;
  status: 'TODO' | 'DOING' | 'DONE';  // Actualizados los tipos de estado
  createdAt: Date;
  deadline: Date;
  priority: string;
}
