import { InternshipOffer } from "./InternshipOffer";


export interface Task {
  _id?: string;
  date?: Date;
  description: string;
  title: string;
  status: string;
  startDate: Date;
  endDate: Date;
  internshipOffer?: InternshipOffer;
}
