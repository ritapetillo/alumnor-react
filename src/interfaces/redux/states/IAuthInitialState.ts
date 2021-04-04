import IUser from "../../IUser";

interface IAuthInitialState {
  user?: IUser | {} | null;
  isAuth: boolean;
  isLoading: boolean;
  errorMsg: string;
}

export default IAuthInitialState;
