// src/app/Core/models/projet.ts
export interface projet {
  organisation: string;
  title: string;
  description: string;
  date: Date;
  cv: string;  // Peut-être de type ObjectId selon vos besoins.
}
