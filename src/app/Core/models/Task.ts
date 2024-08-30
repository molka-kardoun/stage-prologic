
import { TaskStatus } from "./TaskStatus";


export interface Task {
  _id?: string;
  description: string;
  title: string;
  startDate: Date;
  endDate: Date;
  internshipOffer?: string;
  status?: TaskStatus;
  isApproved?: boolean;
  assignedTo?: string;
  progress?:number;
}
