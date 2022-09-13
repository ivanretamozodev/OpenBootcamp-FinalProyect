export enum Levels {
  'info',
  'urgent',
  'blocking',
}
export interface Task {
  title: string;
  description: string;
  completed?: boolean;
  level: Levels;
}
