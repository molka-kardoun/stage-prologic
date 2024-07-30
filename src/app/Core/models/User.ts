import { InternStatus } from "./InternStatus";
import { Roles } from "./Roles";

export interface User {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
  password: string;
  role: Roles;
  image: string;
  nationality: string;
  dateOfBirth: string;
  address: string;
  department: string;
  gender: string;
  isEnabled: boolean;
  cv: any; // assuming this is an ID reference to CV
  creationDate: Date;
  status: InternStatus;

  lab: any ;
  internshipOffer: any; // assuming this is an ID reference to InternshipOffer
}

