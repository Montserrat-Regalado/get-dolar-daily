export interface Iinfo {
  rate: number;
  timestamp: number;
}

export interface Iquery {
  amount: number;
  from: string;
  to: string;
}

export interface Icurrency {
  date: string;
  info: Iinfo;
  query: Iquery;
  result: number;
  success: boolean;
}
