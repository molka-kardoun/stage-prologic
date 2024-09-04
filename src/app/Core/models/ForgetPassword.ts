export interface ForgetPassword {
    _id?: string;
    email: string;
    code: string;
    date: string;
    user?: string[]; // Reference to User
  }
  