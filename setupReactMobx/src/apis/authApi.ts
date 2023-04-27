import { ILoginResponse } from "@/types/apis";
import { ILoginModal } from "@/types/views";

const baseURL = process.env.REACT_APP_BASE_URL;

export class AuthApi { 
  async login(user: ILoginModal): Promise<ILoginResponse> {
    const response =  await fetch(`${baseURL}/auth/login`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)
    });
    return await response.json();
  }
}

const authApi = new AuthApi();

export default authApi;