export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Contest = {
  id: string;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
  archived: boolean;
};

export type Participant = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  title: string;
  score: number;
  outside_contest: boolean;
  contest: string;
};
