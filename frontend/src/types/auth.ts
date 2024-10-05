export interface LoginInputs {
  userId: string;
  password: string;
}

export interface SignupInputs {
  userId: string;
  mobileNo: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  userId: string;
  mobileNo: string;
  token: string;
}
