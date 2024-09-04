import { Experience } from './Experience';
import { projet } from './Projet';
import { Skill } from './Skill';
import { Certification } from './Certification';
import { Education } from './Education';
import { Language } from './Language';
import { User } from './User'; 

export interface CV {
  _id?: string;
  user?: string; 
  experiences: Experience[];
  projects: projet[];
  skills: Skill[];
  certifications: Certification[];
  education: Education[];
  languages: Language[];
  
}
