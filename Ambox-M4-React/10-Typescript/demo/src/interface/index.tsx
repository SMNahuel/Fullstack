import { Sexo } from "../type";

export interface FormComponentProps {
  datos: Array<{ name: string; type: string }>;
}

export interface FormData {
  Nombre: string;
  Edad: number;
  Sexo: Sexo;
}

export type UserProfile = {
  email: string;
  name: string;
  photoUrl: string;
  age: number;
};

export type UserAcocuntBalance = {
  balancePesos : number,
  balanceDollar : number,
  creditCard : Array<String>
}

export interface User {
  dtoAuth: {
    dtoProfile: UserProfile,
    accoutnBalance : UserAcocuntBalance
  };
}
