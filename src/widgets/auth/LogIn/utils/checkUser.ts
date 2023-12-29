import { IUser } from "@shared/api";

export const  checkUser = (db: IUser[], email: string, password: string): IUser | null => {
  for(let user of db){
    if(user.email === email && user.password === password) return user;
  }
  return null
}
