import { action, makeObservable, observable } from 'mobx';
import { AuthApi } from '@/apis/authApi';
import { ILoginModal } from '@/types/views';
import lscache from "lscache";
import { IUser } from '@/types/domain';

export default class AuthStore {
  api: AuthApi;
  user: IUser | null = null;

  constructor() {
    this.api = new AuthApi();

    makeObservable(this, {
      user: observable,
      login: action,
      logout: action
    })
  }

  get token(): string | null {
    return lscache.get("token") ?? null;
  }

  login = async (user: ILoginModal) => {
    try {
      const data = await this.api.login(user);

      if (data.error) throw data.error;

      lscache.set("token", data.token, data.tokenExpiration);
      this.user = data.user;

      return data.user;
    }
    catch(error) {
      throw error;
    }
  }

  logout = async () => {
    lscache.flush();
    this.user = null;
  }
}
