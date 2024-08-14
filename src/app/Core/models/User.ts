import { ForgetPassword } from './ForgetPassword';
import { Lab } from './Lab';
import { InternshipOffer } from './InternshipOffer';
import { CV } from './CV';

export interface User {
  _id?: string;
  fullName: string;
  phone: string;
  email: string;
  password: string;
  role: string; // Roles enum
  image: string;
  nationality: string;
  dateOfBirth: string;
  address: string;
  department: string;
  gender: string;
  isEnabled: boolean;
  cv?: CV;
  creationDate: Date;
  status: string; // InternStatus enum
  forgetPassword?: ForgetPassword[];
  lab?: Lab[];
  internshipOffer?: InternshipOffer;
}
