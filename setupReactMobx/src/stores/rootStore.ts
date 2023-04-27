import { observable, makeObservable } from 'mobx'
import PatientsStore from './patientsStore';
import AuthStore from './authStore';
import { IStore } from '@/types/providers';

export class RootStore implements IStore {
  public patientsStore: PatientsStore = new PatientsStore();
  public authStore: AuthStore = new AuthStore();

  constructor() {
    makeObservable(this, {
      patientsStore: observable,
      authStore: observable,
    });
  }
}
