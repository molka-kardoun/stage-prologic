export interface Lab {
  department: string;
  code: string;
  backup: boolean;
  ram: number;
  disk: number;
  processor: number;
  start: Date;
  end: Date;
  goals: string;
  status: string;
  isAccepted: boolean;
  user:any;
}
