// src/app/Core/models/projet.ts
export interface projet {
  _id?:string,
  organisation: string;
  title: string;
  description: string;
  date: Date;
  cv: string;  // Peut-être de type ObjectId selon vos besoins.
}
