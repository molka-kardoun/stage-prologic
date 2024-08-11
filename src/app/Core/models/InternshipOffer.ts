import { Evaluation } from "./Evaluation";
import { Task } from "./Task";
import { User } from "./User";

export interface InternshipOffer {
  _id?: string;
  creationDate?: Date;
  title: string;
  description: string;
  technologies: string;
  encadrant?: string; // Reference to User
  user?: User[]; // Reference to User
  evaluation?: Evaluation[]; // Reference to Evaluation
  task?: Task[]; // Reference to Task
  quiz?: string; // Quiz ID
  startDate: Date;
  endDate: Date;
}
