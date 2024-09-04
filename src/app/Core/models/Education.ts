export interface Education {
    _id?: string;
    etablissement: string;
    domaine: string;
    start_date: Date;
    end_date: Date;
    cv?: string; // Reference to CV
  }
  