// app/signal-validation/types.ts
export interface ValidatorInfo {
  id: number;
  avatar: string;
  name: string;
  approved: boolean;
  time: string;
  comment: string;
}

export interface SignalDetail {
  label: string;
  value: string;
}

export interface ExternalAnalysis {
  icon: string;
  title: string;
  description: string;
}
