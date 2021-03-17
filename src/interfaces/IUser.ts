
interface IUser  {
  firstName: string;
  lastName: string;
  email: string;
  googleId?: string;
  address?: {};
  picture?: string;
  dateBirth?: Date;
  verified?: boolean;
  role: string;
}



export default IUser;
