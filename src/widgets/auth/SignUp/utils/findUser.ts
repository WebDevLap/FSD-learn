import { IUser } from "@shared/api";

export const  findUser = (db: IUser[], email: string): IUser | null => {
  for(let user of db){
    if(user.email === email) return user;
  }
  return null
}
