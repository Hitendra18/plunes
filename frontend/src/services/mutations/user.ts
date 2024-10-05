import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../api/user";
import { useAuth } from "../../contexts/AuthContext";
import { LoginInputs, SignupInputs } from "../../types/auth";

export const useSignup = () => {
  const { login } = useAuth();
  return useMutation({
    mutationFn: (data: SignupInputs) => {
      return signup(data);
    },
    onSuccess: (data) => {
      if (data) {
        login({
          mobileNo: data.mobileNo,
          userId: data.userId,
          token: data.token,
        });
      }
    },
  });
};

export const useLogin = () => {
  const { login: loginUser } = useAuth();
  return useMutation({
    mutationFn: (data: LoginInputs) => {
      return login(data);
    },
    onSuccess: (data) => {
      if (data) {
        loginUser({
          mobileNo: data.mobileNo,
          userId: data.userId,
          token: data.token,
        });
      }
    },
  });
};
