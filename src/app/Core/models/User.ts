import { ForgetPassword } from './ForgetPassword';
import { Lab } from './Lab';
import { InternshipOffer } from './InternshipOffer';
import { CV } from './CV';
import { InternStatus } from "./InternStatus";
import { Roles } from "./Roles";

export interface User {
  _id?: string;
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
  cv?: CV;
  creationDate: Date;
  status: InternStatus;
  forgetPassword: any;
  lab?: string[] ;
  internshipOffer?: string;// assuming this is an ID reference to InternshipOffer
}
