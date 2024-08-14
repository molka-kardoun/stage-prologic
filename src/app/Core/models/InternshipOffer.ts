export interface InternshipOffer {
    _id?: string;
    creationDate?: Date;
    title: string;
    description: string;
    technologies: string;
    encadrant?: string; // Reference to User
    user?: string[]; // Reference to User
    evaluation?: string[]; // Reference to Evaluation
    task?: string[]; // Reference to Task
    startDate: Date;
    endDate: Date;
  }
  