export interface Experience {
    _id?: string;
    company: string;
    job: string;
    start_date: Date;
    end_date: Date;
    description: string;
    cv?: string; // Reference to CV
  }
  