export interface IPost {
  createdAt: string;
  title: string;
  text: string;
  img: string;
  id: string;
  userId: string;
}

export interface IUser {
  createdAt: string;
  name: string;
  avatar: string;
  password: string;
  email: string;
  id: string;
}
