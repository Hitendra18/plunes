import axios from "axios";
// import { toast } from "react-toastify";
import { LoginInputs, SignupInputs } from "../../types/auth";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const signup = async (userData: SignupInputs) => {
  try {
    console.log("Sent a request to /api/users/signup with data", userData);
    const response = await axiosInstance.post("/api/users/signup", {
      userId: userData.userId,
      mobileNo: userData.mobileNo,
      password: userData.password,
    });
    const token = response.headers.authorization?.split(" ")[1];
    return { ...response.data, token };
  } catch (error: any) {
    toast.error(error.response?.data?.message);
  }
};

export const login = async (userData: LoginInputs) => {
  try {
    console.log("Sent a request to /api/users/login with data", userData);
    const response = await axiosInstance.post("/api/users/login", {
      userId: userData.userId,
      password: userData.password,
    });
    const token = response.headers.authorization?.split(" ")[1];
    return { ...response.data, token };
  } catch (error: any) {
    toast.error(error.response?.data?.message);
  }
};
