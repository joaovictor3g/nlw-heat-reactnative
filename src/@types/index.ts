export type Message = {
  id: string;
  text: string;
  user: User;
};

export type User = {
  name: string;
  avatar_url: string;
};
